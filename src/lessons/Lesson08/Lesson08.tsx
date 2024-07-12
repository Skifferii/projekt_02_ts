
import "./styles.css";
import { BoxInfo,ButtonStyledComponent} from "./styles";

function Lesson08() {
  const textStyleOdj = {
    fontSize: "24px",
    color: "#f3eaf2",
  };

  return (
    //1 способ - отдельный css файл
    <div className="lesson08-component">
      {/* 2 способ - inline стили */}
      <p style={textStyleOdj}>Inline styles example</p>
      <div style={textStyleOdj}>Inline styles example srcond element</div>

      <BoxInfo> My first styled component</BoxInfo>
      <ButtonStyledComponent>Custom button</ButtonStyledComponent>
      <ButtonStyledComponent main>Custom button main</ButtonStyledComponent>
      <ButtonStyledComponent close >Custom button main</ButtonStyledComponent>

      
      
    </div>
  );
}

export default Lesson08;

// terminal
//npm install --save @emotion/react
// npm install --save @emotion/styled