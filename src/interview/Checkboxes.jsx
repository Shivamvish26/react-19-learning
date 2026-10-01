import React, { useState } from "react";

export default function Checkboxes() {
  const [ischecked, setChecked] = useState(false);

  const getCheckvalue = (e) => {
    setChecked(e.target.checked);
  };

  return (
    <div>
      Checkboxes
      <br />
      <input
        type="checkbox"
        name="vehicle"
        value="Bike"
        checked={ischecked}
        onChange={getCheckvalue}  
        id="bike"
      />
      <label htmlFor="bike">Bike</label>
      {ischecked ? <h3>Checked</h3> : <h3>Unchecked</h3>}
    </div>
  );
}
