import { Route, Navigate, Routes } from "react-router-dom";
import HomeLayoutHoc from "./HOCs/Homepage.Hoc";
import ProfileLayout from "./layouts/Profile.layout";
import ReadLayout from "./layouts/Read.layout";
import HomePage from "./pages/Homepage";

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          exact
          element={<Navigate to="/adoption" replace={true} />}
        />
        <Route
          path="/:type/*"
          exact
          element={<HomeLayoutHoc component={HomePage} />}
        />
        <Route path="/profile" exact element={<ProfileLayout />} />
        <Route path="/read" exact element={<ReadLayout />} />
      </Routes>
    </>
  );
}

export default App;
