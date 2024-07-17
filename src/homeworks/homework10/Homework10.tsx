// Перед началом работы необходимо ответвиться от папки main репозитория, в котором мы работаем с React и TypeScript

// Требования по ДЗ:

// Cоздайте компонент Homework10 в папке homeworks, в нем должно быть 2 компонента Input и компонент кнопки Button
// Каждый из инпутов должен быть котролируемым компонентом и контролироваться с помощью родительского состояния
// При нажатии на кнопку значения из полей должны быть выведены на экран в двух стилизованных блоках
// сделайте Pull request и сбросьте мне ссылку на него в слаке
// P.S. Повторите тему по работе с отправкой запросов (fetch) из базового курса Frontend

import { Homework10Component } from "./styles";
import Input from "../../components/Input/Input";
import ResultBlock from "../../components/ResultBlock/ResultBlock";
import { ChangeEvent, useState } from "react";
import Button from "../../components/Button/Button";

function HomeWork10() {
  const [example1Value, setExample1Value] = useState<string>("");
  const handleChangeExample1 = (event: ChangeEvent<HTMLInputElement>) => {
    setExample1Value(event.target.value);
    console.log(event.target.value);
  };
  const [example2Value, setExample2Value] = useState<string>("");
  const handleChangeExample2 = (event: ChangeEvent<HTMLInputElement>) => {
    setExample2Value(event.target.value);
    console.log(event.target.value);
  };

  return (
    <Homework10Component>
      <Input
        label="Example 1"
        placeholder="Enter value 1"
        name="example1"
        value={example1Value}
        onChange={handleChangeExample1}
      />
      <Button
        disabled={false}
        name="Button1"
        onButtonClick={() => {
          example2Value !== "" && (
            <ResultBlock resultName="field Example 1" result={example1Value} />
          );
        }}
      />

      <Input
        label="Example 2"
        placeholder="Enter value 2"
        name="example2"
        value={example2Value}
        onChange={handleChangeExample2}
      />
      <Button
        disabled={false}
        name="Button2"
        onButtonClick={() => {
          example2Value !== "" && (
            <ResultBlock resultName="field Example 2" result={example2Value} />
          );
        }}
      />
    </Homework10Component>
  );
}

export default HomeWork10;







