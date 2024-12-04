import { Link, useNavigate } from "react-router-dom";
import { FormEvent, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Button from "../../shared/UI/Button/Button";
import Heading from "../../shared/UI/Heading/Heading";
import Input from "../../shared/UI/Input/Input";

import { AppDispatch, RootState } from "../../app/store/store";

import { userActions } from "../../app/store/userSlice/user.slice";

import styles from "./Register.module.css";
import { RegisterForm } from "./registerType";
import { register } from "../../app/store/registerSlice/registerAsyncThunk";

const Register = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const { jwt, registerErrorMessage } = useSelector((s: RootState) => s.user);

  useEffect(() => {
    if (jwt) {
      navigate("/");
    }
  }, [jwt, navigate]);
  const submit = async (event: FormEvent) => {
    event.preventDefault();

    dispatch(userActions.clearRegisterError());
    const target = event.target as typeof event.target & RegisterForm;
    const { email, password, name } = target;
    dispatch(
      register({
        email: email.value,
        password: password.value,
        name: name.value,
      })
    );
  };

  return (
    <div className={styles["login"]}>
      <Heading>Регистрация</Heading>
      {registerErrorMessage && (
        <div className={styles["error"]}>{registerErrorMessage}</div>
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
        <div className={styles["field"]}>
          <label htmlFor="name">Ваше имя</label>
          <Input name="name" id="name" placeholder="Имя" />
        </div>
        <Button appearance="big">Зарегистроваться</Button>
      </form>

      <div className={styles["links"]}>
        <div>Есть аккаунта?</div>
        <Link to="/auth/login">Войти</Link>
      </div>
    </div>
  );
};

export default Register;
