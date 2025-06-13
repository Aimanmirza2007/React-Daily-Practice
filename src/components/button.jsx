import React from "react";

function Button(props) {
  console.log(props);
  
  return (
    <>
      <button className={`text-white ${props.color}  p-4 cursor-pointer  block mb-4 `}>
        {props.user}
      </button>
    </>
  );
}
export default Button;
