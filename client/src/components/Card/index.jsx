import React from "react";
import { BsGenderMale, BsGenderFemale } from "react-icons/bs";

function Card(props) {
  const { userDetails, petDetails } = props.data;

  return (
    <a
      href={`https://wa.me/+91${userDetails?.phoneNumber}`}
      target="_blank"
      rel="noreferrer noopener"
      className="card"
    >
      <div className="card-content">
        <div className="card-front">
          <div className="w-full h-full">
            <img
              src={`${petDetails?.petPictures}`}
              alt="pet"
              className="object-cover object-center h-full w-full rounded-2xl"
            />
          </div>
          <div className="rounded-full h-10 w-10 absolute top-0 left-0 m-2.5">
            <img
              src={userDetails?.profilePicture}
              alt="user"
              className="h-full w-full bg-white rounded-full"
            />
          </div>
        </div>
        <div className="card-back flex flex-col justify-between p-2 text-xs">
          <div className="w-full flex flex-col gap-2">
            <div className="flex justify-between w-full">
              <p>{petDetails?.name}</p>
              <p>
                {petDetails?.isMale ? <BsGenderMale /> : <BsGenderFemale />}
              </p>
            </div>
            <div className="flex justify-between w-full">
              <p>{petDetails?.age}</p>
            </div>
            <div className="flex justify-between w-full">
              <p>{petDetails?.animalType}</p>
              <p>{petDetails?.breed}</p>
            </div>
            <div className="flex justify-between w-full">
              <p>{petDetails?.detail}</p>
            </div>
          </div>
          <div className="rounded-full w-10 flex flex-col">
            <p>{userDetails?.fullName}</p>
            <p>{userDetails?.phoneNumber}</p>
          </div>
        </div>
      </div>
    </a>
  );
}

export default Card;
