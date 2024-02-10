import { notFound } from "next/navigation";
import React from "react";

interface Props {
  params: { id: number };
}

const useDetailPage = ({ params: { id } }: Props) => {
  if (id > 10) notFound();
  
  return <div>useDetailPage {id}</div>;
};

export default useDetailPage;
