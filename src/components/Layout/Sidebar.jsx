import React from "react";
import { NavLink, useLocation } from "react-router";
import { projects } from "../../data/projects";

const Sidebar = () => {
  const location = useLocation();
  return (
    <aside className="w-64 h-screen bg-gray-900 fixed left-0 top-0 border border-gray-500">
      <h3 className="text-xl bg-sky-500 flex items-center justify-center   h-16">
        Projects
      </h3>

      <div className="flex flex-col ">
        {projects.map((project) => (
          <NavLink
            className={`font-bold p-3 hover:text-sky-400 text-center ${location.pathname === project.path ? "bg-sky-100 text-sky-500" : ""}`}
            key={project.id}
            to={project.path}
          >
            {project.name}
          </NavLink>
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;
