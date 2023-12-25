import React from "react";
import GitLink from "./GitLink";

function Header() {
  return (
    <div className="header">
      <h1>myProjects</h1>
      <GitLink />
    </div>
  );
}

export default Header;
