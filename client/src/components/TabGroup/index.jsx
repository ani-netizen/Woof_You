import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { RiShoppingBag3Line } from "react-icons/ri";
import { IoFastFoodOutline, IoNutritionOutline } from "react-icons/io5";
import { BiDrink } from "react-icons/bi";
import classnames from "classnames";

const MobileTabs = () => {
  const [allTypes] = useState([
    {
      id: "adoption",
      icon: <RiShoppingBag3Line />,
      name: "Adoption",
    },
    {
      id: "companion",
      icon: <IoFastFoodOutline />,
      name: "Companion",
    },
    {
      id: "caring",
      icon: <BiDrink />,
      name: "Health Care",
    },
    {
      id: "accessories",
      icon: <IoNutritionOutline />,
      name: "Accessories",
    },
  ]);

  const { type } = useParams();

  return (
    <>
      <div className="md:hidden bg-white fixed bottom-0 z-50 w-full flex items-center justify-between md:justify-evenly text-gray-500 border">
        {allTypes.map((item, index) => (
          <div key={index}>
            <Link
              to={`/${item.id}`}
              className="w-1/4"
              preventScrollReset={true}
            >
              <div
                className={
                  type === item.id
                    ? "flex flex-col relative items-center text-lg text-amber-500"
                    : "flex flex-col items-center text-lg"
                }
              >
                <div
                  className={
                    type === item.id
                      ? "w-full h-full flex flex-col items-center border-t-2 px-1 py-2 text-center border-amber-400"
                      : "flex flex-col items-center"
                  }
                >
                  <h5 className="text-xs">{item.name}</h5>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};

const LargeTabs = () => {
  const [allTypes] = useState([
    {
      id: "adoption",
      imageDefault:
        "https://b.zmtcdn.com/data/o2_assets/246bbd71fbba420d5996452be3024d351616150055.png",
      imageActive:
        "https://b.zmtcdn.com/data/o2_assets/c0bb85d3a6347b2ec070a8db694588261616149578.png",
      name: "Adoption",
      activeColor: "yellow",
    },
    {
      id: "companion",
      imageDefault:
        "https://b.zmtcdn.com/data/o2_assets/78d25215ff4c1299578ed36eefd5f39d1616149985.png",
      imageActive:
        "https://b.zmtcdn.com/data/o2_assets/30fa0a844f3ba82073e5f78c65c18b371616149662.png",
      activeColor: "blue",
      name: "Companion",
    },
    {
      id: `caring`,
      imageDefault:
        "https://b.zmtcdn.com/data/o2_assets/01040767e4943c398e38e3592bb1ba8a1616150142.png",
      imageActive:
        "https://b.zmtcdn.com/data/o2_assets/855687dc64a5e06d737dae45b7f6a13b1616149818.png",
      activeColor: "purple",
      name: "Health Care",
    },
    {
      id: `accessories`,
      imageDefault:
        "https://b.zmtcdn.com/data/o2_assets/54cad8274d3c3ec7129e0808a13b27c31616582882.png",
      imageActive:
        "https://b.zmtcdn.com/data/o2_assets/0f6dcb1aef93fa03ea3f91f37918f3bc1616649503.png",
      activeColor: "yellow",
      name: "Accessories",
    },
  ]);

  const { type } = useParams();

  return (
    <>
      <div className="hidden bg-white font-semibold md:flex container px-5 my-5 mx-auto">
        {allTypes.map((item, index) => (
          <div key={index} className="hover:scale-110 transition duration-300">
            <Link to={`/${item.id}`} preventScrollReset={true}>
              <div
                className={classnames(
                  "flex items-center pb-2 px-5 gap-2 transition duration-300 ease-in-out",
                  {
                    "border-b-2 border-amber-400": type === item.id,
                  }
                )}
              >
                <h3
                  className={
                    type === item.id
                      ? "text-lg text-amber-400"
                      : "text-lg text-gray-700"
                  }
                >
                  {item.name}
                </h3>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};

function TabGroup() {
  return (
    <>
      <div>
        <MobileTabs />
        <LargeTabs />
      </div>
    </>
  );
}

export default TabGroup;
