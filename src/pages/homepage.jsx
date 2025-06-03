import React, { useState } from "react";
import Button from "../components/button";

function Homepage() {
  // WITHOUT HOOKS
  // let a = "Mirza";

  // const Changevalue = () => {
  //   console.log("before", a);
  //   a = "Aslam";
  //   console.log("after", a);
  // };
  // WITHOUT HOOKS

  // WITH HOOKS
  // const [username, setname] = useState("Aiman");
  // function Changeuser() {
  //   setname("Mirza");
  //   console.log(username);
  // }

  // WITH HOOKS

  // FORM HANDLING
  // const submitHandler = (e) => {
  //   e.preventDefault();
  //   console.log("submitted");
  // };
  // FORM HANDLING
  return (
    <>
      {/* // WITHOUT HOOKS */}
      {/* <Button name="hello world" color="bg-teal-700"/> */}
      {/* <div>
        <h1>The value of a is {a}</h1>
        <button
          onClick={Changevalue}
          className="p-5 cursor-pointer bg-amber-300"
        >
          Change value of a
        </button>
      </div> */}
      {/* // WITHOUT HOOKS */}

      {/* // WITH HOOKS */}
      <div>
        <h1>User name is {username}</h1>
        <button
          className="p-5 cursor-pointer bg-amber-300"
          onClick={Changeuser}
        >
          change user
        </button>
      </div>
      {/* // WITH HOOKS */}

      {/* FORM HANDLING */}
      <form
      // onSubmit={(e) => {
      //   submitHandler(e);
      // }}
      >
        <input
          className="border-2 p-3 block m-5"
          type="text"
          placeholder="Name"
        />
        <button className="p-4 bg-teal-500 cursor-pointer block mt-5">
          Submit
        </button>
      </form>
      {/* FORM HANDLING */}

      {/* TWO WAY BINDING */}
    </>
  );
}
export default Homepage;
