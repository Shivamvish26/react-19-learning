// parent component

import Userpropchild from "./Userpropchild";

export default function Userpropparents() {
  const handletextname = () => {
    console.log("Function is running");
  };

  const name = () => {
    console.log("Shubham");
  };
 
  return (
    <div>
      <h1>Passing the function using the props</h1>
      <Userpropchild handletextname={handletextname} />
      <Userpropchild name={name} />
    </div>
  );
}
