import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
// import { useDispatch } from "react-redux";
import Adoption from "../components/Adoption";
import Companion from "../components/Companion";
import HealthCare from "../components/HealthCare";
import Accessories from "../components/Accessories";
// import { getRestaurant } from "../redux/reducers/restaurant/restaurant.action";

function HomePage() {
  const { type } = useParams();

//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(getRestaurant());
//   });

  return (
    <>
      <div className="my-5 mb-20">
        {type === "adoption" && <Adoption />}
        {type === "companion" && <Companion />}
        {type === "caring" && <HealthCare />}
        {type === "accessories" && <Accessories />}
      </div>
    </>
  );
}

export default HomePage;