import React from "react";

import "./HomeGuest.scss";

import PrincipalContent from "./PrincipalContent/PrincipalContent";
import About from "./About/About";
import Community from "./Community/Community";

const HomeGuest = () => {
  return (
    <article className="HomeGuest">
      <PrincipalContent />
      <About />
      <Community />
    </article>
  );
};

export default HomeGuest;
