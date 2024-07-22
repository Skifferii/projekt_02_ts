import styled from "@emotion/styled";
import SpinerGif from "../../components/SpinnerCat/SpinerCat.gif";

export const SpinnerWrapperCat = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
 

  .spinner {
    width: 80px; /* Размер спиннера */
    height: 60px; /* Размер спиннера */
    background-image: url( "src\components\Spinner\SpinerCat.gif"); /* Путь к GIF-файлу */
    background-size: cover; /* Обеспечивает правильное масштабирование изображения */
    background-repeat: no-repeat; /* Не повторять изображение */
    background-position: center; /* Центрировать изображение */
  }
`;



