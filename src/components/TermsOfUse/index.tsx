import React from "react";
import Breadcrumb from "../Common/Breadcrumb";
import { siteConfig } from "@/config/site";

const TermsOfUse = () => {
  return (
    <>
      <Breadcrumb title={"Terms of Use"} pages={["Terms of Use"]} />

      <section className="overflow-hidden py-20 bg-gray-2">
        <div className="max-w-[1170px] w-full mx-auto px-4 sm:px-8 xl:px-0">
          <div className="bg-white rounded-xl shadow-1 p-4 sm:p-7.5 xl:p-10">
            <div className="prose prose-lg max-w-none">
              <div className="mb-8">
                <h2 className="font-semibold text-dark text-2xl mb-4">
                  Terms of Use
                </h2>
                <p className="text-gray-600 mb-4">
                  Welcome to {siteConfig.brand.name}. These Terms of Use ("Terms") govern your access to and use of our website, products, and services. By accessing or using our website, you agree to be bound by these Terms. If you do not agree to these Terms, please do not use our website.
                </p>
              </div>

              <div className="mb-8">
                <h2 className="font-semibold text-dark text-2xl mb-4">
                  Acceptance of Terms
                </h2>
                <p className="text-gray-600 mb-4">
                  By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
                </p>
              </div>

              <div className="mb-8">
                <h2 className="font-semibold text-dark text-2xl mb-4">
                  Use License
                </h2>
                <p className="text-gray-600 mb-3">
                  Permission is granted to temporarily access the materials on {siteConfig.brand.name}'s website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
                </p>
                <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-600">
                  <li>Modify or copy the materials</li>
                  <li>Use the materials for any commercial purpose or for any public display</li>
                  <li>Attempt to decompile or reverse engineer any software contained on the website</li>
                  <li>Remove any copyright or other proprietary notations from the materials</li>
                  <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
                </ul>
              </div>

              <div className="mb-8">
                <h2 className="font-semibold text-dark text-2xl mb-4">
                  Account Registration
                </h2>
                <p className="text-gray-600 mb-3">
                  To access certain features of our website, you may be required to create an account. When creating an account, you agree to:
                </p>
                <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-600">
                  <li>Provide accurate, current, and complete information</li>
                  <li>Maintain and promptly update your account information</li>
                  <li>Maintain the security of your password and identification</li>
                  <li>Accept all responsibility for activities that occur under your account</li>
                  <li>Notify us immediately of any unauthorized use of your account</li>
                </ul>
              </div>

              <div className="mb-8">
                <h2 className="font-semibold text-dark text-2xl mb-4">
                  Product Information and Pricing
                </h2>
                <p className="text-gray-600 mb-4">
                  We strive to provide accurate product descriptions, images, and pricing. However, we do not warrant that product descriptions, images, or other content on our website is accurate, complete, reliable, current, or error-free. Prices are subject to change without notice. We reserve the right to correct any errors, inaccuracies, or omissions and to change or update information at any time without prior notice.
                </p>
              </div>

              <div className="mb-8">
                <h2 className="font-semibold text-dark text-2xl mb-4">
                  Orders and Payment
                </h2>
                <p className="text-gray-600 mb-3">
                  When you place an order through our website:
                </p>
                <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-600">
                  <li>You agree to provide current, complete, and accurate purchase and account information</li>
                  <li>You agree to promptly update your account and payment information</li>
                  <li>We reserve the right to refuse or cancel your order at any time</li>
                  <li>We reserve the right to limit or prohibit orders that appear to be placed by dealers, resellers, or distributors</li>
                  <li>You agree to pay all charges incurred by your account</li>
                </ul>
              </div>

              <div className="mb-8">
                <h2 className="font-semibold text-dark text-2xl mb-4">
                  Prohibited Uses
                </h2>
                <p className="text-gray-600 mb-3">
                  You may not use our website:
                </p>
                <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-600">
                  <li>In any way that violates any applicable federal, state, local, or international law or regulation</li>
                  <li>To transmit, or procure the sending of, any advertising or promotional material without our prior written consent</li>
                  <li>To impersonate or attempt to impersonate the company, a company employee, another user, or any other person or entity</li>
                  <li>In any way that infringes upon the rights of others, or in any way is illegal, threatening, fraudulent, or harmful</li>
                  <li>To engage in any other conduct that restricts or inhibits anyone's use or enjoyment of the website</li>
                </ul>
              </div>

              <div className="mb-8">
                <h2 className="font-semibold text-dark text-2xl mb-4">
                  Intellectual Property Rights
                </h2>
                <p className="text-gray-600 mb-4">
                  The website and its original content, features, and functionality are owned by {siteConfig.brand.name} and are protected by international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws. You may not reproduce, distribute, modify, create derivative works of, publicly display, publicly perform, republish, download, store, or transmit any of the material on our website without our prior written consent.
                </p>
              </div>

              <div className="mb-8">
                <h2 className="font-semibold text-dark text-2xl mb-4">
                  User Content
                </h2>
                <p className="text-gray-600 mb-4">
                  Our website may allow you to post, link, store, share, and otherwise make available certain information, text, graphics, or other material ("User Content"). You are responsible for User Content that you post on or through the website. By posting User Content, you grant us a non-exclusive, worldwide, royalty-free, perpetual, irrevocable license to use, reproduce, modify, adapt, publish, translate, and distribute such User Content.
                </p>
              </div>

              <div className="mb-8">
                <h2 className="font-semibold text-dark text-2xl mb-4">
                  Disclaimer of Warranties
                </h2>
                <p className="text-gray-600 mb-4">
                  The information on this website is provided on an "as is" basis. To the fullest extent permitted by law, {siteConfig.brand.name} excludes all representations, warranties, conditions, and terms relating to our website and the use of this website. We do not warrant that the website will be available at all times or that the website will be error-free, virus-free, or free from other harmful components.
                </p>
              </div>

              <div className="mb-8">
                <h2 className="font-semibold text-dark text-2xl mb-4">
                  Limitation of Liability
                </h2>
                <p className="text-gray-600 mb-4">
                  In no event shall {siteConfig.brand.name}, its directors, employees, or agents be liable to you or any third party for any indirect, consequential, incidental, special, or punitive damages, including lost profit, lost revenue, loss of data, or other damages arising from your use of the website, even if we have been advised of the possibility of such damages.
                </p>
              </div>

              <div className="mb-8">
                <h2 className="font-semibold text-dark text-2xl mb-4">
                  Indemnification
                </h2>
                <p className="text-gray-600 mb-4">
                  You agree to defend, indemnify, and hold harmless {siteConfig.brand.name} and its officers, directors, employees, and agents from and against any claims, liabilities, damages, losses, and expenses, including without limitation, reasonable legal and accounting fees, arising out of or in any way connected with your access to or use of the website or your violation of these Terms.
                </p>
              </div>

              <div className="mb-8">
                <h2 className="font-semibold text-dark text-2xl mb-4">
                  Termination
                </h2>
                <p className="text-gray-600 mb-4">
                  We may terminate or suspend your account and bar access to the website immediately, without prior notice or liability, under our sole discretion, for any reason whatsoever and without limitation, including but not limited to a breach of the Terms. If you wish to terminate your account, you may simply discontinue using the website.
                </p>
              </div>

              <div className="mb-8">
                <h2 className="font-semibold text-dark text-2xl mb-4">
                  Governing Law
                </h2>
                <p className="text-gray-600 mb-4">
                  These Terms shall be interpreted and governed by the laws of the jurisdiction in which {siteConfig.brand.name} operates, without regard to its conflict of law provisions. Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights.
                </p>
              </div>

              <div className="mb-8">
                <h2 className="font-semibold text-dark text-2xl mb-4">
                  Changes to Terms
                </h2>
                <p className="text-gray-600 mb-4">
                  We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will provide at least 30 days notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion. By continuing to access or use our website after any revisions become effective, you agree to be bound by the revised terms.
                </p>
              </div>

              <div className="mb-8">
                <h2 className="font-semibold text-dark text-2xl mb-4">
                  Contact Information
                </h2>
                <p className="text-gray-600 mb-3">
                  If you have any questions about these Terms of Use, please contact us:
                </p>
                <div className="bg-gray-1 rounded-md p-5 text-gray-600">
                  <p className="mb-2">
                    <strong className="text-dark">Email:</strong> {siteConfig.brand.email.legal}
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

export default TermsOfUse;
