// Handle radio button and dropdown using states
import React, { useState } from "react";

export default function CheckboxandDropdown() {
  const [selectedItem, setSelectedItem] = useState("Male");
  const [selectedDropdown, setSelectedDropdown] = useState("Select one of them");

  return (
    <div>
      Checkbox and Dropdown
      <div>
        <h3>Radio Button Selected: {selectedItem}</h3>
        <input
          type="radio"
          name="gender"
          value="Male"
          id="male"
          checked={selectedItem === "Male"}
          onChange={(e) => setSelectedItem(e.target.value)}
        />
        <label htmlFor="male">Male</label>
        <input
          type="radio"
          name="gender"
          value="Female"
          id="female"
            checked={selectedItem === "Female"}
          onChange={(e) => setSelectedItem(e.target.value)}
        />
        <label htmlFor="female">Female</label>
      </div>
      <div>
        <h3>Dropdown Selection: {selectedDropdown}</h3>
        <select
          value={selectedDropdown}
          onChange={(e) => setSelectedDropdown(e.target.value)}
        >
          <option>Select one of them</option>
          <option value="pune">Pune</option>
          <option value="mumbai">Mumbai</option>
          <option value="nagpur">Nagpur</option>
        </select>
      </div>
    </div>
  );
}
