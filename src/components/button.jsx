import React from "react";

function Button({name,color}) {
  return (
    <>
      <button className={`text-white ${color} p-4 cursor-pointer`}>{name}</button>
    </>
  );
}
export default Button;
