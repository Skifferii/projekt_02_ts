import { Homework08Component } from "./styles";
import Button from "../../components/Button/Button";

function Homework08() {
  return (
    <Homework08Component>
      <Button
        disabled={false}
        name="Simple button"
        onButtonClick={() => console.log("test")}
      />
      <Button
        disabled={true}
        name="Disabled button"
        onButtonClick={() => console.log("WWWWWst")}
      />
    </Homework08Component>
  );
}

export default Homework08;
