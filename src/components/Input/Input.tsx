import {InputContainer, Label, InputElement} from"./styles";
import { InputProps } from "./types";

function Input({ label, type, name, placeholder, id }: InputProps) {
  return (
    <InputContainer>
      <Label htmlFor={id}>{label}</Label>
      <InputElement
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
      />
    </InputContainer>
  );
}

export default Input;