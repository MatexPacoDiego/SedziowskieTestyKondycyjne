import styles from "./Description.module.scss";
import tips from "../../../../../assets/webContent/webInf/tips.svg";
import audio from "../../../../../assets/webContent/webInf/audio.svg";
import task from "../../../../../assets/webContent/webInf/task.svg";
import rules from "../../../../../assets/webContent/webInf/rule.svg";
export default function Description() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>Na Stronie Znajdziesz</h1>
      </div>
      <div className={styles.boxes}>
        <div className={styles.box}>
          <div className={styles.miniLogo}>
            <img src={tips} alt="Podpowiedzi" />
          </div>
          <p>Wskazówki dla sędziów na każdym poziomie rozgrywek</p>
        </div>
        <div className={styles.box}>
          <div className={styles.miniLogo}>
            <img src={audio} alt="audio" />
          </div>
          <p>Audio i materiały edukacyjne pomagające poprawić wyniki</p>
        </div>
        <div className={styles.box}>
          <div className={styles.miniLogo}>
            <img src={task} alt="zadania" />
          </div>
          <p>Aktualne normy i wytyczne dotyczące testów</p>
        </div>
        <div id="tests" className={styles.box}>
          <div className={styles.miniLogo}>
            <img src={rules} alt="zasady" />
          </div>
          <p>Opisy i zasady testów kondycyjnych FIFA, UEFA i PZPN</p>
        </div>
      </div>
    </div>
  );
}
