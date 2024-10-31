import { Link } from "react-router-dom";
import Button from "../../shared/UI/Button/Button";
import Heading from "../../shared/UI/Heading/Heading";
import Input from "../../shared/UI/Input/Input";
import styles from "./Login.module.css";
import { FormEvent, useState } from "react";
import axios from "axios";
import { PREFIX } from "../../app/api/helpers/helpers";

export type LoginForm = {
  email: {
    value: string;
  };
  password: {
    value: string;
  };
};
const Login = () => {
  const [error, setError] = useState<string | null>();
  const submit = async (event: FormEvent) => {
    event.preventDefault();
    setError(null);
    const target = event.target as typeof event.target & LoginForm;
    const { email, password } = target;
    await sendLogin(email.value, password.value);
  };
  const sendLogin = async (email: string, password: string) => {
    try {
      const { data } = await axios.post(`${PREFIX}/auth/login`, {
        email,
        password,
      });
      console.log(data);
    } catch (e) {
      if (e instanceof axios.AxiosError) setError(e.response?.data.message);
    }
  };
  return (
    <div className={styles["login"]}>
      <Heading>Вход</Heading>
      {error && <div className={styles["error"]}>{error}</div>}
      <form className={styles["form"]} onSubmit={submit}>
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
