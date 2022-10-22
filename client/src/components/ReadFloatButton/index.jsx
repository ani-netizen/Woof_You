import React from "react";
import { FaRegNewspaper } from "react-icons/fa";
import { Link } from "react-router-dom";

function ReadFloatButton() {
  return (
    <Link to="/read">
      <div className="bg-amber-400 flex items-center justify-center text-2xl fixed bottom-10 right-10 p-5 rounded-full">
        <FaRegNewspaper />
      </div>
    </Link>
  );
}

export default ReadFloatButton;
