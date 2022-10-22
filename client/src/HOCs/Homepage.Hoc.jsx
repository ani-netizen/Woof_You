import React from "react";
import { Route, Routes } from "react-router-dom";
import HomepageLayout from "../layouts/Homepage.layout";

function HomeLayoutHoc({ component: Component }) {
  return (
    <>
      <Routes>
        <Route
        path="*"
          element={
            <HomepageLayout>
              <Component />
            </HomepageLayout>
          }
        />
      </Routes>
    </>
  );
}

export default HomeLayoutHoc;
