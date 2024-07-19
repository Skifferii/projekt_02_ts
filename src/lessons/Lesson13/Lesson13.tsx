import { useEffect, useState } from "react";

import { GrayBox, Lesson13Component } from "./styles";
import Button from "../../components/Button/Button";
import SpinnerCat from "../../components/SpinnerCat/SpinnerCat";
function Lesson13() {
  const [catArray, setCatArrayData] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false); // Cостояние загрузки

  const getCatFact = async () => {
    setIsLoading(true); // Устанавливаем состояние загрузки в true
    try {
      const response = await fetch("https://catfact.ninja/fact");
      const result = await response.json();
      setCatArrayData([...catArray, result.fact]);
    } catch (error) {
      console.error("Error fetching cat fact:", error);
    } finally {
      setIsLoading(false); // Устанавливаем состояние загрузки в false после завершения запроса
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
      {isLoading && (
        <SpinnerCat /> // Показываем спиннер, если данные загружаются
      )}
      <>
        {catArray.length > 0 && (
          <>
            <GrayBox>
              {catArray.map((fact, index) => (
                <h1 key={index}>
                  Cat Fact {index + 1} {fact}
                </h1>
              ))}
            </GrayBox>
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
