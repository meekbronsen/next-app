import React, { useState } from "react";
import Time from '../components/Time';
import UserTable from "./UserTable";


const UsersPage = async () => {

  return (
    <>
      <h1>Users</h1>
      <Time/>
      <UserTable/>
    </>
  );
};

export default UsersPage;
