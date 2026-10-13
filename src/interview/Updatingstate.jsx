import React, { useState } from "react";
import User from "./User";

export default function Updatingstate() {
  const [data, setData] = useState({
    name: "Shubham",
    address: {
      age: 26,
      city: "Pune",
    },
  });

  //   const handleCity = () => {
  //     setData({
  //       ...data,
  //       city: "Mumbai",
  //     });
  //   };
  //   const handleAge = () => {
  //     setData({
  //       ...data,
  //       age: data.age + 1,
  //     });
  //   };

  const handleCity = () => {
    setData({
      ...data,
      address: {
        ...data.address,
        city: "Mumbai",
      },
    });
  };

  const handleAge = () => {
    setData({
      ...data,
      address: {
        ...data.address,
        age: data.address.age + 1,
      },
    });
  };

  return (
    <div>
      Updataing the state uisng the State
      <h3>{data.name}</h3>
      <h3>{data.address.age}</h3>
      <h3>{data.address.city}</h3>
      <button onClick={handleCity}>Change City</button>
      <button onClick={handleAge}>Change Age</button>
    </div>
  );
}
