import { css } from "@emotion/react";
import styled from "@emotion/styled";

const fleCommonStyles = css`
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Lesson09Component = styled.div`
  ${fleCommonStyles}
  //display: flex;
  //align-items: center;
  //justify-content: center;
  gap: 30px;
  flex: 1;
  flex-direction: column;
`;

export const GreenLittleBox = styled.div`
 ${fleCommonStyles}
  //display: flex;
  //align-items: center;
  //justify-content: center;
  //gap: 10px;
  min-width: 200px;
  min-height: 200px;
  background: #90ea71;
  padding: 20px;
  font-size: 12px;
`;
export const BlueBigBox = styled.div`
 ${fleCommonStyles}
  //display: flex;
  //align-items: center;
  //justify-content: center;
  //gap: 10px;
  min-width: 400px;
  min-height: 400px;
  background: #71abeb;
  padding: 30px;
  font-size: 20px;
`;
