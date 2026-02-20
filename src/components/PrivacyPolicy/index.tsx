import React from "react";
import Breadcrumb from "../Common/Breadcrumb";
import { siteConfig } from "@/config/site";

const PrivacyPolicy = () => {
  return (
    <>
      <Breadcrumb title={"Privacy Policy"} pages={["Privacy Policy"]} />

      <section className="overflow-hidden py-20 bg-gray-2">
        <div className="max-w-[1170px] w-full mx-auto px-4 sm:px-8 xl:px-0">
          <div className="bg-white rounded-xl shadow-1 p-4 sm:p-7.5 xl:p-10">
            <div className="prose prose-lg max-w-none">
              <div className="mb-8">
                <h2 className="font-semibold text-dark text-2xl mb-4">
                  Introduction
                </h2>
                <p className="text-gray-600 mb-4">
                  At {siteConfig.brand.name}, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services.
                </p>
                <p className="text-gray-600">
                  By using our website, you consent to the data practices described in this policy. If you do not agree with the data practices described in this Privacy Policy, you should not use our website.
                </p>
              </div>

              <div className="mb-8">
                <h2 className="font-semibold text-dark text-2xl mb-4">
                  Information We Collect
                </h2>
                <p className="text-gray-600 mb-3">
                  We collect information that you provide directly to us and information that is automatically collected when you use our services:
                </p>
                <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-600">
                  <li>
                    <strong className="text-dark">Personal Information:</strong> Name, email address, phone number, shipping address, billing address, and payment information when you make a purchase or create an account.
                  </li>
                  <li>
                    <strong className="text-dark">Account Information:</strong> Username, password, and profile information when you register for an account.
                  </li>
                  <li>
                    <strong className="text-dark">Transaction Information:</strong> Details about purchases you make, including products purchased, payment method, and transaction history.
                  </li>
                  <li>
                    <strong className="text-dark">Usage Information:</strong> Information about how you interact with our website, including pages visited, time spent on pages, and click patterns.
                  </li>
                  <li>
                    <strong className="text-dark">Device Information:</strong> IP address, browser type, device type, operating system, and other technical information.
                  </li>
                </ul>
              </div>

              <div className="mb-8">
                <h2 className="font-semibold text-dark text-2xl mb-4">
                  How We Use Your Information
                </h2>
                <p className="text-gray-600 mb-3">
                  We use the information we collect for various purposes, including:
                </p>
                <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-600">
                  <li>To process and fulfill your orders and manage your account</li>
                  <li>To communicate with you about your orders, account, and our services</li>
                  <li>To send you marketing communications (with your consent)</li>
                  <li>To improve our website, products, and services</li>
                  <li>To detect and prevent fraud and abuse</li>
                  <li>To comply with legal obligations and enforce our terms of service</li>
                  <li>To personalize your shopping experience</li>
                </ul>
              </div>

              <div className="mb-8">
                <h2 className="font-semibold text-dark text-2xl mb-4">
                  Information Sharing and Disclosure
                </h2>
                <p className="text-gray-600 mb-3">
                  We do not sell your personal information. We may share your information in the following circumstances:
                </p>
                <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-600">
                  <li>
                    <strong className="text-dark">Service Providers:</strong> We may share information with third-party service providers who perform services on our behalf, such as payment processing, shipping, and data analytics.
                  </li>
                  <li>
                    <strong className="text-dark">Legal Requirements:</strong> We may disclose information if required by law or in response to valid legal requests.
                  </li>
                  <li>
                    <strong className="text-dark">Business Transfers:</strong> In the event of a merger, acquisition, or sale of assets, your information may be transferred.
                  </li>
                  <li>
                    <strong className="text-dark">With Your Consent:</strong> We may share information with your explicit consent.
                  </li>
                </ul>
              </div>

              <div className="mb-8">
                <h2 className="font-semibold text-dark text-2xl mb-4">
                  Data Security
                </h2>
                <p className="text-gray-600 mb-4">
                  We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
                </p>
                <p className="text-gray-600">
                  We use industry-standard encryption technologies and secure payment processing systems to protect your sensitive information, including credit card details.
                </p>
              </div>

              <div className="mb-8">
                <h2 className="font-semibold text-dark text-2xl mb-4">
                  Cookies and Tracking Technologies
                </h2>
                <p className="text-gray-600 mb-4">
                  We use cookies and similar tracking technologies to enhance your browsing experience, analyze website traffic, and personalize content. You can control cookies through your browser settings, but disabling cookies may limit your ability to use certain features of our website.
                </p>
                <p className="text-gray-600">
                  We use both session cookies (which expire when you close your browser) and persistent cookies (which remain on your device until deleted or expired).
                </p>
              </div>

              <div className="mb-8">
                <h2 className="font-semibold text-dark text-2xl mb-4">
                  Your Rights and Choices
                </h2>
                <p className="text-gray-600 mb-3">
                  Depending on your location, you may have certain rights regarding your personal information:
                </p>
                <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-600">
                  <li>
                    <strong className="text-dark">Access:</strong> You can request access to your personal information.
                  </li>
                  <li>
                    <strong className="text-dark">Correction:</strong> You can request correction of inaccurate information.
                  </li>
                  <li>
                    <strong className="text-dark">Deletion:</strong> You can request deletion of your personal information.
                  </li>
                  <li>
                    <strong className="text-dark">Opt-Out:</strong> You can opt-out of marketing communications at any time.
                  </li>
                  <li>
                    <strong className="text-dark">Data Portability:</strong> You can request a copy of your data in a portable format.
                  </li>
                </ul>
                <p className="text-gray-600">
                  To exercise these rights, please contact us using the contact information provided below.
                </p>
              </div>

              <div className="mb-8">
                <h2 className="font-semibold text-dark text-2xl mb-4">
                  Children's Privacy
                </h2>
                <p className="text-gray-600">
                  Our website is not intended for children under the age of 13. We do not knowingly collect personal information from children under 13. If you believe we have collected information from a child under 13, please contact us immediately, and we will take steps to delete such information.
                </p>
              </div>

              <div className="mb-8">
                <h2 className="font-semibold text-dark text-2xl mb-4">
                  Third-Party Links
                </h2>
                <p className="text-gray-600">
                  Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these external sites. We encourage you to review the privacy policies of any third-party sites you visit.
                </p>
              </div>

              <div className="mb-8">
                <h2 className="font-semibold text-dark text-2xl mb-4">
                  Changes to This Privacy Policy
                </h2>
                <p className="text-gray-600">
                  We may update this Privacy Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will notify you of any material changes by posting the new Privacy Policy on this page and updating the "Last Updated" date. We encourage you to review this Privacy Policy periodically.
                </p>
              </div>

              <div className="mb-8">
                <h2 className="font-semibold text-dark text-2xl mb-4">
                  Contact Us
                </h2>
                <p className="text-gray-600 mb-3">
                  If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:
                </p>
                <div className="bg-gray-1 rounded-md p-5 text-gray-600">
                  <p className="mb-2">
                    <strong className="text-dark">Email:</strong> {siteConfig.brand.email.privacy}
                  </p>
                  <p className="mb-2">
                    <strong className="text-dark">Phone:</strong> {siteConfig.brand.phone}
                  </p>
                  <p>
                    <strong className="text-dark">Address:</strong> {siteConfig.brand.address.full}
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

export default PrivacyPolicy;
