import { useState } from "react";
import React from "react";

const Sanal = () => {
  const [isActive, setIsActive] = useState(false);
  const handleClick = () => {
    setIsActive(true);
  };
  return (
    <div className="bg-primary overflow-hidden h-16  w-full">
      {" "}
      {isActive ? (
        <img
          className="w-48 h-12 ml-28 my-3 rounded-lg cursor-pointer"
          src="https://images.migrosone.com/sanalmarket/custom/sanalmarket-seo-34706362.png"
          alt=""
          onClick={handleClick}
        ></img>
      ) : (
        <img
          className="w-48 h-13 my-3 ml-28  rounded-tl-lg rounded-tr-lg cursor-pointer"
          src="https://images.migrosone.com/sanalmarket/custom/sanalmarket-seo-34706362.png"
          alt=""
          onClick={handleClick}
        ></img>
      )}
    </div>
  );
};

export default Sanal;
