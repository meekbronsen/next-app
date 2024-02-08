import React, { useState } from "react";
import UserTable from "./UserTable";


interface Props{
  searchParams: {sortOrder: string}
}

const UsersPage = async ({searchParams: {sortOrder}}: Props) => {
  
  
  return (
    <>
      <div className="flex">
        <h1 className="  ">Users</h1>
      </div>
      <UserTable sortOrder={sortOrder} />
    </>
  );
};

export default UsersPage;
