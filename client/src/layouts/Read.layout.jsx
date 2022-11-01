import React from "react";
import Navbar from "../components/Navbar";
import Reads from "../components/Read";
import VerticalTabGroup from "../components/TabGroup/VerticalTabGroup";

function ReadLayout() {
  return (
    <>
      <Navbar />
      <Reads />
      <VerticalTabGroup />
    </>
  );
}

export default ReadLayout;
