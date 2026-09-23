export default function Props({ skills }) {
  console.log(skills);
  return (
    <div>
      {/* <h2>Hey {user.name} !</h2>
      <h2>My Role is {user.role}</h2>
      <h2>My age is {user.age}</h2> */}
      <h2>{skills[1]}</h2>
    </div>
  );
}
