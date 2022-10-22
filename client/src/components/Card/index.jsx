import React from "react";

function Card(props) {
  return (
    <a
      href={`https://wa.me/+91${props.data.userContact}`}
      target="_blank"
      rel="noreferrer"
      className="w-1/4 relative h-40 hover:scale-110 hover:shadow-xl transition duration-500 hover:shadow-slate-400"
    >
      <div className="w-full h-full">
        <img
          src={props.data.petPicture}
          alt="pet"
          className="object-cover object-center h-full w-full rounded-2xl"
        />
      </div>
      <div className="rounded-full h-10 w-10 absolute top-2.5 left-2.5">
        <img
          src={props.data.userPicture}
          alt="user"
          className="h-full w-full bg-white rounded-full"
        />
      </div>
    </a>
  );
}

export default Card;
