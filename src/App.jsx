import "./App.css";
import Checkboxes from "./interview/Checkboxes";
import Defaultprops from "./interview/Defaultprops";
import FetchApi from "./interview/fetchApi";
import GetinputfiledValue from "./interview/GetinputfiledValue";
import IncDec from "./interview/inc-dec";
import LoginValidation from "./interview/loginval";
import Props from "./interview/Props";
import Rendering from "./interview/rendering";
import Searchfilter from "./interview/searchfilter";
import TodoList from "./interview/todolist";
import Toggle from "./interview/toggle";
import Wrapper from "./interview/wrapper";

function App() {
  // 
  const name = "Shubham";

  {/* Object with array */}
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
        <Checkboxes/>
    </>
  );
}

export default App;
