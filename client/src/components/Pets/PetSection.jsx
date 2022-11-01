import axios from "axios";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

function PetSection() {
  const reduxState = useSelector((globalState) => globalState.auth.user?.pets);

  return (
    <>
      <div className="flex flex-col">
        {reduxState?.map((pet) => {
          axios({
            method: "GET",
            url: `http://localhost:8080/pet/${pet}`,
          }).then((res) => (
            <div className="flex w-full gap-10">
              <div className="w-1/3">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDuE2ejpy-CjPVNdAhuIVch-8DRr20pvVwxs2pBWtl&s"
                  alt=""
                />
              </div>
              <div className="flex flex-col w-2/3">
                <div className="flex items-center justify-between">
                  <p>{res.data?.pets.name}</p>
                  <button>Remove</button>
                </div>
                <p>{res.data?.pets.animalType}</p>
                <p>{res.data?.pets.breed}</p>
                <p>{res.data?.pets.description}</p>
                <p></p>
              </div>
            </div>
          ));
        })}
      </div>
    </>
  );
}

export default PetSection;
