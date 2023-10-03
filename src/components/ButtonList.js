import React from "react";
import Button from "./Button";

const ButtonList = () => {
  const list = [
    "All",
    "Valorant",
    "Live",
    "Games",
    "league of legends",
    "cooking",
    "songs",
    "animes",
    "dramas",
  ];
  return (
    <div className="flex flex-wrap mx-4 px-2  ">
      {list.map((item, index) => (
        <Button key={index} item={item} />
      ))}
    </div>
  );
};

export default ButtonList;
