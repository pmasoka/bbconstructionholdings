"use client";

import { useState } from "react";
import Image from "next/image";

const projects = [
  { id: 1, category: "remodeling", title: "Remodeling 1", img: "/images/projects/remodeling-1.jpg" },
  { id: 2, category: "construction", title: "Construction 1", img: "/images/projects/construction-1.jpg" },
  { id: 3, category: "repairs", title: "Repairs 1", img: "/images/projects/repairs-1.jpg" },
  { id: 4, category: "design", title: "Design 1", img: "/images/projects/design-1.jpg" },
  { id: 5, category: "remodeling", title: "Remodeling 2", img: "/images/projects/remodeling-2.jpg" },
  { id: 6, category: "construction", title: "Construction 2", img: "/images/projects/construction-2.jpg" },
  { id: 7, category: "repairs", title: "Repairs 2", img: "/images/projects/repairs-2.jpg" },
  { id: 8, category: "design", title: "Design 2", img: "/images/projects/design-2.jpg" },
  { id: 9, category: "remodeling", title: "Remodeling 3", img: "/images/projects/remodeling-3.jpg" },
  { id: 10, category: "construction", title: "Construction 3", img: "/images/projects/construction-3.jpg" },
  { id: 11, category: "repairs", title: "Repairs 3", img: "/images/projects/repairs-3.jpg" },
  { id: 12, category: "design", title: "Design 3", img: "/images/projects/design-3.jpg" },
];

const categories = ["all", "remodeling", "construction", "repairs", "design"];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            Projects
          </h2>
          <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Our projects page showcases our company&apos;s expertise in construction.
            We have successfully completed various projects, including commercial
            and residential buildings, infrastructure, and more. Browse through our
            portfolio to see our work.
          </p>
        </div>

        {/* Filters */}
        <ul className="flex justify-center space-x-4 mb-10">
          {categories.map((cat) => (
            <li
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`cursor-pointer px-4 py-2 rounded-full text-sm font-medium transition ${
                activeCategory === cat
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-blue-100"
              }`}
            >
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </li>
          ))}
        </ul>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group relative overflow-hidden rounded-2xl shadow-md hover:shadow-lg transition"
            >
              <Image
                src={project.img}
                alt={project.title}
                width={500}
                height={350}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                <h4 className="text-white text-lg font-semibold">{project.title}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
