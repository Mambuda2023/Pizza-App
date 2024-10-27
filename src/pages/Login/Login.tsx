import { Link } from "react-router-dom";
import Button from "../../shared/UI/Button/Button";
import Heading from "../../shared/UI/Heading/Heading";
import Input from "../../shared/UI/Input/Input";
import styles from "./Login.module.css";
import { FormEvent } from "react";
const Login = () => {
  const submit = (event: FormEvent) => {
    event.preventDefault();
    console.log(event);
  };
  return (
    <div className={styles["login"]}>
      <Heading>Вход</Heading>
      <form action="" className={styles["form"]} onSubmit={submit}>
        <div className={styles["field"]}>
          <label htmlFor="email">Ваш email</label>
          <Input type="text" name="email" placeholder="Email" id="email" />
        </div>
        <div className={styles["field"]}>
          <label htmlFor="password">Ваш пароль</label>
          <Input
            type="password"
            name="password"
            id="password"
            placeholder="Пароль"
          />
        </div>
        <Button appearance="big">Вход</Button>
      </form>

      <div className={styles["links"]}>
        <div>Нет аккаунта?</div>
        <Link to="/auth/registration">Зарегистроваться</Link>
      </div>
    </div>
  );
};

export default Login;
