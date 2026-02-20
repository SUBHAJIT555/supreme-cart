import React from "react";
import Breadcrumb from "../Common/Breadcrumb";
import { siteConfig } from "@/config/site";

const RefundPolicy = () => {
  return (
    <>
      <Breadcrumb title={"Refund Policy"} pages={["Refund Policy"]} />

      <section className="overflow-hidden py-20 bg-gray-2">
        <div className="max-w-[1170px] w-full mx-auto px-4 sm:px-8 xl:px-0">
          <div className="bg-white rounded-xl shadow-1 p-4 sm:p-7.5 xl:p-10">
            <div className="prose prose-lg max-w-none">
              <div className="mb-8">
                <h2 className="font-semibold text-dark text-2xl mb-4">
                  Refund Policy
                </h2>
                <p className="text-gray-600 mb-4">
                  At {siteConfig.brand.name}, we want you to be completely satisfied with your purchase. If you are not satisfied with your order, we offer a refund policy to ensure your peace of mind.
                </p>
              </div>

              <div className="mb-8">
                <h2 className="font-semibold text-dark text-2xl mb-4">
                  Eligibility for Refunds
                </h2>
                <p className="text-gray-600 mb-3">
                  To be eligible for a refund, the following conditions must be met:
                </p>
                <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-600">
                  <li>Items must be returned within 30 days of the delivery date</li>
                  <li>Items must be unused, unwashed, and in their original condition with tags attached</li>
                  <li>Items must be in their original packaging</li>
                  <li>Proof of purchase (order number or receipt) must be provided</li>
                  <li>Certain items such as personalized or custom-made products may not be eligible for refund</li>
                </ul>
              </div>

              <div className="mb-8">
                <h2 className="font-semibold text-dark text-2xl mb-4">
                  How to Request a Refund
                </h2>
                <p className="text-gray-600 mb-3">
                  To initiate a refund, please follow these steps:
                </p>
                <ol className="list-decimal pl-6 mb-4 space-y-2 text-gray-600">
                  <li>Contact our customer service team via email at {siteConfig.brand.email.support} or call us at {siteConfig.brand.phone}</li>
                  <li>Provide your order number and reason for the refund request</li>
                  <li>Our team will review your request and provide you with a Return Authorization (RA) number</li>
                  <li>Package the item(s) securely in the original packaging</li>
                  <li>Include the RA number and return the package to the address provided</li>
                </ol>
              </div>

              <div className="mb-8">
                <h2 className="font-semibold text-dark text-2xl mb-4">
                  Refund Processing
                </h2>
                <p className="text-gray-600 mb-3">
                  Once we receive your returned item(s):
                </p>
                <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-600">
                  <li>We will inspect the item(s) within 5-7 business days of receipt</li>
                  <li>If approved, your refund will be processed within 10-14 business days</li>
                  <li>Refunds will be issued to the original payment method used for the purchase</li>
                  <li>You will receive an email confirmation once the refund has been processed</li>
                </ul>
                <p className="text-gray-600">
                  Please note that shipping costs are non-refundable unless the return is due to our error or a defective product.
                </p>
              </div>

              <div className="mb-8">
                <h2 className="font-semibold text-dark text-2xl mb-4">
                  Return Shipping
                </h2>
                <p className="text-gray-600 mb-4">
                  Customers are responsible for return shipping costs unless the return is due to our error, a defective product, or if otherwise stated in our return policy. We recommend using a trackable shipping service and retaining proof of shipment.
                </p>
                <p className="text-gray-600">
                  If you received a damaged or incorrect item, please contact us immediately, and we will arrange for a prepaid return label at no cost to you.
                </p>
              </div>

              <div className="mb-8">
                <h2 className="font-semibold text-dark text-2xl mb-4">
                  Non-Refundable Items
                </h2>
                <p className="text-gray-600 mb-3">
                  The following items are not eligible for refunds:
                </p>
                <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-600">
                  <li>Items that have been used, washed, or damaged by the customer</li>
                  <li>Items without original tags or packaging</li>
                  <li>Personalized, custom-made, or monogrammed items</li>
                  <li>Gift cards and promotional items</li>
                  <li>Items returned after the 30-day return period</li>
                  <li>Digital products and downloadable content</li>
                </ul>
              </div>

              <div className="mb-8">
                <h2 className="font-semibold text-dark text-2xl mb-4">
                  Exchange Policy
                </h2>
                <p className="text-gray-600 mb-4">
                  We currently do not offer direct exchanges. If you wish to exchange an item, please return the original item for a refund and place a new order for the desired item. This ensures you receive the correct size, color, or style without delay.
                </p>
              </div>

              <div className="mb-8">
                <h2 className="font-semibold text-dark text-2xl mb-4">
                  Damaged or Defective Items
                </h2>
                <p className="text-gray-600 mb-4">
                  If you receive a damaged or defective item, please contact us within 48 hours of delivery. We will arrange for a replacement or full refund, including return shipping costs. Please include photos of the damage or defect when contacting us.
                </p>
              </div>

              <div className="mb-8">
                <h2 className="font-semibold text-dark text-2xl mb-4">
                  Late or Missing Refunds
                </h2>
                <p className="text-gray-600 mb-3">
                  If you haven't received your refund within the expected timeframe:
                </p>
                <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-600">
                  <li>Check your bank account or credit card statement</li>
                  <li>Contact your bank or credit card company, as it may take some time for the refund to be posted</li>
                  <li>If you've done the above and still haven't received your refund, please contact us at support@addina.com</li>
                </ul>
              </div>

              <div className="mb-8">
                <h2 className="font-semibold text-dark text-2xl mb-4">
                  Contact Us
                </h2>
                <p className="text-gray-600 mb-3">
                  If you have any questions about our refund policy, please contact us:
                </p>
                <div className="bg-gray-1 rounded-md p-5 text-gray-600">
                  <p className="mb-2">
                    <strong className="text-dark">Email:</strong> {siteConfig.brand.email.support}
                  </p>
                  <p className="mb-2">
                    <strong className="text-dark">Phone:</strong> {siteConfig.brand.phone}
                  </p>
                  <p>
                    <strong className="text-dark">Address:</strong> {siteConfig.brand.address.full}
                  </p>
                  <p className="mt-2">
                    <strong className="text-dark">Business Hours:</strong> {siteConfig.brand.businessHours}
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-gray-3">
                <p className="text-gray-600 text-sm">
                  <strong className="text-dark">Last Updated:</strong> {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default RefundPolicy;
