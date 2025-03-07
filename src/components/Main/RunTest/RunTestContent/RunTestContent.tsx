import Navbar from "./Menu/NavBar/NavBar";
import styles from "./RunTestContent.module.scss";
import TestTimer from "./Main/TestTimer/TestTimer";
import TestRules from "./Main/TestRules/TestRules";
import ScrollToTop from "../../../ScrollToTop/ScrollToTop";

interface RunTestContentProps {
  run: number;
  walk: number;
  klas: string;
}
export default function RunTestContent({
  run,
  walk,
  klas,
}: RunTestContentProps) {
  return (
    <>
      <ScrollToTop />

      <Navbar />
      <div className={styles.container}>
        <TestTimer run={run} walk={walk} klas={klas} />
        <TestRules run={run} walk={walk} />
      </div>
    </>
  );
}
