import React, { useEffect } from "react";

export const Home = () => {
  useEffect(() => {
    return () => {
      console.log("unmouting home page...");
    };
  });
  return (
    <div>
      <h1>Home page</h1>
    </div>
  );
};
