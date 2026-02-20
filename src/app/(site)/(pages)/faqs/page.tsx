import FAQs from "@/components/FAQs";

import { Metadata } from "next";
export const metadata: Metadata = {
  title: "FAQs | NextCommerce Nextjs E-commerce template",
  description: "This is FAQs Page for NextCommerce Template",
  // other metadata
};

const FAQsPage = () => {
  return (
    <main>
      <FAQs />
    </main>
  );
};

export default FAQsPage;
