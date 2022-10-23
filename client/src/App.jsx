import { Route, Navigate, Routes } from "react-router-dom";
import LogIn from "./components/Auth/LogIn";
// import SignUp from "./components/Auth/SignUp";
import HomeLayoutHoc from "./HOCs/Homepage.Hoc";
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
        {/* <HomeLayoutHoc exact component={HomePage} path="/:type" /> */}
      </Routes>
      <LogIn />
    </>
  );
}

export default App;
