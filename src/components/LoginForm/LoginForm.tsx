import { useFormik } from 'formik';

import { LoginFormWrapper, LoginFormTitle, InputsContainer } from "./styles";
import Button from "../Button/Button";
import Input from "../Input/Input";
import { LoginFormValues, LOGIN_FORM_NAME } from './types';

function LoginForm() {
  const formik = useFormik({
    initialValues: {
      [LOGIN_FORM_NAME.EMAIL]: '',
      [LOGIN_FORM_NAME.PASSWORD]: ''
    } as LoginFormValues,
    onSubmit: (values: LoginFormValues) => {
      console.table(values)
    }
  })

  console.log(formik)

  return (
    <LoginFormWrapper onSubmit={formik.handleSubmit}>
      <LoginFormTitle>Login Form</LoginFormTitle>
      <InputsContainer>
        <Input
          id="email"
          name={LOGIN_FORM_NAME.EMAIL}
          label="Email"
          type="email"
          placeholder="Enter your email"
          value={formik.values[LOGIN_FORM_NAME.EMAIL]}
          onChange={formik.handleChange}
        />
        <Input
          id="password"
          name={LOGIN_FORM_NAME.PASSWORD}
          label="Password"
          type="password"
          placeholder="Enter your password"
          value={formik.values[LOGIN_FORM_NAME.PASSWORD]}
          onChange={formik.handleChange}
        />
      </InputsContainer>
      <Button name="Login" type="submit" />
    </LoginFormWrapper>
  );
}

export default LoginForm;
