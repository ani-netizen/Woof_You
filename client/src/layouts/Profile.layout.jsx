import React from "react";
import Navbar from "../components/Navbar";
import Profile from "../components/Profile";
import ReadFloatButton from "../components/ReadFloatButton";
import VerticalTabGroup from "../components/TabGroup/VerticalTabGroup";

function ProfileLayout() {
  return (
    <>
      <Navbar />
      <Profile />
      <VerticalTabGroup />
      <ReadFloatButton />
    </>
  );
}

export default ProfileLayout;
