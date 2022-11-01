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
      <div className="lg:hidden bg-white fixed bottom-0 z-10 w-full flex items-center justify-evenly text-gray-500 border">
        {allTypes.map((item, index) => (
          <div
            key={index}
            className="transition duration-300 py-1 hover:scale-110 font-bold hover:text-amber-500"
          >
            <Link
              to={`/${item.id}`}
              className="w-1/4"
              preventScrollReset={true}
            >
              <h5 style={{ fontSize: "0.6rem" }}>{item.name}</h5>
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
      <div className="hidden bg-white md:flex fixed right-0 top-28 flex-col px-5 w-1/4">
        {allTypes.map((item, index) => (
          <div
            key={index}
            className="border-b p-2 transition duration-300 hover:scale-110 font-bold hover:text-amber-500"
          >
            <Link to={`/${item.id}`} preventScrollReset={true}>
              <h3>{item.name}</h3>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};

function VerticalTabGroup() {
  return (
    <>
      <div>
        <MobileTabs />
        <LargeTabs />
      </div>
    </>
  );
}

export default VerticalTabGroup;
