import React from "react";
import "./style.css";
import UserAuth from "./UserAuth";

export default function App() {
  return (
    <React.Fragment>
      <nav className="navbar navbar-dark bg-primary navbar-exapand-sm">
        <a href="#" className="navbar-brand">
          Navbar with Conditional Looping
        </a>
      </nav>
      <UserAuth />
    </React.Fragment>
  );
}
