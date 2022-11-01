import React from "react";

function Read({ data }) {
  return (
    <>
      <div className="flex flex-col md:flex-row items-center lg:gap-5 w-full lg:h-40">
        <div className="lg:w-1/3 h-40 w-full md:h-full">
          <img
            src={data.coverPicture}
            alt="cover-image"
            className="w-full h-full rounded-xl object-cover object-center"
          />
        </div>
        <div className="flex flex-col text-xs gap-2 p-4 lg:text-base lg:w-2/3 h-full">
          <h1 className="font-bold lg:text-lg">{data.headline}</h1>
          <p>{data.content}</p>
        </div>
      </div>
    </>
  );
}

export default Read;
