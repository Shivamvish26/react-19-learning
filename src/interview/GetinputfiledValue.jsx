// controlled component ui
import React, { useState } from "react";

export default function GetinputfiledValue() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Name.....:", name);
    console.log("Email......:", email);
    console.log("Phone........:", phone);
    setName("");
    setEmail("");
    setPhone("");
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="input">Enter Text</label>
        <br />
        <input
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <br />
        <label htmlFor="input">Enter Email</label>
        <br />
        <input
          type="email"
          placeholder="Enter Name"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <br />
        <label htmlFor="input">Enter Phone</label>
        <br />
        <input
          type="number"
          placeholder="Enter Name"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <br />
        <br />
        <button>Console Data</button>
      </form>
    </div>
  );
}
