import React from "react";
import Card from "../Card";

function Adoption() {
  const cardData = [
    {
      petPicture:
        "https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?cs=srgb&dl=pexels-anjana-c-674010.jpg&fm=jpg",
      userPicture: "https://cdn-icons-png.flaticon.com/512/21/21104.png",
      userContact: "8551958066",
    },
    {
      petPicture:
        "https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?cs=srgb&dl=pexels-anjana-c-674010.jpg&fm=jpg",
      userPicture: "https://cdn-icons-png.flaticon.com/512/21/21104.png",
      userContact: "8551958066",
    },
    {
      petPicture:
        "https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?cs=srgb&dl=pexels-anjana-c-674010.jpg&fm=jpg",
      userPicture: "https://cdn-icons-png.flaticon.com/512/21/21104.png",
      userContact: "8551958066",
    },
    {
      petPicture:
        "https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?cs=srgb&dl=pexels-anjana-c-674010.jpg&fm=jpg",
      userPicture: "https://cdn-icons-png.flaticon.com/512/21/21104.png",
      userContact: "8551958066",
    },
    {
      petPicture:
        "https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?cs=srgb&dl=pexels-anjana-c-674010.jpg&fm=jpg",
      userPicture: "https://cdn-icons-png.flaticon.com/512/21/21104.png",
      userContact: "8551958066",
    },
    {
      petPicture:
        "https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?cs=srgb&dl=pexels-anjana-c-674010.jpg&fm=jpg",
      userPicture: "https://cdn-icons-png.flaticon.com/512/21/21104.png",
      userContact: "8551958066",
    },
    {
      petPicture:
        "https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?cs=srgb&dl=pexels-anjana-c-674010.jpg&fm=jpg",
      userPicture: "https://cdn-icons-png.flaticon.com/512/21/21104.png",
      userContact: "8551958066",
    },
    {
      petPicture:
        "https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?cs=srgb&dl=pexels-anjana-c-674010.jpg&fm=jpg",
      userPicture: "https://cdn-icons-png.flaticon.com/512/21/21104.png",
      userContact: "8551958066",
    },
    {
      petPicture:
        "https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?cs=srgb&dl=pexels-anjana-c-674010.jpg&fm=jpg",
      userPicture: "https://cdn-icons-png.flaticon.com/512/21/21104.png",
      userContact: "8551958066",
    },
    {
      petPicture:
        "https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?cs=srgb&dl=pexels-anjana-c-674010.jpg&fm=jpg",
      userPicture: "https://cdn-icons-png.flaticon.com/512/21/21104.png",
      userContact: "8551958066",
    },
    {
      petPicture:
        "https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?cs=srgb&dl=pexels-anjana-c-674010.jpg&fm=jpg",
      userPicture: "https://cdn-icons-png.flaticon.com/512/21/21104.png",
      userContact: "8551958066",
    },
  ];

  return (
    <>
      <div className="flex justify-center flex-wrap w-full gap-12">
        {cardData.map((card, idx) => (
          <div key={idx} className="w-11/12 md:w-1/3 lg:w-1/5">
            <Card data={card} />
          </div>
        ))}
      </div>
    </>
  );
}

export default Adoption;
