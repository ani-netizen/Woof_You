import { React, useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import PetSection from "../Pets/PetSection";
import VerticalTabGroup from "../TabGroup/VerticalTabGroup";
import UserDetails from "./UserDetails";

function Profile() {
  const userDetail = useSelector((globalState) => globalState.auth.user);
  const navigate = useNavigate();

  useEffect(() => {
    if (!userDetail) {
      navigate("/");
    }
  }, [userDetail, navigate]);

  return (
    <>
      <div className="flex flex-col justify-center gap-10 items-center w-3/4 p-5">
        <UserDetails />
        <PetSection />
      </div>
      <VerticalTabGroup />
    </>
  );
}

export default Profile;
