"use client";
import React from "react";

// We are using the reset function to retry rerendering
interface Props {
  error: Error;
  reset: () => void;
}

const ErrorPage = ({ error, reset }: Props) => {
  console.log("error", error);
  return (
    <>
      <div>An unexpected error has occurred</div>
      <button className="btn" onClick={() => reset()}>Retry</button>
    </>
  );
};

export default ErrorPage;
