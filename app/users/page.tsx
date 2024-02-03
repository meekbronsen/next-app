// The content below will be rendered when user is on this url -> http://localhost:3000/users
import React from "react";

interface User {
  id: number;
  name: string;
}

const UsersPage = async () => {
  // NB: Note that fetch is note inside a useEffect.
  // Cause we are already on the server
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users: User[] = await res.json();

  return (
    <>
      <h1>Users</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </>
  );
};

export default UsersPage;
