import axios from "axios";
import { React, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import LogIn from "../Auth/LogIn";
import Card from "../Card";

function Companion() {
  const [isLogInOpen, setIsLogInOpen] = useState(false);
  const [isSignUpOpen, setIsSignUpOpen] = useState(false);
  const [companionData, setCompanionData] = useState([
    {
      petDetails: "",
      userDetails: "",
    },
  ]);

  const reduxState = useSelector((globalState) => globalState.auth.user?._id);

  useEffect(() => {
    axios({ method: "GET", url: "http://localhost:8080/pet/mates" }).then(
      (pets) => {
        pets.data?.pets.map((pet) => {
          axios({
            method: "GET",
            url: `http://localhost:8080/user/${pet?.owner}`,
          }).then((user) => {
            setCompanionData((prev) => [
              {
                petDetails: pet,
                userDetails: user.data.user,
              },
              ...prev,
            ]);
          });

          return null;
        });
      }
    );
  }, []);

  return (
    <>
      <div className="flex relative justify-center flex-wrap w-full gap-12">
        {!reduxState && (
          <div className=" backdrop-blur-lg absolute justify-center top-0 left-0 right-0 bottom-0 w-full h-full z-10">
            <button
              onClick={() => {
                setIsLogInOpen(true);
              }}
              className="font-semibold mx-80 shadow-lg shadow-amber-700 hover:shadow-xl hover:shadow-yellow-700 transition duration-300 my-48 p-2.5 bg-amber-400 rounded-xl"
            >
              Sign In
            </button>
          </div>
        )}
        {companionData?.map((card, idx) => (
          <div
            key={idx}
            className="w-11/12 md:w-1/3 lg:w-1/5 hover:scale-110 hover:shadow-xl transition duration-500 hover:shadow-slate-400 rounded-2xl"
          >
            <Card data={card} />
          </div>
        ))}
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

export default Companion;
