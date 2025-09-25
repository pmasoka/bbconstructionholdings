import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Page | BBConstructionHoldings",
  description: "BBConstructionHoldings",
  // other metadata
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Contact Page"
        description="BBConstructionHoldings"
      />

      <Contact />
    </>
  );
};

export default ContactPage;
