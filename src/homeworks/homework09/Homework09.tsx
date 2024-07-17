import { useState } from "react";
import Feedback from "../../components/Feedback/Feedback";
import { Homework09Component } from "./styles";
import ResultBlock from "../../components/ResultBlock/ResultBlock";

function Homework09() {
  const [like, setLike] = useState<number>(0);
  const [dislike, setDislike] = useState<number>(0);

  const addLike = (): void => {
    setLike((prevV) => prevV + 1);
  };

  const addDislike = (): void => {
    setDislike((prevV) => {
      return prevV + 1;
    });
  };

  const resetResults = (): void => {
    setLike(0);
    setDislike(0);
  };

  return (
    <Homework09Component>
      <Feedback
        like={like}
        dislike={dislike}
        addLike={addLike}
        addDislike={addDislike}
        resetResults={resetResults}
      />
      <ResultBlock resultName="likes" result={like}/>
      <ResultBlock resultName="dislikes" result={dislike}/>
    </Homework09Component>
  )
}

export default Homework09