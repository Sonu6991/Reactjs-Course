import React from "react";
import { useLocation } from "react-router-dom";

export const CardView = () => {
  const location = useLocation();
  return <div>{location.state.name}</div>;
};
