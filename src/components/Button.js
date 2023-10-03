import React from "react";

const Button = ({ item }) => {
  return (
    <div className="m-2 px-2">
      <button className="bg-gray-300 py-1 px-4 m-1 rounded-full ">
        {item}
      </button>
    </div>
  );
};

export default Button;
