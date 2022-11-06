import axios from "axios";
import { React, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import classnames from "classnames";

function PetSection() {
  const [pets, setPets] = useState([]);

  const reduxState = useSelector((globalState) => globalState.auth.user?.pets);

  useEffect(() => {
    reduxState?.map((pet) => {
      axios({
        method: "GET",
        url: `http://localhost:8080/pet/${pet}`,
      }).then((res) => setPets((prev) => [...prev, res.data.pets]));
    });
  }, [reduxState]);

  return (
    <>
      <div className="flex flex-col w-5/6 gap-5">
        {pets.map((pet, index) => (
          <div className="flex w-full gap-10" key={index}>
            <div className="w-1/3 rounded-lg">
              <img src={pet.petPictures[0]} alt="pet" className="rounded-lg" />
            </div>
            <div className="flex flex-col w-2/3">
              <div className="flex items-center justify-between">
                <p
                  className={classnames("font-bold", {
                    "text-blue-600": pet.isMale,
                    "text-pink-500": !pet.isMale,
                  })}
                >
                  {pet.name}
                </p>
                <button className="text-red-500 font-semibold py-1 px-2 bg-blue-100 rounded-lg">
                  Remove
                </button>
              </div>
              <p>{pet.animalType}</p>
              <p className="font-semibold">{pet.breed}</p>
              <p>{pet.detail}</p>
              <p></p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default PetSection;
