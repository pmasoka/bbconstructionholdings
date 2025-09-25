import SectionTitle from "../Common/SectionTitle";
import SingleService from "./SingleService";
import serviceData from "./serviceData";

const Service = () => {
  return (
    <section
      id="services"
      className="bg-white dark:bg-bg-color-dark py-16 md:py-20 lg:py-28"
    >
      <div className="container">
        <SectionTitle
          title="Services"
          paragraph="Providing top-quality construction services, including renovations, remodeling, and new construction projects for residential and commercial clients."
          center
        />

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 md:gap-x-6 lg:gap-x-8 xl:grid-cols-3">
          {serviceData.map((service) => (
            <div key={service.id} className="w-full">
              <SingleService service={service} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Service;
