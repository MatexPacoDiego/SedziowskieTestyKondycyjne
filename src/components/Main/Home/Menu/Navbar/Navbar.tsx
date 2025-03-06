import styles from "./Navbar.module.scss";
import logo from "../../../../../assets/logo/logo.svg";

interface NavbarProps {
  onSwitchMenu: () => void;
}

function Navbar({ onSwitchMenu }: NavbarProps) {
  return (
    <nav className={styles.navbar}>
      <div className={styles.webLogo}>
        <img src={logo} alt="logo" />
      </div>
      <div className={styles.nav}>
        <div className={styles.menu}>
          <a href="#">Strona Główna</a>
          <a href="#">Co znajdziesz na stronie</a>
          <a href="#">Testy Kondycyjne</a>
          <a href="#">O Nas</a>
        </div>
      </div>
      <div className={styles.menuSwitch}>
        <button className={styles.menuBtn} onClick={onSwitchMenu}>
          ☰
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
