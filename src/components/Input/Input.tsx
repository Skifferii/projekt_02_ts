import {InputContainer, Label, InputElement} from"./styles";
import { InputProps } from "./types";

function Input({ label, type='text', name, placeholder, id, value, onChange }: InputProps) {
  return (
    <InputContainer>
      <Label htmlFor={id}>{label}</Label>
      <InputElement
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </InputContainer>
  );
}

export default Input;
