import { Link, useNavigate } from "react-router-dom";
import { FormEvent, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Button from "../../shared/UI/Button/Button";
import Heading from "../../shared/UI/Heading/Heading";
import Input from "../../shared/UI/Input/Input";

import { AppDispatch, RootState } from "../../app/store/store";

import styles from "./Login.module.css";
import { LoginForm } from "./loginType";

import { userActions } from "../../app/store/userSlice/user.slice";
import { login } from "../../app/store/userSlice/userAsyncThunk";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const { jwt, loginErrorMessage } = useSelector((s: RootState) => s.user);

  useEffect(() => {
    if (jwt) {
      navigate("/");
    }
  }, [jwt, navigate]);
  const submit = async (event: FormEvent) => {
    event.preventDefault();

    dispatch(userActions.clearLoginError());
    const target = event.target as typeof event.target & LoginForm;
    const { email, password } = target;
    await sendLogin(email.value, password.value);
  };

  const sendLogin = async (email: string, password: string) => {
    dispatch(login({ email, password }));
  };

  return (
    <div className={styles["login"]}>
      <Heading>Вход</Heading>
      {loginErrorMessage && (
        <div className={styles["error"]}>{loginErrorMessage}</div>
      )}
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
