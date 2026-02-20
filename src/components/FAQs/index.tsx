"use client";
import React, { useState } from "react";
import Breadcrumb from "../Common/Breadcrumb";
import { siteConfig } from "@/config/site";

const FAQs = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards (Visa, MasterCard, American Express), PayPal, Apple Pay, and Google Pay. All payments are processed securely through our encrypted payment gateway."
    },
    {
      question: "How long does shipping take?",
      answer: "Standard shipping typically takes 5-7 business days. Express shipping options are available at checkout for 2-3 business day delivery. International shipping may take 10-14 business days depending on the destination."
    },
    {
      question: "Do you offer international shipping?",
      answer: "Yes, we ship to most countries worldwide. Shipping costs and delivery times vary by location. You can calculate shipping costs at checkout before completing your order."
    },
    {
      question: "What is your return policy?",
      answer: "We offer a 30-day return policy on unused items in their original packaging with tags attached. Items must be returned within 30 days of delivery. Please refer to our Refund Policy page for complete details."
    },
    {
      question: "How do I track my order?",
      answer: "Once your order ships, you'll receive a tracking number via email. You can use this tracking number on our website or the carrier's website to track your package's progress."
    },
    {
      question: "Can I cancel or modify my order?",
      answer: "Orders can be cancelled or modified within 24 hours of placement, provided they haven't been shipped yet. Please contact our customer service team immediately if you need to make changes to your order."
    },
    {
      question: "What if I receive a damaged or incorrect item?",
      answer: "If you receive a damaged or incorrect item, please contact us within 48 hours of delivery. We'll arrange for a replacement or full refund, including return shipping costs. Please include photos of the issue when contacting us."
    },
    {
      question: "Do you offer gift wrapping?",
      answer: "Yes, we offer gift wrapping services for an additional fee. You can select this option during checkout. We can also include a personalized message with your gift."
    },
    {
      question: "How do I create an account?",
      answer: "Click on 'Sign In' or 'Register' in the top navigation, fill in your details, and verify your email address. Creating an account allows you to track orders, save your address, and access exclusive offers."
    },
    {
      question: "How can I update my account information?",
      answer: "Log into your account and navigate to 'My Account' where you can update your personal information, shipping addresses, payment methods, and password."
    },
    {
      question: "Do you have a physical store?",
      answer: `Yes, we have a physical store located at ${siteConfig.brand.address.full}. Our store hours are ${siteConfig.brand.businessHours}.`
    },
    {
      question: "Are your products authentic?",
      answer: "Yes, all products sold on our website are 100% authentic and sourced directly from authorized suppliers. We guarantee the authenticity of every item we sell."
    },
    {
      question: "Do you offer discounts or promotions?",
      answer: "Yes, we regularly offer promotions and discounts. Sign up for our newsletter to receive exclusive offers, or check our website for current promotions. We also offer special discounts for first-time customers."
    },
    {
      question: "How do I contact customer service?",
      answer: `You can reach our customer service team via email at ${siteConfig.brand.email.support}, phone at ${siteConfig.brand.phone}, or through the contact form on our website. Our team is available ${siteConfig.brand.businessHours}.`
    },
    {
      question: "What is your privacy policy?",
      answer: "We are committed to protecting your privacy. We collect and use your information only as necessary to provide our services and improve your shopping experience. For complete details, please review our Privacy Policy page."
    }
  ];

  return (
    <>
      <Breadcrumb title={"FAQs"} pages={["FAQs"]} />

      <section className="overflow-hidden py-20 bg-gray-2">
        <div className="max-w-[1170px] w-full mx-auto px-4 sm:px-8 xl:px-0">
          <div className="bg-white rounded-xl shadow-1 p-4 sm:p-7.5 xl:p-10">
            <div className="mb-8">
              <h2 className="font-semibold text-dark text-2xl mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-gray-600">
                Find answers to common questions about our products, shipping, returns, and more. If you can't find what you're looking for, please don't hesitate to contact us.
              </p>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="border border-gray-3 rounded-lg overflow-hidden"
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full flex items-center justify-between p-4 sm:p-5 text-left hover:bg-gray-1 transition-colors duration-200"
                  >
                    <span className="font-medium text-dark pr-4">
                      {faq.question}
                    </span>
                    <svg
                      className={`flex-shrink-0 w-5 h-5 text-blue transition-transform duration-200 ${
                        openIndex === index ? "rotate-180" : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                  {openIndex === index && (
                    <div className="px-4 sm:px-5 pb-4 sm:pb-5">
                      <p className="text-gray-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-10 pt-8 border-t border-gray-3">
              <div className="bg-blue/5 rounded-md p-5">
                <h3 className="font-semibold text-dark text-xl mb-3">
                  Still have questions?
                </h3>
                <p className="text-gray-600 mb-4">
                  Can't find the answer you're looking for? Our customer service team is here to help.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="/contact"
                    className="inline-flex items-center justify-center font-medium text-white bg-blue py-2.5 px-6 rounded-md ease-out duration-200 hover:bg-blue-dark"
                  >
                    Contact Us
                  </a>
                  <a
                    href={`mailto:${siteConfig.brand.email.support}`}
                    className="inline-flex items-center justify-center font-medium text-blue border border-blue py-2.5 px-6 rounded-md ease-out duration-200 hover:bg-blue hover:text-white"
                  >
                    Email Support
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FAQs;
