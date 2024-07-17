import { Lesson10Component } from "./styles";
import Input from '../../components/Input/Input'
import ResultBlock from "../../components/ResultBlock/ResultBlock";
import { ChangeEvent, useState } from "react";

function Lesson10() {
  //1. Создаем состояние, в котором будет храниться актуальное значения поля
  const [example2Value, setExample2Value] = useState<string>('')

  //3. Создаём функцию, которая будет вызываться при изменении инпута Example2 и изменять его состояние (значение)
  const handleChangeExample2 = (event: ChangeEvent<HTMLInputElement>) => {
    setExample2Value(event.target.value)
    console.log(event.target.value)
  }

  return (
    <Lesson10Component>
      {/* пример неконтролируемого компонента */}
      {/* <Input
        label="Example 1"
        placeholder="Enter value 1"
        name='example1'
      />
      <ResultBlock resultName="Example1" result='' />
      */}
      {/* 2. Передача значение в поле  */}
      <Input
        label="Example 2"
        placeholder="Enter value 2"
        name='example2'
        value={example2Value}
        //4. Передача функции для изменения инпута Example2
        onChange={handleChangeExample2}
      />
      {/* Оперататор условного рендеринга - && (если условие с левой части оператора возвращает true, тогда элемент с правой части будет возвращен в код) */}
      {example2Value !== '' && <ResultBlock resultName="field Example 2" result={example2Value} />}
      {/* {example2Value && <ResultBlock resultName="field Example 2" result={example2Value} />} */}
    </Lesson10Component>
  )
}

export default Lesson10