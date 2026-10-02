import LoopingComponent from "./LoopingComponent";

export default function LoopingMap() {
  const userData = [
    {
      name: "Shubham",
      age: 25,
      id: 1,
      email: "shubham@gmail.com",
    },
    {
      name: "Saourabh",
      age: 25,
      id: 2,
      email: "saourabh@gmail.com",
    },
    {
      name: "Ashish",
      age: 25,
      id: 3,
      email: "ashish@gmail.com",
    },
  ];
  return (
    <div>
      {/* Looping with map function */}
      {/* Unique key to identify each row in table */}
      {/* <table border={1}>
        <thead>
          <tr>
            <td>Id</td>
            <td>Name</td>
            <td>Age</td>
            <td>Email</td>
          </tr>
        </thead>
        <tbody>
          {userData.map((user) => {
            return (
              
              <tr key={user.id}>  
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.age}</td>
              </tr>
            );
          })}
        </tbody>

      </table> */}
      <div>
        {userData.map((user) => {
          return (
            <div key={user.id}>
              <LoopingComponent data={user} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
