interface User {
  id: number;
  name: string;
  email: string;
}

const UserTable = async () => {
  // Fetch Users from right here
    const res = await fetch("https://jsonplaceholder.typicode.com/users", {});
    const users: User[] = await res.json();

    return <table className="table table-bordered">
    <thead>
      <tr>
        <th>Name</th>
        <th>Email</th>
      </tr>
    </thead>
    <tbody>
      {users.map((user) => (
        <tr>
          <td>{user.name}</td>
          <td>{user.email}</td>
        </tr>
      ))}
    </tbody>
  </table>

}

export default UserTable;