import styled from "@emotion/styled";

interface ButtonComponentProps {
  disabled: boolean
}

export const ButtonComponent = styled.button<ButtonComponentProps>`
  width: 100%;
  height: 70px;
  outline: none;
  border: none;
  padding: 20px;
  /* background: #1f27f5; */
  background: ${({disabled }) => disabled ? 'grey' : '#1f27f5'};
  border-radius: 4px;
  color: white;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
`