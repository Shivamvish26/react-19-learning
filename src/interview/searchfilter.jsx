import React, { useState } from "react";

export default function Searchfilter() {
  const [search, setSearch] = useState("");

  const data = ["shivam", "sourabh", "sanjay", "ashish","manish"];

  const filterData = data.filter((data) =>
    data.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <>
      <input
        type="text"
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <ul>
        {filterData.map((data, index) => (
          <li key={index}>{data}</li>
        ))}
      </ul>
    </>
  );
}
