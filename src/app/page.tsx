import FeatureItems from "@/components/Feature/FeatureItems";
import Service from "@/components/Services";
import ScrollUp from "@/components/Common/ScrollUp";
import Hero from "@/components/Hero";
import Testimonials from "@/components/References";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home | BBConstructionsHoldindings",
  description: "This is Home for BB Constructions",
  // other metadata
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <Service />
      <FeatureItems />
      <Testimonials />
    </>
  );
}
