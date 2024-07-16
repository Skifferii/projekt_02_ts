import {
  FeedbackContainer,
  FeedbackResultContainer,
  LikeDislikeContainer,
  Result
} from "./styles";
import Button from "../Button/Button";
import { useState } from "react";

function Feedback() {
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
    <FeedbackContainer>
      <FeedbackResultContainer>
        <LikeDislikeContainer>
          <Result>{like}</Result>
          <Button name="LIKE" onButtonClick={addLike} />
        </LikeDislikeContainer>
        <LikeDislikeContainer>
          <Button name="DISLIKE" onButtonClick={addDislike} />
          <Result>{dislike}</Result>
        </LikeDislikeContainer>
      </FeedbackResultContainer>
      <Button name="RESET RESULTS" onButtonClick={resetResults} />
    </FeedbackContainer>
  );
}

export default Feedback;