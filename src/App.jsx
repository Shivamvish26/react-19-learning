import { useState } from "react";
import "./App.css";
import CheckboxandDropdown from "./interview/CheckboxandDropdown";
import Checkboxes from "./interview/Checkboxes";
import Defaultprops from "./interview/Defaultprops";
import FetchApi from "./interview/fetchApi";
import GetinputfiledValue from "./interview/GetinputfiledValue";
import IncDec from "./interview/inc-dec";
import LoginValidation from "./interview/loginval";
import LoopingMap from "./interview/LoopingMap";
import Props from "./interview/Props";
import Rendering from "./interview/rendering";
import Searchfilter from "./interview/searchfilter";
import Clock from "./interview/task1";
import TodoList from "./interview/todolist";
import Toggle from "./interview/toggle";
import Wrapper from "./interview/wrapper";
import Nestedloop from "./interview/Nestedloop";

function App() {
  {
    /* Task 1 sub part */
  }
  const [colour, setColor] = useState("black");

  //props
  const name = "Shubham";

  {
    /* Object with array */
  }
  const user = {
    name: "Shivam",
    age: 25,
    role: "Frontend Developer",
  };

  // Array
  const skills = ["React", "JavaScript", "Node.js"];
  return (
    <>
      {/* <IncDec/> */}
      {/* <Rendering/> */}
      {/* <TodoList/> */}
      {/* <Searchfilter/> */}
      {/* <FetchApi/> */}
      {/* <LoginValidation name={name}/> */}
      {/* <Toggle/> */}

      {/* <Props skills={skills} /> */}
      {/* <Defaultprops name="Shivam Vishwakarma"/> */}
      {/* default value in react if the user is not logged in */}
      {/* <Defaultprops /> */}
      {/* html cotent to deafult props using the html */}
      {/* <Wrapper>
          <h1>The Wrapper Component</h1>
        </Wrapper> */}
      {/* <GetinputfiledValue/> */}
      {/* <Checkboxes/> */}
      {/* <CheckboxandDropdown/> */}
      {/* <LoopingMap/> */}

      {/* Task 1 sub part */}
      {/* <select onChange={(e) => setColor(e.target.value)}>
        <option value="red">Red</option>
        <option value="black">Black</option>
        <option value="orange">Orange</option>
      </select>
      <Clock colour={colour} /> */}

      <Nestedloop/>
    </>
  );
}

export default App;
