import React, { useContext, useEffect } from "react";
import MenuBar from "../components/menuBar";
import { menuContext } from "./home";

export default function AboutUs() {
  const value = useContext(menuContext);

   
  return (
    <div>
      <h1>about us </h1>
      <MenuBar items={value} />
    </div>
  );
}
