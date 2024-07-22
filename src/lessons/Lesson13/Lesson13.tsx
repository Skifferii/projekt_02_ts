import { useEffect, useState } from "react";
import { v4 } from "uuid";
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

      if (response.ok) {
        setCatArrayData((prevArray) => [...prevArray, result.fact]);
        // setCatArrayData([...catArray, result.fact]);
      } else {
        throw Object.assign(new Error('API ERROR'), { errorObj: result })}
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
                //<h1 key={index}>
                <h1 key={v4()}>
                  {`${index + 1}) Fact : ${fact}`}
                </h1>
              ))}
            </GrayBox>
          </>
        )}
        <GrayBox>
          <Button name={"GET MORE INFO"} onButtonClick={getCatFact} />
          {catArray.length > 0 && (
            <Button name={"DELETE ALL DATA"} onButtonClick={deleteAllData} />
          )}
        </GrayBox>        
      </>
    </Lesson13Component>
  );
}

export default Lesson13;
