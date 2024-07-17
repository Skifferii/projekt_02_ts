import { LoginFormWrapper, LoginFormTitle, InputsContainer } from "./styles";
import Button from "../Button/Button";
import Input from "../Input/Input";

function LoginForm() {
  return (
    <LoginFormWrapper>
      <LoginFormTitle>Login Form</LoginFormTitle>
      <InputsContainer>
        {/* <Input
          id="email"
          name="user_email"
          label="Email"
          type="email"
          placeholder="Enter your email"
        />
        <Input
          id="password"
          name="user_password"
          label="Password"
          type="password"
          placeholder="Enter your password"
        /> */}
      </InputsContainer>
      <Button name="Login" type="submit" />
    </LoginFormWrapper>
  );
}

export default LoginForm;
