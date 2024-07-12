import "./styles.css";
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
    <div className="feedback-container">
      <div className="feedback-result-container">
        <div className="like-dislike-container">
          <div className="result">{like}</div>
          <Button name="LIKE" onButtonClick={addLike} />
        </div>
        <div className="like-dislike-container">
          <Button name="DISLIKE" onButtonClick={addDislike} />
          <div className="result">{dislike}</div>
        </div>
      </div>
      <Button name="RESET RESULTS" onButtonClick={resetResults} />
    </div>
  );
}

export default Feedback;
