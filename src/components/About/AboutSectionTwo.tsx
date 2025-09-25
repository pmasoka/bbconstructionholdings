import Image from "next/image";
import { FaCheck } from "react-icons/fa";

const values = [
  "Purpose: Driving meaningful impact with determination.",
  "Innovation: Pioneering creative and advanced solutions.",
  "Expertise: Leveraging deep knowledge and experience.",
  "Integrity: Upholding honesty, reliability, and ethics.",
  "Excellence: Delivering outstanding quality in all endeavors.",
];

const AboutSectionTwo = () => {
  return (
    <section className="py-20 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-900">
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-center gap-y-12 lg:gap-y-0">
          {/* Left side image */}
          <div className="w-full px-4 lg:w-1/2">
            <div
              className="relative mx-auto -mt-8 aspect-25/24 max-w-[600px] scale-105 overflow-hidden rounded-xl shadow-lg lg:m-0"
              data-wow-delay=".15s"
            >
              <Image
                src="/images/about/about.jpg"
                alt="about image"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Right side text */}
          <div className="w-full px-4 lg:w-1/2">
            <div className="max-w-[520px]">
              {/* About Us */}
              <div className="mb-10">
                <h3 className="mb-4 text-2xl font-bold text-black dark:text-white sm:text-3xl lg:text-2xl xl:text-3xl">
                  About Us
                </h3>
                <p className="text-base leading-relaxed text-gray-700 dark:text-gray-300 sm:text-lg sm:leading-relaxed">
                  BB Construction Holdings is a leading Zimbabwe-based holding company,
                  established in 1999, committed to delivering innovative, high-quality, and
                  affordable solutions across multiple sectors. Registered under the
                  Companies Act [24:03] in Zimbabwe, BB Holdings was founded to address infrastructure
                  and service gaps in Zimbabwe and Africa at large. Through its flagship subsidiary,
                  BB Construction and Civil Engineering, and a portfolio of specialized divisions,
                  BB Holdings offers a wide range of services, including construction, irrigation,
                  retail, transportation, motor spares, tyre services, and security.
                </p>
              </div>

              {/* Mission */}
              <div className="mb-10">
                <h3 className="mb-4 text-2xl font-bold text-black dark:text-white sm:text-3xl lg:text-2xl xl:text-3xl">
                  Our Mission
                </h3>
                <p className="text-base leading-relaxed text-gray-700 dark:text-gray-300 sm:text-lg sm:leading-relaxed">
                  To deliver client-focused, innovative solutions across construction, retail,
                  logistics, and security, fostering sustainable development through excellence.
                </p>
              </div>

              {/* Vision */}
              <div className="mb-10">
                <h3 className="mb-4 text-2xl font-bold text-black dark:text-white sm:text-3xl lg:text-2xl xl:text-3xl">
                  Our Vision
                </h3>
                <p className="text-base leading-relaxed text-gray-700 dark:text-gray-300 sm:text-lg sm:leading-relaxed">
                  To be the premier provider of integrated infrastructure and service solutions in Zimbabwe
                  and beyond, closing gaps and creating value for clients and communities.
                </p>
              </div>

              {/* Values with checkmarks */}
              <div>
                <h3 className="mb-4 text-2xl font-bold text-black dark:text-white sm:text-3xl lg:text-2xl xl:text-3xl">
                  Our Values
                </h3>
                <ul className="space-y-3 text-base leading-relaxed text-gray-700 dark:text-gray-300 sm:text-lg sm:leading-relaxed">
                  {values.map((value, index) => (
                    <li key={index} className="flex items-start">
                      <FaCheck className="text-green-600 mt-1 mr-3 flex-shrink-0" />
                      {value}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionTwo;
