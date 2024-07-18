import { Homework10Component } from "./styles";
import Input from "../../components/Input/Input";
import ResultBlock from "../../components/ResultBlock/ResultBlock";
import { ChangeEvent, useState } from "react";
import Button from "../../components/Button/Button";

function HomeWork10() {
  const [firstNoteValue, setFirstNoteValue] = useState<string>("");
  const [secondNoteValue, setSecondNoteValue] = useState<string>("");
  const [firstResult, setFirstResult] = useState<string>("");
  const [secondResult, setSecondResult] = useState<string>("");
  const [isShowBlock, setIsShowBlock] = useState<boolean>(false);

  const firstNoteOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFirstNoteValue(event.target.value);
  };

  const secondNoteOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSecondNoteValue(event.target.value);
  };

  const showResult = () => {
       setFirstResult(firstNoteValue);
       setSecondResult(secondNoteValue);
    if (firstNoteValue !== `` || secondNoteValue !== ``) {
        setIsShowBlock(!isShowBlock);
      }
  };

  return (
    <Homework10Component>
      <Input
        label="Example 1"
        placeholder="Enter value 1"
        name="example1"
        value={firstNoteValue}
        onChange={firstNoteOnChange}
      />
      <Input
        label="Example 2"
        placeholder="Enter value 2"
        name="example2"
        value={secondNoteValue}
        onChange={secondNoteOnChange}
      />
      <Button
        disabled={false}
        name="SCHOW/HIDE RESULT"
        onButtonClick={showResult}
      />
      {isShowBlock && (
        <>
          {firstResult !== `` && (
            <ResultBlock resultName="First_Note_Value" result={firstResult} />
          )}
          {secondResult && (
            <ResultBlock resultName="Second_Note_Value" result={secondResult} />
          )}
        </>
      )}
    </Homework10Component>
  );
}

export default HomeWork10;
