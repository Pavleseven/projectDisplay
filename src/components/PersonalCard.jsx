import React from "react";
import { skills } from "../data";

function PersonalCard() {
  return (
    <div className="component">
      <h2>
        <span>Name:</span> Pavle Stojiljkovic
      </h2>
      <p>
        <span>About:</span> Graduate of English major and front-end web
        developer looking for work in the IT industry. Motivated to learn new
        things, willing to put in a lot of effort, and eager to advance as a web
        developer.
      </p>

      <ul>
        <span>Skills:</span>
        {skills.map((skill) => {
          return <li style={{ background: skill.color }}>{skill.skill}</li>;
        })}
      </ul>
      <ul>
        <span>Experienced with:</span>
        <li style={{ background: "purple" }}>Bootstrap CSS</li>
        <li style={{ background: "#007BF7" }}>Material UI</li>
        <li style={{ background: "#60DAFB" }}>TailWind CSS</li>
      </ul>
    </div>
  );
}

export default PersonalCard;
