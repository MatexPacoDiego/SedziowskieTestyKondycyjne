import styles from "./NavBar.module.scss";
import logo from "../../../../../../assets/logo/logo.svg";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.webLogo}>
        <img src={logo} alt="logo" />
      </div>

      <div className={styles.menuSwitch}>
        <Link to="/">
          <button className={styles.menuBtn}>← Wróć Do Strony Głównej</button>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
