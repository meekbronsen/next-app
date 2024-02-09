import React, { Suspense, useState } from "react";
import UserTable from "./UserTable";
import Link from "next/link";


interface Props{
  searchParams: {sortOrder: string}
}

const UsersPage = async ({searchParams: {sortOrder}}: Props) => {
  
  return (
    <>
      <div className="flex justify-between">
        <h1 className="  ">Users</h1>
        <Link href={'/users/new'} className="btn btn-outline text-xs text-black ">NEW USER</Link>
      </div>
      <Suspense fallback={<p>Loading...</p>}>
        <UserTable sortOrder={sortOrder} />
      </Suspense>
    </>
  );
};

export default UsersPage;
