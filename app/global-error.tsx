"use client";
import React from "react";

// Inorder to find those error and log the somewhere use error from Props
interface Props {
  error: Error;
}

// will catch global errors that error file can't capture
const GlobalError = ({ error }: Props) => {
  console.log('error', error);

  return <div>GlobalError</div>;
};

export default GlobalError;
