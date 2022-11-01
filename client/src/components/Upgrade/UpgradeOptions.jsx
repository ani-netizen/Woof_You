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
      <div className="border rounded-md p-5 flex w-2/7 flex-col items-center gap-2.5">
        <h2>
          {plan.title} <small>{plan.price ? `₹${plan.price}` : ""}</small>
        </h2>
        <p>
          {plan.canAccessAdoption ? (
            <TiTick className="text-green-500" />
          ) : (
            <TiTimes className="text-red-500" />
          )}
        </p>
        <p>
          {plan.canAccessLocations ? (
            <TiTick className="text-green-500" />
          ) : (
            <TiTimes className="text-red-500" />
          )}
        </p>
        <p>
          {plan.canAccessCompanions ? (
            <TiTick className="text-green-500" />
          ) : (
            <TiTimes className="text-red-500" />
          )}
        </p>
        <p>
          {plan.canAccessHealthCares ? (
            <TiTick className="text-green-500" />
          ) : (
            <TiTimes className="text-red-500" />
          )}
        </p>
        <button
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
