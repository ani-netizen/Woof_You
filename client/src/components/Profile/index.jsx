import { React, useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import PetSection from "../Pets/PetSection";
import VerticalTabGroup from "../TabGroup/VerticalTabGroup";
import axios from "axios";
import UserDetails from "./UserDetails";

function Profile() {
  const reduxState = useSelector((globalState) => globalState.auth.user);
  const navigate = useNavigate();

  useEffect(() => {
    if (!reduxState) {
      navigate("/");
    }
  }, [reduxState, navigate]);

  return (
    <>
      <div className="flex flex-col justify-center items-center w-3/4">
        <UserDetails />
        <PetSection />
      </div>
      <VerticalTabGroup />
    </>
  );
}

export default Profile;
