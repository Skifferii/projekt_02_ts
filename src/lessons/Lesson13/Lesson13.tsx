import { useEffect, useState } from "react";

import ResultBlock from "../../components/ResultBlock/ResultBlock";
import { Lesson13Component } from "./styles";
import Button from "../../components/Button/Button";

function Lesson13() {
  const [catArray, setCatArrayData] = useState<string[]>([]);

  const getCatFact = async () => {
    try {
      const response = await fetch("https://catfact.ninja/fact");
      const result = await response.json();
      setCatArrayData([...catArray, result.fact]);
    } catch (error) {
      console.error("Error fetching cat fact:", error);
    }
  };

  useEffect(() => {
    getCatFact();
  }, []);

  const deleteAllData = () => {
    setCatArrayData([]);
  };

  return (
    <Lesson13Component>
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
      <Button name={"GET MORE INFO"} onButtonClick={getCatFact} />
      {catArray.length > 0 && (
        <Button name={"DELETE ALL DATA"} onButtonClick={deleteAllData} />
      )}
    </Lesson13Component>
  );
}

export default Lesson13;
