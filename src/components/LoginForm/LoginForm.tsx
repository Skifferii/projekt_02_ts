import "./styles.css";
import Button from "../Button/Button";
import Input from "../Input/Input";

function LoginForm() {
  return (
    <form className="login-form-wrapper">
      <div className="login-form-title">Login Form</div>
      <div className="inputs-container">
        <Input
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
        />
      </div>
      <Button name="Login" type="submit" />
    </form>
  );
}

export default LoginForm;
