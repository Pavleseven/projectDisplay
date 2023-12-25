import React, { useContext } from "react";
import { appContext } from "../context";

function List() {
  const { projects } = useContext(appContext);
  return (
    <div className="list-component">
      {projects.map((p) => {
        return <Li p={p} key={p.projectName} />;
      })}
    </div>
  );
}

function Li({ p }) {
  return (
    <div className="li-item">
      <h2>Project Name: {p.projectName}</h2>
      <p>About: {p.description}</p>
      <ul className="proj-ul">
        <span>Languages Used:</span>
        {p.langUsed.map((lang, i) => {
          return (
            <li style={{ background: lang[1] }} key={i}>
              {lang[0]}
            </li>
          );
        })}
      </ul>
      <a href={p.url} target="_blank" rel="noreferrer">
        GitHub Repository
      </a>
    </div>
  );
}
export default List;
