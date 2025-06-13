import React from "react";
import Button from "../components/button";
import Card from "../components/Card";

function About() {
  const users = [
    {
      name: "Alice Johnson",
      age: 29,
      city: "New York",
      profession: "Graphic Designer",
      profile_photo: "https://example.com/photos/alice.jpg",
    },
    {
      name: "Brian Smith",
      age: 35,
      city: "Los Angeles",
      profession: "Software Engineer",
      profile_photo: "https://example.com/photos/brian.jpg",
    },
    {
      name: "Catherine Lee",
      age: 24,
      city: "Chicago",
      profession: "Marketing Specialist",
      profile_photo: "https://example.com/photos/catherine.jpg",
    },
    {
      name: "David Kim",
      age: 42,
      city: "San Francisco",
      profession: "Product Manager",
      profile_photo: "https://example.com/photos/david.jpg",
    },
    {
      name: "Emily Davis",
      age: 31,
      city: "Seattle",
      profession: "UX Researcher",
      profile_photo: "https://example.com/photos/emily.jpg",
    },
  ];



  return (
    <>
      <div className="p-5">
        {/* <Button user="Hello" color="bg-pink-600 text-2xl font-bold"/> */}

        {users.map((item,idx)=>{
          return <Card key={idx} username={item.name} age={item.age} city={item.city} profession={item.profession} photo={item.profile_photo} />
        })}
      </div>
    </>
  );
}
export default About;
