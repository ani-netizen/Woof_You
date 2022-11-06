import React from "react";
import { TiTick, TiTimes } from "react-icons/ti";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";

function UpgradeOptions({ type }) {
  const reduxState = useSelector((globalState) => globalState.auth.user);
  const navigate = useNavigate();

  const buyPremium = () => {
    let options = {
      key: "rzp_test_yqIFpKOd9SawPZ",
      amount: 299 * 100,
      currency: "INR",
      name: "Woof You",
      description: "One Stop for all Pet needs",
      handler: () => {
        axios({
          method: "PUT",
          url: "http://localhost:8080/user/upgrade",
          data: { user: reduxState._id },
        });
        navigate("/profile");
      },
      prefill: {
        name: reduxState.fullName,
        email: reduxState.email,
        contact: reduxState.phoneNumber,
      },
      theme: {
        color: "#FCD34D",
      },
    };

    let razorpay = new window.Razorpay(options);
    razorpay.open();
  };

  const buyPremiumPlus = () => {
    let options = {
      key: "rzp_test_yqIFpKOd9SawPZ",
      amount: 499 * 100,
      currency: "INR",
      name: "Woof You",
      description: "One Stop for all Pet needs",
      callback_url: "http://localhost:3000/profile",
      handler: () => {
        axios({
          method: "PUT",
          url: "http://localhost:8080/user/upgrade",
          data: { user: reduxState._id },
        });
      },
      prefill: {
        name: reduxState.fullName,
        email: reduxState.email,
        contact: reduxState.phoneNumber,
      },
      theme: {
        color: "#FCD34D",
      },
    };

    let razorpay = new window.Razorpay(options);
    razorpay.open();
  };

  const plan =
    type === "free"
      ? {
          title: "Free",
          canAccessAdoption: true,
          canAccessLocations: true,
          canAccessCompanions: false,
          canAccessHealthCares: false,
        }
      : type === "pro"
      ? {
          title: "Pro",
          price: 299,
          canAccessAdoption: true,
          canAccessLocations: true,
          canAccessCompanions: false,
          canAccessHealthCares: true,
        }
      : {
          title: "Pro+",
          price: 499,
          canAccessAdoption: true,
          canAccessLocations: true,
          canAccessCompanions: true,
          canAccessHealthCares: true,
        };

  return (
    <>
      <div className="border rounded-md p-7 flex w-2/7 flex-col items-center gap-8">
        <h2 className="font-bold text-2xl">
          {plan.title}{" "}
          <small className="font-medium text-sm">
            {plan.price ? `₹${plan.price}` : ""}
          </small>
        </h2>
        <div className="flex flex-col gap-3">
          <p className="flex gap-5 items-center text-xs">
            {plan.canAccessAdoption ? (
              <TiTick className="text-green-500 text-base" />
            ) : (
              <TiTimes className="text-red-500 text-base" />
            )}
            Pets available for exchange
          </p>
          <p className="flex gap-5 items-center text-xs">
            {plan.canAccessLocations ? (
              <TiTick className="text-green-500 text-base" />
            ) : (
              <TiTimes className="text-red-500 text-base" />
            )}
            Locations of nearby vets and other shops
          </p>
          <p className="flex gap-5 items-center text-xs">
            {plan.canAccessCompanions ? (
              <TiTick className="text-green-500 text-base" />
            ) : (
              <TiTimes className="text-red-500 text-base" />
            )}
            Pets open for mating
          </p>
          <p className="flex gap-5 items-center text-xs">
            {plan.canAccessHealthCares ? (
              <TiTick className="text-green-500 text-base" />
            ) : (
              <TiTimes className="text-red-500 text-base" />
            )}
            Health and Diet Plan
          </p>
        </div>
        <button
          className="font-semibold p-1 text-xl bg-amber-200 rounded px-2"
          onClick={() =>
            type === "pro"
              ? buyPremium()
              : type === "pro+"
              ? buyPremiumPlus()
              : ""
          }
          disabled={type === "free" ? true : false}
        >
          Buy
        </button>
      </div>
    </>
  );
}

export default UpgradeOptions;
