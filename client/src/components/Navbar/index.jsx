import { React, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import authSlice from "../../redux/reducers/auth";
import LogIn from "../Auth/LogIn";
import logo from "../../assets/logo.png";

function Navbar() {
  const [isLogInOpen, setIsLogInOpen] = useState(false);
  const [isSignUpOpen, setIsSignUpOpen] = useState(false);

  const dispatch = useDispatch();

  const reduxState = useSelector((globalState) => globalState.auth.user);

  return (
    <>
      <div
        className="flex justify-between items-center lg:px-10 p-5 w-full shadow-md sticky top-0 bg-slate-50"
        style={{ zIndex: "100" }}
      >
        <div className="flex items-center gap-20">
          <Link to="/">
            <div className="w-16">
              <img src={logo} alt="logo" className="w-full h-full" />
            </div>
          </Link>
          <ul className="md:flex md:items-center gap-5 h-full hidden text-gray-600">
            <li>
              <Link to="/read" target="_blank" rel="noopener noreferrer">
                Read
              </Link>
            </li>
            <li>
              <Link to="/contact-us">Contact Us</Link>
            </li>
          </ul>
        </div>
        <div>
          {reduxState ? (
            <Link to="/profile" className="">
              <img
                src={reduxState.profilePicture}
                alt="user"
                className="w-10 h-10 object-cover rounded-full object-center"
              />
            </Link>
          ) : (
            <button
              onClick={() => {
                setIsLogInOpen(true);
              }}
              className="text-sm lg:text-base font-semibold"
            >
              Login/Signup
            </button>
          )}
        </div>
      </div>

      <LogIn
        isLogInOpen={isLogInOpen}
        setIsLogInOpen={setIsLogInOpen}
        isSignUpOpen={isSignUpOpen}
        setIsSignUpOpen={setIsSignUpOpen}
      />
    </>
  );
}

export default Navbar;
