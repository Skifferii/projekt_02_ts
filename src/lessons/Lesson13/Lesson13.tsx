import { ChangeEvent, useEffect, useState } from "react";

import ResultBlock from "../../components/ResultBlock/ResultBlock";
import { Lesson13Component } from "./styles";
import Button from "../../components/Button/Button";

function Lesson13() {
  const [firstResult, setFirstResult] = useState<string>("");
  const [catArray, setCatArrayData] = useState<string[]>([]);
 
  const getCatFact = async () => {
    try {
      const response = await fetch("https://catfact.ninja/fact");
      const result = await response.json();
      console.log(result);
      setFirstResult(result.fact);
    } catch (error) {
      console.error("Error fetching cat fact:", error);
    }
  };
  useEffect(() => {
    getCatFact();
  }, []);

  const getCatFactClick = async () => {
    try {
      const response = await fetch("https://catfact.ninja/fact");
      const result = await response.json();
      setCatArrayData([...catArray, result.fact]);
    } catch (error) {
      console.error("Error fetching cat fact:", error);
    }
  };
  
  
  const deleteAllData = () => {
    setFirstResult("");
    setCatArrayData([]);
  };

  return (
    <Lesson13Component>
      <>
        {firstResult !== `` && (
          <ResultBlock resultName="First fact" result={firstResult} />
        )}
      </>
      <Button name={"GET MORE INFO"} onButtonClick={getCatFactClick} />
      <>
        {catArray.length > 0 && (
          <>
            {catArray.map((fact, index) => (
              <ResultBlock
                key={index}
                resultName={`Cat Fact ${index + 1}`}
                result={fact}
              />
            ))}
          </>
        )}
      </>
      {catArray.length > 0 && (
        <Button name={"DELETE ALL DATA"} onButtonClick={deleteAllData} />
      )}
    </Lesson13Component>
  );
}

export default Lesson13;
