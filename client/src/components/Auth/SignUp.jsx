import { useDispatch } from "react-redux";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { authSlice } from "../../redux/reducers/auth";
import axios from "axios";

export default function SignUp({
  isSignUpOpen,
  setIsSignUpOpen,
  isLogInOpen,
  setIsLogInOpen,
}) {
  const [userData, setUserData] = useState({
    fullName: "",
    email: "",
    password: "",
    phoneNumber: null,
    address: "",
  });

  const dispatch = useDispatch();

  const handleChange = (e) =>
    setUserData((prev) => ({ ...prev, [e.target.id]: e.target.value }));

  function closeModal() {
    setIsSignUpOpen(false);
  }

  const signUp = () => {
    axios({
      method: "POST",
      url: "http://localhost:8080/auth/sign-up",
      data: { credentials: userData },
    }).then((res) => {
      setUserData({
        email: "",
        password: "",
        fullName: "",
        phoneNumber: "",
        address: "",
      });

      closeModal();

      dispatch(authSlice.actions.SIGN_UP(res.data.user));
    });
  };

  const googleSignUp = () =>
    (window.location.href = "http://localhost:8080/auth/google");

  return (
    <>
      <Transition appear show={isSignUpOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto bg-black bg-opacity-50 auth__modals"
          onClose={closeModal}
        >
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0" />
            </Transition.Child>

            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                <div className="mt-2 flex flex-col gap-3 w-full">
                  <form className="flex flex-col gap-5">
                    <div className="w-full flex flex-col gap-2">
                      <label htmlFor="fullName">Full Name:</label>
                      <input
                        required
                        type="text"
                        id="fullName"
                        value={userData.fullName}
                        onChange={handleChange}
                        placeholder="Malcolm Merlyn"
                        className="w-full border border-gray-400 px-3 py-2 rounded-lg focus:outline-none focus:border-amber-400"
                      />
                    </div>
                    <div className="w-full flex flex-col gap-2">
                      <label htmlFor="email">Email:</label>
                      <input
                        required
                        type="email"
                        id="email"
                        value={userData.email}
                        onChange={handleChange}
                        placeholder="user@email.com"
                        className="w-full border border-gray-400 px-3 py-2 rounded-lg focus:outline-none focus:border-amber-400"
                      />
                    </div>
                    <div className="w-full flex flex-col gap-2">
                      <label htmlFor="phoneNumber">
                        Phone Number{" "}
                        <span className="text-gray-500">(Optional)</span>:
                      </label>
                      <input
                        type="tel"
                        id="phoneNumber"
                        value={userData.phoneNumber}
                        onChange={handleChange}
                        placeholder="9876543210"
                        className="w-full border border-gray-400 px-3 py-2 rounded-lg focus:outline-none focus:border-amber-400"
                      />
                    </div>
                    <div className="w-full flex flex-col gap-2">
                      <label htmlFor="password">Password:</label>
                      <input
                        required
                        type="password"
                        id="password"
                        value={userData.password}
                        onChange={handleChange}
                        placeholder="********"
                        className="w-full border border-gray-400 px-3 py-2 rounded-lg focus:outline-none focus:border-amber-400"
                      />
                    </div>
                    <div className="w-full flex flex-col gap-2">
                      <label htmlFor="address">Address: </label>
                      <textarea
                        required
                        id="address"
                        value={userData.address}
                        onChange={handleChange}
                        placeholder="G/903, Kanhaiya Baugh, Bihar, 402303"
                        className="w-full border border-gray-400 px-3 py-2 rounded-lg focus:outline-none focus:border-amber-400"
                      ></textarea>
                    </div>
                    <div>
                      <input
                        value="Sign Up"
                        type="submit"
                        onClick={(e) => {
                          e.preventDefault();
                          signUp();
                        }}
                        className="w-full text-center bg-amber-400 text-white py-2 rounded-lg"
                      />
                    </div>
                    <p>
                      Already have an account?{" "}
                      <button
                        className="text-blue-500 font-bold hover:underline"
                        onClick={() => {
                          setIsSignUpOpen(false);
                          setIsLogInOpen(true);
                        }}
                      >
                        LogIn
                      </button>
                    </p>
                  </form>

                  <button
                    className="py-2 justify-center rounded-lg flex items-center gap-2 w-full border border-gray-400 bg-white text-gray-700 hover:bg-gray-100"
                    onClick={googleSignUp}
                  >
                    Sign Up with Google <FcGoogle />
                  </button>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
