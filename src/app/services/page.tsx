import SingleService from "@/components/Services/SingleService";
import serviceData from "@/components/Services/serviceData";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services Page | BBConstructionHoldings",
  description: "This is the Services page showcasing all the solutions we provide.",
  // other metadata
};

const Services = () => {
  return (
    <>
      <Breadcrumb
        pageName="Our Services"
        description="Providing top-quality construction services, including renovations, remodeling, and new construction projects for residential and commercial clients."
      />

      <section className="pt-[120px] pb-[120px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap justify-center">
            {serviceData.map((service) => (
              <div
                key={service.id}
                className="w-full px-4 md:w-2/3 lg:w-1/2 xl:w-1/3"
              >
                <SingleService service={service} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
