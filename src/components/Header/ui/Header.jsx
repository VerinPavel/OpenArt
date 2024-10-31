import styles from "./Header.module.scss";

import Burger from "../../Burger/ui/Burger";

import { User } from "../../User/ui/User";
import { useHeaderActive } from "../../../store/HeaderActive";
import { NavLink } from "react-router-dom";

const Header = () => {
  const headerState = useHeaderActive();
  const { headerActive } = headerState;

  return headerActive ? (
    <header className={styles.header}>
      <div className={styles.wrap}>
        <div className={styles.logoSection}>
          <Burger />
          <NavLink to={"/"} style={{ textDecoration: "none", color: "white" }}>
            <p className={styles.logo}>RRGroup</p>
          </NavLink>
        </div>
        <User />
      </div>
    </header>
  ) : null;
};

export { Header };
