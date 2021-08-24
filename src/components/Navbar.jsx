import React from "react";

export default function Navbar(props) {
  const { username } = props;
  return (
    <>
      <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow">
          <img className="logo-nav" />
          <a className="navbar-brand">{username} repos</a>
        </nav>
      </>
    </>
  );
}
