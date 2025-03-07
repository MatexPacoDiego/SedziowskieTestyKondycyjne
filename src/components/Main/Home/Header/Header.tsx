import styles from "./Header.module.scss";
import pitch from "../../../../assets/webContent/boisko_sedzia.png";
interface HeaderProps {
  isOpen: boolean;
}
function Header({ isOpen }: HeaderProps) {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        {isOpen ? "" : <span className={styles.blur}></span>}
        <h1>
          <span className={styles.strokeText}>Sędziowskie</span> Testy
          Kondycyjne
        </h1>
        <p className={styles.text}>
          Witaj na jedynej w Polsce stronie poświęconej testom kondycyjnym dla
          sędziów piłkarskich! Nasza platforma to kompleksowe źródło wiedzy dla
          arbitrów, którzy chcą skutecznie przygotować się do oficjalnych testów
          wytrzymałościowych i szybkościowych.
        </p>
        <a href="/#tests">
          <button className={styles.headerBtn}>Do Dzieła →</button>
        </a>
      </div>
      <div id="description" className={styles.image}>
        <img src={pitch} alt="boisko" />
        <span id="resp"></span>
      </div>
    </div>
  );
}

export default Header;
