import { useNavigate } from "react-router-dom";
import Button from "../../shared/UI/Button/Button";
import styles from "./Success.module.css";

export const Success = () => {
  const navigate = useNavigate();
  return (
    <div className={styles["success"]}>
      <p className={styles["text"]}>Ваш заказ успешно оформлен</p>
      <Button appearance="big" onClick={() => navigate("/")}>
        Сделать новый
      </Button>
    </div>
  );
};
