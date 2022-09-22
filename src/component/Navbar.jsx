import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <>
      <nav className="bg-github-blue h-16">
        <div className="flex items-center bg-github-blue h-16 ">
          <div className="flex text-white text-2xl  items-center mr-60 ml-16">
            <h1 className="mr-16">Redux Thunk</h1>

            <NavLink to={"/"} className="ml-96 text-xl">
              Back to Home
            </NavLink>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
