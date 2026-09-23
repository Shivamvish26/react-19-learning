import "./App.css";
import FetchApi from "./interview/fetchApi";
import IncDec from "./interview/inc-dec";
import LoginValidation from "./interview/loginval";
import Props from "./interview/Props";
import Rendering from "./interview/rendering";
import Searchfilter from "./interview/searchfilter";
import TodoList from "./interview/todolist";
import Toggle from "./interview/toggle";

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

      <Props skills={skills} />
    </>
  );
}

export default App;
