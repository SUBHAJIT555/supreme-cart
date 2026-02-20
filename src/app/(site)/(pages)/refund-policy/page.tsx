import RefundPolicy from "@/components/RefundPolicy";

import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Refund Policy | NextCommerce Nextjs E-commerce template",
  description: "This is Refund Policy Page for NextCommerce Template",
  // other metadata
};

const RefundPolicyPage = () => {
  return (
    <main>
      <RefundPolicy />
    </main>
  );
};

export default RefundPolicyPage;
