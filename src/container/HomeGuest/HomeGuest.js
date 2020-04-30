import React from "react";

import "./HomeGuest.scss";

import PrincipalContent from "./PrincipalContent/PrincipalContent";
import About from "./About/About";

const HomeGuest = () => {
  return (
    <article className="HomeGuest">
      <PrincipalContent />
      <About />
    </article>
  );
};

export default HomeGuest;
