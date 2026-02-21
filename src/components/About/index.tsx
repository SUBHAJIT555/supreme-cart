import React from "react";
import Breadcrumb from "../Common/Breadcrumb";
import { siteConfig } from "@/config/site";
import Image from "next/image";

const About = () => {
  return (
    <>
      <Breadcrumb title={"About Us"} pages={["About Us"]} />

      <section className="overflow-hidden py-20 bg-gray-2">
        <div className="max-w-[1170px] w-full mx-auto px-4 sm:px-8 xl:px-0">
          {/* Hero Section */}
          <div className="bg-white rounded-xl shadow-1 p-4 sm:p-7.5 xl:p-10 mb-10">
            <div className="text-center mb-8">
              <h1 className="font-semibold text-dark text-3xl sm:text-4xl mb-4">
                Welcome to {siteConfig.brand.name}
              </h1>
              <p className="text-gray-600 text-lg max-w-3xl mx-auto">
                {siteConfig.brand.name} is a homegrown Indian brand built for Indian shoppers. We offer electronics,
                stationery, books, and garments at honest prices, with a focus on quality, value, and reliable
                service across India.
              </p>
            </div>
          </div>

          {/* Our Story Section */}
          <div className="bg-white rounded-xl shadow-1 p-4 sm:p-7.5 xl:p-10 mb-10">
            <h2 className="font-semibold text-dark text-2xl mb-6">
              Our Story
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-600 mb-4">
                {siteConfig.brand.name} was born in India with one goal: to give Indian customers a trusted place to shop
                for electronics, stationery, books, and fashion at honest prices. We started as a
                small team focused on the Indian market and have grown by putting quality and customer trust first.
              </p>
              <p className="text-gray-600 mb-4">
                We work with trusted suppliers and brands to bring you mobile accessories, smart gadgets, computer
                accessories, home electronics, books, stationery, and apparel for men, women, and kids. Every product
                is chosen with Indian homes and budgets in mind.
              </p>
              <p className="text-gray-600">
                As an Indian brand, we understand what you need: reliable delivery across the country, easy returns,
                secure payments including UPI and cards, and support when you need it. We are here to serve India,
                one order at a time.
              </p>
            </div>
          </div>

          {/* Mission & Values */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-7.5 mb-10">
            <div className="bg-white rounded-xl shadow-1 p-4 sm:p-7.5 xl:p-10">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-blue/10 flex items-center justify-center">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-blue"
                  >
                    <path
                      d="M12 2L2 7L12 12L22 7L12 2Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M2 17L12 22L22 17"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M2 12L12 17L22 12"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h3 className="font-semibold text-dark text-xl">Our Mission</h3>
              </div>
              <p className="text-gray-600">
                To be India&apos;s trusted everyday store—offering quality electronics, stationery, books, and garments
                at honest prices, with safe payments and service that puts Indian customers first.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-1 p-4 sm:p-7.5 xl:p-10">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-blue/10 flex items-center justify-center">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-blue"
                  >
                    <path
                      d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h3 className="font-semibold text-dark text-xl">Our Values</h3>
              </div>
              <ul className="list-disc pl-5 space-y-2 text-gray-600">
                <li>Made for India—products and service built for Indian needs</li>
                <li>Quality and value—curated range at honest prices</li>
                <li>Transparency and trust—clear pricing, no hidden charges</li>
                <li>Reliable delivery and easy returns across India</li>
              </ul>
            </div>
          </div>

          {/* Why Choose Us */}
          <div className="bg-white rounded-xl shadow-1 p-4 sm:p-7.5 xl:p-10 mb-10">
            <h2 className="font-semibold text-dark text-2xl mb-6">
              Why Choose {siteConfig.brand.name}?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div>
                <div className="w-10 h-10 rounded-lg bg-blue/10 flex items-center justify-center mb-3">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-blue"
                  >
                    <path
                      d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h3 className="font-medium text-dark mb-2">Quality Guaranteed</h3>
                <p className="text-gray-600 text-sm">
                  Every product is curated for Indian customers—electronics, stationery, books, and garments that meet
                  our quality standards.
                </p>
              </div>

              <div>
                <div className="w-10 h-10 rounded-lg bg-blue/10 flex items-center justify-center mb-3">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-blue"
                  >
                    <path
                      d="M3 3H5L7.68 14.39C7.77144 14.8504 8.02191 15.264 8.38755 15.5583C8.75318 15.8526 9.2107 16.009 9.68 16H19M9 21C9.55228 21 10 20.5523 10 20C10 19.4477 9.55228 19 9 19C8.44772 19 8 19.4477 8 20C8 20.5523 8.44772 21 9 21ZM20 21C20.5523 21 21 20.5523 21 20C21 19.4477 20.5523 19 20 19C19.4477 19 19 19.4477 19 20C19 20.5523 19.4477 21 20 21Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h3 className="font-medium text-dark mb-2">Easy Returns</h3>
                <p className="text-gray-600 text-sm">
                  Shop with confidence—our 7-day return policy and simple process are designed for Indian shoppers.
                </p>
              </div>

              <div>
                <div className="w-10 h-10 rounded-lg bg-blue/10 flex items-center justify-center mb-3">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-blue"
                  >
                    <path
                      d="M12 8V12L15 15M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h3 className="font-medium text-dark mb-2">Delivery Across India</h3>
                <p className="text-gray-600 text-sm">
                  We ship to every corner of India. Free delivery on orders above ₹499 so you get more value.
                </p>
              </div>

              <div>
                <div className="w-10 h-10 rounded-lg bg-blue/10 flex items-center justify-center mb-3">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-blue"
                  >
                    <path
                      d="M18 8A6 6 0 0 0 6 8C6 11.3137 12 19.3137 12 19.3137C12 19.3137 18 11.3137 18 8Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12 10C13.1046 10 14 9.10457 14 8C14 6.89543 13.1046 6 12 6C10.8954 6 10 6.89543 10 8C10 9.10457 10.8954 10 12 10Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h3 className="font-medium text-dark mb-2">Secure Payments</h3>
                <p className="text-gray-600 text-sm">
                  Pay safely with UPI, cards, and other methods. Your data is protected with secure encryption.
                </p>
              </div>

              <div>
                <div className="w-10 h-10 rounded-lg bg-blue/10 flex items-center justify-center mb-3">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-blue"
                  >
                    <path
                      d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13M16 3.13C16.8604 3.35031 17.623 3.85071 18.1676 4.55232C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89318 18.7122 8.75608 18.1676 9.45769C17.623 10.1593 16.8604 10.6597 16 10.88M13 7C13 9.20914 11.2091 11 9 11C6.79086 11 5 9.20914 5 7C5 4.79086 6.79086 3 9 3C11.2091 3 13 4.79086 13 7Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h3 className="font-medium text-dark mb-2">India-Focused Support</h3>
                <p className="text-gray-600 text-sm">
                  Our support team understands Indian shoppers. Reach out anytime for help in your preferred language.
                </p>
              </div>

              <div>
                <div className="w-10 h-10 rounded-lg bg-blue/10 flex items-center justify-center mb-3">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-blue"
                  >
                    <path
                      d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h3 className="font-medium text-dark mb-2">Honest Prices</h3>
                <p className="text-gray-600 text-sm">
                  No inflated prices—just fair value for Indian customers on electronics, books, stationery, and garments.
                </p>
              </div>
            </div>
          </div>

          {/* Contact Section */}
          <div className="bg-white rounded-xl shadow-1 p-4 sm:p-7.5 xl:p-10">
            <h2 className="font-semibold text-dark text-2xl mb-6">
              Get in Touch
            </h2>
            <p className="text-gray-600 mb-6">
              We&apos;d love to hear from you! As an Indian brand serving Indian customers, your feedback and
              questions matter. Our team is here to help—reach out anytime.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-blue/10 flex items-center justify-center flex-shrink-0">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-blue"
                  >
                    <path
                      d="M3 8L10.89 13.26C11.2187 13.4793 11.6049 13.5963 12 13.5963C12.3951 13.5963 12.7813 13.4793 13.11 13.26L21 8M5 19H19C19.5304 19 20.0391 18.7893 20.4142 18.4142C20.7893 18.0391 21 17.5304 21 17V7C21 6.46957 20.7893 5.96086 20.4142 5.58579C20.0391 5.21071 19.5304 5 19 5H5C4.46957 5 3.96086 5.21071 3.58579 5.58579C3.21071 5.96086 3 6.46957 3 7V17C3 17.5304 3.21071 18.0391 3.58579 18.4142C3.96086 18.7893 4.46957 19 5 19Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium text-dark mb-1">Email</h3>
                  <a href={`mailto:${siteConfig.brand.email.general}`} className="text-blue hover:underline">
                    {siteConfig.brand.email.general}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-blue/10 flex items-center justify-center flex-shrink-0">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-blue"
                  >
                    <path
                      d="M3 5C3 3.89543 3.89543 3 5 3H8.27924C8.70967 3 9.09181 3.27543 9.22792 3.68377L10.7257 8.17721C10.8831 8.64932 10.6694 9.16531 10.2243 9.38787L7.96701 10.5165C9.06925 12.9612 11.0388 14.9308 13.4835 16.033L14.6121 13.7757C14.8347 13.3306 15.3507 13.1169 15.8228 13.2743L20.3162 14.7721C20.7246 14.9082 21 15.2903 21 15.7208V19C21 20.1046 20.1046 21 19 21H18C9.71573 21 3 14.2843 3 6V5Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium text-dark mb-1">Phone</h3>
                  <a href={`tel:${siteConfig.brand.phone.replace(/\s/g, '')}`} className="text-blue hover:underline">
                    {siteConfig.brand.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-blue/10 flex items-center justify-center flex-shrink-0">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-blue"
                  >
                    <path
                      d="M21 10C21 17 12 23 12 23C12 23 3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.364 3.63604C20.0518 5.32387 21 7.61305 21 10Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium text-dark mb-1">Address</h3>
                  <p className="text-gray-600">{siteConfig.brand.address.full}</p>
                  <p className="text-gray-600 text-sm mt-1">{siteConfig.brand.businessHours}</p>
                </div>
              </div>
            </div>
            <div className="mt-6">
              <a
                href="/contact"
                className="inline-flex items-center justify-center font-medium text-white bg-blue py-2.5 px-6 rounded-md ease-out duration-200 hover:bg-blue-dark"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
