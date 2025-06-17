import React, { useEffect, useState } from "react";
import Button from "../components/button";
import axios from "axios";
import Card from "../components/Card";
import { Link } from "react-router-dom";

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

  // TWO WAY BINDING
  const [fullname, setfull] = useState("");
  const submitform = (event) => {
    event.preventDefault();
    console.log(fullname);
    setfull("");
  };
  // TWO WAY BINDING

  // AXIOS PRACRICE
  const [data, setData] = useState([]);

  const getData = async () => {
    const response = await axios.get(
      "https://picsum.photos/v2/list?page=2&limit=30"
    );
    // console.log(response.data);
    setData(response.data);
    // console.log(data);
  };
  // AXIOS PRACRICE

  return (
    <>
      {/* // WITHOUT HOOKS */}
      {/* <Button user="About" name="hello world" color="bg-teal-700"/>/ */}
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
      {/* <div>
        <h1>User name is {username}</h1>
        <button
          className="p-5 cursor-pointer bg-amber-300"
          onClick={Changeuser}
        >
          change user
        </button>
      </div> */}
      {/* // WITH HOOKS */}

      {/* FORM HANDLING */}
      {/* <form
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
      </form> */}
      {/* FORM HANDLING */}

      {/* TWO WAY BINDING */}
      <form
        onSubmit={(event) => {
          submitform(event);
        }}
      >
        <input
          type="text"
          value={fullname}
          className="border-2 p-3 block m-5"
          placeholder="Name"
          onChange={(e) => {
            setfull(e.target.value);
            // console.log(e.target.value);
          }}
        />
        <button className="p-4 bg-green-500 cursor-pointer block mt-5">
          Submit
        </button>
      </form>
      {/* TWO WAY BINDING */}

      {/* AXIOS PRACTICE */}
      <div className="p-10">
        <button
          onClick={getData}
          className="bg-pink-700 text-white rounded  px-5 py-4 font-bold text-2xl cursor-pointer"
        >
          Get Data
        </button>
        <div className="mt-5 bg-teal-600 p-6 text-white text-2xl">
          {data.map((element, idx) => {
            return (
              <Card
                key={idx}
                username={element.author}
                photo={element.download_url}
              />
            );
          })}
         
        </div>
      </div>
       {/* <Link to={"/about"}>About</Link> */}
    </>
  );
}
export default Homepage;
