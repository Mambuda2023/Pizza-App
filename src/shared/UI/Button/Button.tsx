import styles from "./Button.module.css";
import cn from "classnames";
import { ButtonProps } from "./ButtonProps";
const Button = ({
  children,
  className,
  appearance = "small",
  ...props
}: ButtonProps) => {
  return (
    <button
      className={cn(styles["button"], styles["accent"], className, {
        [styles["small"]]: appearance == "small",
        [styles["big"]]: appearance == "small"
      })}
      {...props}
    >
      {children}
    </button>
  );
};
export default Button;
