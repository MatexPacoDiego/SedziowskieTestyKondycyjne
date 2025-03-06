import styles from "./TestRules.module.scss";

interface TestRulesProps {
  run: number;
  walk: number;
}
export default function TestRules({ run, walk }: TestRulesProps) {
  return (
    <div className={styles.container}>
      <h2>Uwaga!</h2>
      <div className={styles.rules}>
        <div className={styles.ruleParagraf}>
          {" "}
          <p>
            Na początku usłyszysz pojedynczy gwizdek oznaczający rozpoczęcie{" "}
            <b>75m </b>
            biegu.
          </p>
        </div>
        <div className={styles.ruleParagraf}>
          <p>
            Następnie usłyszysz pojedyńczy beep oznaczający że do końca biegu
            zostało <b>10s</b>.
          </p>
        </div>
        <div className={styles.ruleParagraf}>
          {" "}
          <p>
            Jeśli do końca biegu zostanie <b>5s</b> usłyszysz podwójny beep.
          </p>
        </div>
        <div className={styles.ruleParagraf}>
          {" "}
          <p>
            Po upływie <b>{run}s</b> usłyszysz gwizdek kończący bieg i
            rozpoczynający
            <b> 25m </b>
            marszu przez <b>{walk}s</b>.
          </p>
        </div>
        <div className={styles.ruleParagraf}>
          <p>
            Zasada dźwiękowa jest taka sama jak podczas biegu. Cały test to
            <b> 40 powtórzeń</b>, czyli <b>10 kółek</b>.
          </p>
        </div>
      </div>
      <div className={styles.blurArea}>
        <span className={styles.blur}></span>
      </div>
    </div>
  );
}
