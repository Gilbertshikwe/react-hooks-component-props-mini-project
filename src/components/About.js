// About.js
import React from "react";

function About({ logoSrc, aboutText }) {
  return (
    <aside>
      <img
        src={logoSrc || "https://via.placeholder.com/215"}
        alt="blog logo"
      />
      <p>{aboutText}</p>
    </aside>
  );
}

export default About;
