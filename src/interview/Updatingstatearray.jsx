import { useState } from "react";

export default function UpdatingArray() {
  const [users, setUsers] = useState([
    { id: 1, name: "Shubham", city: "Pune" },
    { id: 2, name: "Rahul", city: "Mumbai" },
  ]);

  const handleUpdateCity = () => {
    setUsers((prevUsers) =>
      prevUsers.map((user) =>
        user.id === 1 ? { ...user, city: "Delhi" } : user,
      ),
    );
  };
  const handleUpdaterahulCity = () => {
    setUsers((prevUsers) =>
      prevUsers.map((user) =>
        user.id === 2 ? { ...user, city: "Delhi" } : user,
      ),
    );
  };

  return (
    <div>
      <h2>Users List</h2>

      {users.map((user) => (
        <div key={user.id}>
          <h3>{user.name}</h3>
          <p>City: {user.city}</p>
        </div>
      ))}

      <button onClick={handleUpdateCity}>Update Shubham's City</button>
      <button onClick={handleUpdaterahulCity}>Update Rahul's City</button>
    </div>
  );
}
