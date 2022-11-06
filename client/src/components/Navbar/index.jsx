import { React, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import authSlice from "../../redux/reducers/auth";
import LogIn from "../Auth/LogIn";

function Navbar() {
  const [isLogInOpen, setIsLogInOpen] = useState(false);
  const [isSignUpOpen, setIsSignUpOpen] = useState(false);

  const dispatch = useDispatch();

  const reduxState = useSelector((globalState) => globalState.auth.user);

  const logOut = () => dispatch(authSlice.actions.LOG_OUT());

  return (
    <>
      <div
        className="flex justify-between items-center lg:px-10 p-5 w-full shadow-md sticky top-0 bg-slate-50"
        style={{ zIndex: "10" }}
      >
        <div className="flex gap-20">
          <Link to="/">
            <div className="w-20 h-15 bg-amber-300">Woof You</div>
          </Link>
          <ul className="md:flex gap-5 hidden text-gray-600">
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
