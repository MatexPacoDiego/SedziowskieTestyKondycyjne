import { useRef, useState } from "react";
import styles from "./TestTimer.module.scss";
import whistle from "../../../../../../assets/audio/_pl_sound_gwizdek-sedziego_.mp3";
import beep from "../../../../../../assets/audio/beep-07a.mp3";

interface TestTimerProps {
  run: number;
  walk: number;
  klas: string;
}

export default function TestTimer({ run, walk, klas }: TestTimerProps) {
  const runningRef = useRef<boolean>(false);
  const beepRef = useRef<HTMLAudioElement | null>(null);
  const gwizdekRef = useRef<HTMLAudioElement | null>(null);
  const wynikRef = useRef<HTMLSpanElement | null>(null);
  const powtRef = useRef<HTMLSpanElement | null>(null);
  const [repetitions, setRepetitions] = useState<number>(0);
  const [laps, setLaps] = useState<number>(0);
  const [test, setTest] = useState<boolean>(false);

  const playBeep = () => {
    return new Promise<void>((resolve) => {
      if (beepRef.current) {
        beepRef.current.currentTime = 0;
        beepRef.current.play();
        beepRef.current.onended = () => resolve();
      } else {
        resolve();
      }
    });
  };

  const playDoubleBeep = async () => {
    if (beepRef.current) {
      beepRef.current.currentTime = 0;
      beepRef.current.play();

      await new Promise((r) => setTimeout(r, 300));

      beepRef.current.currentTime = 0;
      beepRef.current.play();
    }
  };

  const playGwizdek = () => {
    return new Promise<void>((resolve) => {
      if (gwizdekRef.current) {
        gwizdekRef.current.currentTime = 0;
        gwizdekRef.current.play();
        gwizdekRef.current.onended = () => resolve();
      } else {
        resolve();
      }
    });
  };

  const stopTest = () => {
    runningRef.current = false;
  };

  const startTest = async () => {
    runningRef.current = true;
    setLaps(0);
    setRepetitions(0);
    const first_one_beep = run - 10;
    const first_double_beep = run - 5;
    const second_one_beep = walk + run - 10;
    const second_double_beep = walk + run - 5;
    const full_time = walk + run;

    for (let i = 1; i <= 40; i++) {
      if (!runningRef.current) return;
      setRepetitions((prev) => prev + 1);

      if (i % 4 === 0 && i !== 0) {
        setLaps((prev) => prev + 1);
      }
      for (let j = 1; j <= full_time; j++) {
        if (!runningRef.current) return;

        if (j === first_double_beep || j === second_double_beep) {
          await playDoubleBeep();
        } else if (j === 1 || j === run) {
          await playGwizdek();
        } else if (j === first_one_beep || j === second_one_beep) {
          await playBeep();
        }

        await new Promise((r) => setTimeout(r, 1000));
      }
    }
  };

  function onSwitchTest() {
    setTest((test) => !test);
  }
  return (
    <div className={styles.container}>
      <span className={styles.blur}></span>
      <h1>Rozpocznij Sędziowskie Test Kondycyjny</h1>
      <h2>
        <span>{klas}</span>
      </h2>
      <div className={styles.timer}>
        {test ? (
          <button
            className={styles.closeBtn}
            onClick={() => {
              onSwitchTest();
              stopTest();
            }}
          >
            STOP
          </button>
        ) : (
          <button
            className={styles.openBtn}
            onClick={() => {
              onSwitchTest();
              startTest();
            }}
          >
            START
          </button>
        )}
        <audio ref={gwizdekRef} src={whistle} preload="auto" />
        <audio ref={beepRef} src={beep} preload="auto" />

        <div className={styles.meter}>
          <p>
            Liczba powtórzeń : <span ref={powtRef}>{repetitions}</span>
          </p>
          <p>
            Liczba okrążeń : <span ref={wynikRef}>{laps}</span>
          </p>
        </div>
      </div>
    </div>
  );
}
