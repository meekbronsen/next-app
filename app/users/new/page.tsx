"use client";
import { useRouter } from "next/navigation";
import React from "react";

const NewUser = () => {
  const router = useRouter();

  return (
    <>
      <button
        className="btn btn-primary "
        onClick={() => router.push("/users")}
      >
        Back
      </button>
      <div>New User Page</div>
    </>
  );
};

export default NewUser;
