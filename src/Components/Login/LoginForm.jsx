import React from "react";
import { Link } from "react-router-dom";
import Input from "../Forms/Input";
import Button from "../Forms/Button";
import useForm from "../../Hooks/useForm";
import { TOKEN_POST, USER_GET } from "../../api";
import { UserContext } from "../../UserContext";

const LoginForm = () => {
  const userName = useForm();
  const userPassword = useForm();

  const { userLogin } = React.useContext(UserContext);

  async function handleSubmit(event) {
    event.preventDefault();

    if (userName.validate() && userPassword.validate()) {
      userLogin(userName.value, userPassword.value)
    }
  }

  return (
    <section>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <Input label="Usuário" type="text" name="username" {...userName} />
        <Input
          label="Senha"
          type="password"
          name="password"
          {...userPassword}
        />
        <Button innerText="Entrar" />
      </form>
      <Link to="/login/criar">Cadastro</Link>
    </section>
  );
};

export default LoginForm;
