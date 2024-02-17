"use client";

import { useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  const { status, data: session } = useSession();

  return (
    <div className=" p-5 bg-slate-300 flex gap-8">
      <Link href={"/"} className=" mr-5 ">
        Next.js
      </Link>
      <Link href={"/users"} className=" mr-5 ">
        Users
      </Link>
      {status === "authenticated" && (
        <div className="flex gap-4">
          <span>{session.user!.name} </span>
          <Link href={"/api/auth/signout"}>Log out</Link>
        </div>
      )}
      {status === "unauthenticated" && (
        <Link href={"/api/auth/signin"} className=" mr-5 ">
          Login
        </Link>
      )}
    </div>
  );
};

export default Navbar;
