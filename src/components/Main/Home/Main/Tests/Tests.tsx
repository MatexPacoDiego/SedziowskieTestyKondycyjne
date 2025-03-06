import styles from "./Tests.module.scss";
import check from "../../../../../assets/webContent/check.svg";
import { Link } from "react-router-dom";

export default function Tests() {
  return (
    <div className={styles.container}>
      <div className={styles.blurArea}>
        <span className={styles.blur}></span>
      </div>
      <div className={styles.header}>
        <h1>Sędziowskie Testy Kondycyjne</h1>{" "}
        <h5>
          Jedyna strona w całości dedykowana kondycyjnemu przygotowaniu sędziów
          piłkarskich. Dzięki naszym materiałom zyskasz przewagę i podejdziesz
          do testów z pewnością siebie!
        </h5>
      </div>
      <div className={styles.boxes}>
        <div className={styles.box}>
          <h2>
            <span>B-A Klasa</span>
          </h2>
          <ul>
            <li>
              <img src={check} alt="Zaznaczenie" />
              75m biegu w 17 sekund
            </li>
            <li>
              <img src={check} alt="Zaznaczenie" />
              25m marszu w 24 sekundy
            </li>
          </ul>

          <Link to="/B_AKlasa">
            <button>Przejdź Do Testu →</button>
          </Link>
        </div>
        <div className={styles.box}>
          <h2>
            {" "}
            <span>Okręgowa-IV Liga</span>
          </h2>
          <ul>
            <li>
              <img src={check} alt="Zaznaczenie" />
              75m biegu w 15 sekund
            </li>
            <li>
              <img src={check} alt="Zaznaczenie" />
              25m marszu w 20 sekundy
            </li>
          </ul>
          <Link to="/Okregowa_IVLiga">
            <button>Przejdź Do Testu →</button>
          </Link>
        </div>
        <div className={styles.box}>
          <h2>
            {" "}
            <span>III-I Liga</span>
          </h2>
          <ul>
            <li>
              <img src={check} alt="Zaznaczenie" />
              75m biegu w 15 sekund
            </li>
            <li>
              <img src={check} alt="Zaznaczenie" />
              25m marszu w 18 sekundy
            </li>
          </ul>
          <Link to="/III_ILiga">
            <button>Przejdź Do Testu →</button>
          </Link>
        </div>
        <div className={styles.box}>
          <h2>
            {" "}
            <span>Ekstraklasa</span>
          </h2>
          <ul>
            <li>
              <img src={check} alt="Zaznaczenie" />
              75m biegu w 15 sekund
            </li>
            <li>
              <img src={check} alt="Zaznaczenie" />
              25m marszu w 18 sekundy
            </li>
          </ul>
          <Link to="/Ekstraklasa">
            <button id="footer">Przejdź Do Testu →</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
