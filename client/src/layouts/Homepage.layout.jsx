import React from "react";
import TabGroup from "../components/TabGroup";
import Navbar from "../components/Navbar";
import ReadFloatButton from "../components/ReadFloatButton";

function HomepageLayout({ children }) {
  return (
    <div>
      <Navbar />
      <TabGroup />
      <div className="container mx-auto px-1 lg:px-10 w-10/12">{children}</div>
      <ReadFloatButton />
    </div>
  );
}

export default HomepageLayout;
