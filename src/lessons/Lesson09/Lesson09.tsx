import { useState } from "react";
import { BlueBigBox, GreenLittleBox, Lesson09Component } from "./styles"
import Counter from "../../components/Counter/Counter";

function Lesson09() {
  const [count, setCount] = useState<number>(0);

  const onMinusClick = (): void => {
    setCount((prevValue) => prevValue - 1);
  };

  const onPlusClick = (): void => {
    setCount((prevValue) => prevValue + 1);
  };

  return (
    <Lesson09Component>
      <GreenLittleBox>Green Little Box</GreenLittleBox>
      <BlueBigBox>Blue Big Box {count}</BlueBigBox>
      <Counter count={count} onMinus={onMinusClick} onPlus={onPlusClick}/>
    </Lesson09Component>
  )
}

export default Lesson09