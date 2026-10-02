import React from "react";

export default function Nestedloop() {
  const colleges = [
    {
      id: 1,
      name: "ABC College",
      city: "Pune",
      departments: [
        {
          name: "Computer Science",
          students: ["Shubham", "Rahul", "Amit"],
        },
        {
          name: "Mechanical",
          students: ["Saurabh", "Akash"],
        },
      ],
    },
    {
      id: 2,
      name: "XYZ College",
      city: "Mumbai",
      departments: [
        {
          name: "IT",
          students: ["Raj", "Vijay"],
        },
        {
          name: "Civil",
          students: ["Karan", "Rohit"],
        },
      ],
    },
  ];

  return (
    <div>
      <h1>College Data</h1>

      {colleges.map((college) => {
        return (
          <div key={college.id}>
            <h2>{college.name}</h2>
            <p>{college.city}</p>

            {college.departments.map((department) => {
              return (
                <div key={department.name}>
                  <h3>{department.name}</h3>

                  <ul>
                    {department.students.map((student, index) => {
                      return <li key={index}>{student}</li>;
                    })}
                  </ul>
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}
