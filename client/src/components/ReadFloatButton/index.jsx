import React from "react";
import { FaRegNewspaper } from "react-icons/fa";
import { Link } from "react-router-dom";

function ReadFloatButton() {
  return (
    <Link to="/read" target="_blank" rel="noopener noreferrer">
      <div className="bg-amber-400 flex items-center justify-center text-2xl fixed bottom-10 right-10 p-5 rounded-full shadow-md hover:shadow-xl transition duration-500 shadow-amber-700 hover:shadow-yellow-800">
        <FaRegNewspaper />
      </div>
    </Link>
  );
}

export default ReadFloatButton;
