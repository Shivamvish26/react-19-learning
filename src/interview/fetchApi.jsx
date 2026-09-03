import React, { useState, useEffect } from "react";

export default function FetchApi() {
  const data = [
    {
      id: "1",
      name: "Shivam",
      email: "shivam@gmail.com",
    },
    {
      id: "2",
      name: "Shubham",
      email: "shubham@gmail.com",
    },
  ];

  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users",
        );
        if (!response.ok) {
          throw new Error("Server not responding");
        }
        const data = await response.json();
        console.log("Fetching data from API....", data);
        setTimeout(() => {
          setUsers(data);
        }, 2000);
      } catch (error) {
        console.log("Error while fetching the data", error);
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) return <p>Loading....</p>;
  if (error) return <p>Error while fetching the data..</p>;

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map((item, index) => (
            <tr key={index}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
