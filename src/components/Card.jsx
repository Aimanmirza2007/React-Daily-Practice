import React from "react";

const Card = (props) => {
console.log(props);


  return (
    <div className=" p-6 mr-7 mb-5 text-white b inline-block text-center bg-green-500">
      <img src={props.photo} alt="" className="w-32 h-32 rounded-full mb-3"/>
      <h1 className="text-2xl  mb-3 font-semi-bold">{props.username}</h1>
      <h1 className="mb-4">{props.city},{props.age}</h1>
      <h1>{props.profession}</h1>
      <button className="bg-emerald-600 mt-5 text-white p-4 rounded">Add Friend</button>
    </div>
  );
};

export default Card;
