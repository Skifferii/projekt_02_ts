import Counter from "../../components/Counter/Counter";
import { Lesson11Component } from "./styles";
import Button from "../../components/Button/Button";
import { useState,useEffect } from "react";

function Lesson11 (){
  const [count, setCount] = useState<number>(0);

  const onMinusClick = (): void => {
    setCount((prevValue: number) => prevValue - 1);
  };

  const onPlusClick = (): void => {
    setCount((prevValue) => prevValue + 1);
  }

//console.log(`new state ${count}`)


  //useEffect (()=>{alert ("Sie Name")},[])

  useEffect (()=>{console.log(`Component did mount`)},[])


  useEffect (()=>{console.log(`Component did update`)},[count])

  useEffect (()=>{
    return ()=> {console.log(`Component will unmount`)}
    })




   return(
    <Lesson11Component>
      <Counter count={count} onMinus={onMinusClick} onPlus={onPlusClick}/>
      
      {/* <Button name="change lesson 11" onButtonClick={onPlusClick} > */}
    </Lesson11Component>
  )
}

export default Lesson11