import logo from "../../assets/logo/logo.svg";
import github from "../../assets/footer/github.svg";
import instagram from "../../assets/footer/ig.svg";
import facebook from "../../assets/footer/fb.svg";
import styles from "./Footer.module.scss";

export default function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.cont}>
        <div className={styles.webLogo}>
          <img src={logo} alt="logo" />
          <h5>Polub też nas na socialmediach: </h5>
          <div className={styles.socials}>
            <a href="#">
              <img src={instagram} alt="instagram" />
            </a>
            <a href="https://github.com/MatexPacoDiego" target="_blank">
              <img src={github} alt="github" />
            </a>
            <a href="#">
              <img src={facebook} alt="facebook" />
            </a>
          </div>
        </div>
        <div className={styles.nav}>
          <h6>Nawigacja</h6>
          <ul>
            <li>
              <a href="/#">Strona Główna</a>
            </li>
            <li>
              <a href="/#description">Co Znajdziesz na stronie</a>
            </li>
            <li>
              <a href="/#tests">Testy Kondycyjne</a>
            </li>
            <li>
              <a href="/#footer">O nas</a>
            </li>
          </ul>
        </div>
        <div className={styles.documents}>
          <h6>Dokumenty</h6>
          <ul>
            <li>
              <a href="#">Polityka Prywatności</a>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.copy}>
        <p>MateuszUrbański &copy; 2025. Wszelkie prawa zastrzeżone.</p>
      </div>
    </div>
  );
}
