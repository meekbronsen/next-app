import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className=" p-5 bg-slate-300 flex ">
      <Link href={"/"} className=" mr-5 ">
        Next.js
      </Link>
      <Link href={"/users"} className=" mr-5 ">
        Users
      </Link>
    </div>
  );
};

export default Navbar;
