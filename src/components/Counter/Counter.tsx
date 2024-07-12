import "./styles.css";
import Button from "../Button/Button";
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState<number>(0);


  const onMinusClick = (): void => {
    setCount((prevValue) => prevValue - 1);
  };

  const onPlusClick = (): void => {
    setCount((prevValue) => prevValue + 1);
  };

  return (
    <div className="counter-component">
      <div className="button-wrapper">
        <Button name="-" onButtonClick={onMinusClick} />
      </div>
      <div className="counter-result">{count}</div>
      <div className="button-wrapper">
        <Button name="+" onButtonClick={onPlusClick} />
      </div>
    </div>
  );
}

export default Counter;
