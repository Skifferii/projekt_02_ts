import styled from "@emotion/styled";

export const SpinnerWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  //height: 100%; /* Настройте высоту контейнера по необходимости */

   .spinner {
    border: 8px solid #f3f3f3; /* Цвет фона спиннера */
     border-top: 8px solid #3498db; /* Цвет верхней части спиннера */
     border-radius: 50%;
     width: 50px; /* Размер спиннера */
     height: 50px; /* Размер спиннера */
     animation: spin 1s linear infinite;
   }
   @keyframes spin {
     0% { transform: rotate(0deg); }
     100% { transform: rotate(360deg); }
   }
 `;


