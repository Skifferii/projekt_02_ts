import { v4 } from "uuid";

import "./styles.css";
import { cars } from "./data";
import { Car } from "./types";

function HomeWork07() {
  const carsElements = cars.map((car: Car) => {
    return (
      <div className="car-card">
        <div>{car.brand}</div>
        <div>{car.price}</div>
        <div>{car.isDiesel ? "Diesel" : "Benzin"}</div>
      </div>
    );
  });

  return <div className="homework07-component">{carsElements}</div>;
}

export default HomeWork07;
