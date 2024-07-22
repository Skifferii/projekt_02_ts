import styled from "@emotion/styled";

interface ButtonComponentProps {
  disabled: boolean
}

export const ButtonComponent = styled.button<ButtonComponentProps>`
  margin-top: 10px;
  width: 100%;
  height: 70px;
  outline: none;
  border: 10p;
  padding: 10px;
  /* background: #1f27f5; */
  background: ${({disabled }) => disabled ? '#AEAEAE' : '#565656'};
  border-radius: 4px;
  color: white;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
`