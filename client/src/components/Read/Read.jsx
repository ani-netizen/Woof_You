import React from "react";

function Read() {
  return (
    <>
      <div className="flex items-center w-11/12 h-20">
        <div className="w-1/3 h-full">
          <img
            src="https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?cs=srgb&dl=pexels-anjana-c-674010.jpg&fm=jpg"
            alt="cover-image"
            className="w-full h-full object-cover object-center"
          />
        </div>
        <div className="flex flex-col">
          <h1>Lorem Ipsum</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos
            consequuntur similique blanditiis distinctio placeat sit deserunt
            illum nobis, explicabo optio quibusdam, sint sapiente totam fuga, ut
            iste culpa magni. Minus.
          </p>
        </div>
      </div>
    </>
  );
}

export default Read;
