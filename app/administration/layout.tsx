import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const AdminLayout = ({ children }: Props) => {
  return (
    <>
      <div className="flex">
        <aside className="h-full p-5 mr-5 bg-slate-200">Admin sidebar</aside>
        <div>{children}</div>
      </div>
    </>
  );
};

export default AdminLayout;
