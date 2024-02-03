"use client";
import React, { useEffect, useState } from "react";

const Time = () => {
  const [time, setTime] = useState(new Date());


  useEffect(() => {
    setTime(new Date())
  }, [time]);

  return <p>{time.toLocaleTimeString()}</p>;
};

export default Time;
