// Cоздайте компонент Homework11 в папке homeworks, в нем должно быть 2 компонента Input
// Каждый из инпутов должен быть котролируемым компонентом и контролироваться с помощью родительского состояния
// При изменении значения в первом поле должен отправляться запрос на URL https://dog.ceo/api/breeds/image/random, после того, как данные придут, необходимо отобразить их в консоли
// сделайте Pull request и сбросьте мне ссылку на него в слаке

import { ChangeEvent, useEffect, useState } from "react";
import { HomeWork11Component } from "./styles";
import Input from "../../components/Input/Input";

function HomeWork11() {
  const [firstInputValue, setFirstInputValue] = useState<string>("");
  const [secondInput, setSecondInput] = useState<string>("");

  const firstInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFirstInputValue(event.target.value);
  };

  const secondInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSecondInput(event.target.value);
  };

  const getDog = async () => {
    try {
      const response = await fetch("https://dog.ceo/api/breeds/image/random");
      const result = await response.json();
      console.log(result);
    } catch (error) {}
  };

  useEffect(() => {
    getDog();
  }, [firstInputChange]);

  return (
    <HomeWork11Component>
      <Input
        label="first_Input"
        placeholder="Enter value 1"
        name="First_Input"
        value={firstInputValue}
        onChange={firstInputChange}
      />
      <Input
        label="second_Input"
        placeholder="Enter value 2"
        name="Second_Input"
        value={secondInput}
        onChange={secondInputChange}
      />
    </HomeWork11Component>
  );
}

export default HomeWork11;
