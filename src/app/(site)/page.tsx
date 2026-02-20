import Home from "@/components/Home";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Supreme Cart | Online Shopping for Electronics, Books, Stationery, and Garments",
  description: "Supreme Cart is India's trusted store for electronics, books, stationery, and garments all under ₹10,000. Enjoy honest prices, fast delivery, and support made for Indian shoppers.",
  // other metadata
};

export default function HomePage() {
  return (
    <>
      <Home />
    </>
  );
}
