import React from "react";

interface User {
  id: number;
  name: string;
}

const UsersPage = async () => {
  // The next time we hit the same url, next js will fetch the data from it's cache.
  const res = await fetch("https://jsonplaceholder.typicode.com/users", {
    // With the settings below we can manipulate the cache.
    // cache: "no-store", // to disable caching --use it for data that changes frequently.
    // next: { revalidate: 10 }, // to keep data fresh for a certain period of time --this means 10 sec.
  });
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
