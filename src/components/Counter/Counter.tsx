import { CounterComponent, ButtonWrapper, CounterResult } from "./styles";
import Button from "../Button/Button";
import { CounterProps } from "./types";

function Counter({count, onMinus, onPlus}: CounterProps) {
  return (
    <CounterComponent>
      <ButtonWrapper>
        <Button name="-" onButtonClick={onMinus} />
      </ButtonWrapper>
      <CounterResult>{count}</CounterResult>
      <ButtonWrapper>
        <Button name="+" onButtonClick={onPlus} />
      </ButtonWrapper>
    </CounterComponent>
  );
}

export default Counter;