import axios from "axios";
import { React, useEffect, useState } from "react";
import Card from "../Card";

function Adoption() {
  const [adoptionData, setAdoptionData] = useState([
    {
      petDetails: "",
      userDetails: "",
    },
  ]);

  useEffect(() => {
    axios({ method: "GET", url: "http://localhost:8080/pet/adopts" }).then(
      (pets) => {
        pets.data.pets?.forEach((pet) => {
          axios({
            method: "GET",
            url: `http://localhost:8080/user/${pet?.owner}`,
          }).then((user) => {
            setAdoptionData((prev) => [
              {
                petDetails: pet,
                userDetails: user.data.user,
              },
              ...prev,
            ]);
          });
        });
      }
    );
  }, []);

  return (
    <>
      <div className="flex justify-center flex-wrap w-full gap-12">
        {adoptionData?.map((card, idx) => (
          <div
            key={idx}
            className="w-11/12 md:w-1/3 lg:w-1/5 hover:scale-110 hover:shadow-xl transition duration-500 hover:shadow-slate-400 rounded-2xl"
          >
            <Card data={card} />
          </div>
        ))}
      </div>
    </>
  );
}

export default Adoption;
