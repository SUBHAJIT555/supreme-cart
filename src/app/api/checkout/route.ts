import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const {
      firstName,
      lastName,
      email,
      phone,
      address,
      addressTwo,
      town,
      state,
      country,
      notes,
      paymentMethod,
      orderItems,
      total,
    } = body;

    const orderSummary = (orderItems || [])
      .map(
        (item: { title: string; quantity: number; price: number }) =>
          `- ${item.title} x ${item.quantity} = ₹${(item.quantity * item.price).toLocaleString('en-IN')}`
      )
      .join("\n");

    const emailHtml = `
      <h2>New Order</h2>
      <p><strong>Customer:</strong> ${firstName || ""} ${lastName || ""}</p>
      <p><strong>Email:</strong> ${email || ""}</p>
      <p><strong>Phone:</strong> ${phone || ""}</p>
      <p><strong>Address:</strong> ${address || ""} ${addressTwo ? ", " + addressTwo : ""}</p>
      <p><strong>Town/City:</strong> ${town || ""}</p>
      <p><strong>State:</strong> ${state || ""}</p>
      <p><strong>Country:</strong> ${country || ""}</p>
      <p><strong>Payment Method:</strong> ${paymentMethod || ""}</p>
      ${notes ? `<p><strong>Notes:</strong> ${notes}</p>` : ""}
      <h3>Order Items</h3>
      <pre>${orderSummary}</pre>
      <p><strong>Total:</strong> ₹${typeof total === "number" ? total.toLocaleString('en-IN') : total}</p>
    `;

    const toEmail = process.env.CHECKOUT_EMAIL_TO || process.env.EMAIL_TO || "support@supremecart.com";

    if (
      !process.env.SMTP_HOST ||
      !process.env.SMTP_USER ||
      !process.env.SMTP_PASS
    ) {
      console.log("Checkout order (email not configured):", body);
      return NextResponse.json(
        { success: true, message: "Order received. Configure SMTP to receive emails." },
        { status: 200 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 587,
      secure: process.env.SMTP_SECURE === "true",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.SMTP_FROM || process.env.SMTP_USER,
      to: toEmail,
      subject: `New Order from ${firstName || ""} ${lastName || ""}`,
      text: emailHtml.replace(/<[^>]*>/g, ""),
      html: emailHtml,
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Checkout API error:", error);
    return NextResponse.json(
      { success: false, error: error instanceof Error ? error.message : "Failed to process order" },
      { status: 500 }
    );
  }
}
