import Projects from "@/components/Projects";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects Page | BBConstructionHoldings",
  // other metadata
};

const ProjectsPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="About Page"
        description=""
      />
      <Projects />
    </>
  );
};

export default ProjectsPage;
