import React from "react";
import { Dock } from "./dock";

const navbar = () => {
  return (
    <nav className="flex items-center justify-center p-6  ">
      <div className="lg:flex-1 md:flex-1 xl:flex-1 2xl:flex-1 text-center">
        <a href="/" className="text-lg font-bold">
          Dax
        </a>
      </div>
      <Dock />
      <div className="flex-1 text-center">
        <a href="/#about" className="mr-4 text-primary hover:text-accent">
          About
        </a>
        <a href="/#skills" className="mr-4 text-primary hover:text-accent">
          Skills
        </a>
        <a href="/#projects" className="mr-4 text-primary hover:text-accent">
          Projects
        </a>
      </div>
    </nav>
  );
};

export default navbar;
