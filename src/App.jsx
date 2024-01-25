// eslint-disable-next-line no-unused-vars
import React from "react";
import FoodList from "./component/FoodList";

export default function App() {
  const foodItem = ["1", "2", "3", "4", "5"];
  return (
    <>
        <div>
          <FoodList item={foodItem}/>
        </div>
    </>
  );
}