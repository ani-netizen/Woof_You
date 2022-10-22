import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <div
        className="flex justify-between items-center px-10 py-5 w-full shadow-md sticky top-0 bg-slate-50"
        style={{ zIndex: "999" }}
      >
        <div className="flex gap-20">
          <Link to="/">
            <div className="w-20 h-15 bg-amber-300">Woof You</div>
          </Link>
          <ul className="flex gap-5 text-gray-600">
            <li>
              <Link to="/read">Read</Link>
            </li>
            <li>
              <Link to="/contact-us">Contact Us</Link>
            </li>
          </ul>
        </div>
        <div>
          <button>Login/Signup</button>
        </div>
      </div>
    </>
  );
}

export default Navbar;
