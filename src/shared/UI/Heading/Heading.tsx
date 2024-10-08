import { HeadingProps } from "./HeadingProps";
import cn from "classnames";
import styles from "./Heading.module.css";
const Heading = ({ children, className, ...props }: HeadingProps) => {
  return (
    <h1 className={cn(className, styles["h1"])} {...props}>
      {children}
    </h1>
  );
};
export default Heading;
