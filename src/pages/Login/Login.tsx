import { Link, useNavigate } from "react-router-dom";
import { FormEvent, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Button from "../../shared/UI/Button/Button";
import Heading from "../../shared/UI/Heading/Heading";
import Input from "../../shared/UI/Input/Input";

import { AppDispatch, RootState } from "../../app/store/store";
import { login } from "../../app/store/userSlice/userAsyncThunk";

import styles from "./Login.module.css";
import { LoginForm } from "./loginType";
import axios, { AxiosError } from "axios";
import LoginResponse from "../Auth/auth.interface";
import { PREFIX } from "../../app/api/helpers/helpers";
import { userActions } from "../../app/store/userSlice/user.slice";

const Login = () => {
  const [error, setError] = useState<string | null>();
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();

  const submit = async (event: FormEvent) => {
    event.preventDefault();

    setError(null);
    const target = event.target as typeof event.target & LoginForm;
    const { email, password } = target;
    await sendLogin(email.value, password.value);
  };

  const sendLogin = async (email: string, password: string) => {
    try {
      const { data } = await axios.post<LoginResponse>(`${PREFIX}/auth/login`, {
        email,
        password,
      });
      dispatch(userActions.addJwt(data.access_token));
      navigate("/");
    } catch (e) {
      if (e instanceof AxiosError) {
        setError(e.response?.data.message);
      }
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
