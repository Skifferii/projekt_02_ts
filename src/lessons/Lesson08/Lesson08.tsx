// terminal 
//npm install --save @emotion/react
// npm install --save @emotion/styled
import "./styles.css";

function Lesson08() {

  const textStyleOdj = { 
    fontSize: "24px", 
    color: "#f3eaf2" };

  return (
    //1 способ - отдельный css файл
    <div className="lesson08-component">
      
      {/* 2 способ - inline стили */}
      <p style={textStyleOdj}>
        Inline styles example
      </p>
      <div style={textStyleOdj}>
        Inline styles example srcond element
      </div>
    </div>
  );
}

export default Lesson08;
