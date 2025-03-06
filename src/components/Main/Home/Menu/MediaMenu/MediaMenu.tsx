import styles from "./MediaMenu.module.scss";

interface MediaMenuProps {
  isOpen: boolean;
  onSwitchMenu: () => void;
}

function MediaMenu({ isOpen, onSwitchMenu }: MediaMenuProps) {
  return (
    <div className={`${styles.menu} ${isOpen ? styles.menuShow : ""}`}>
      <div className={styles.menuContent}>
        <div className={styles.btnClose}>
          <button onClick={onSwitchMenu}>✖</button>
        </div>
        <span className={styles.blur}></span>
        <ul>
          <li>
            <a href="#">Strona Główna</a>
          </li>
          <li>
            <a href="#description">Co Znajdziesz Na Stronie</a>
          </li>
          <li>
            <a href="#tests">Testy Kondycyjne</a>
          </li>
          <li>
            <a href="#footer">O Nas</a>
          </li>{" "}
        </ul>{" "}
      </div>
      <span className={styles.blur}></span>
    </div>
  );
}

export default MediaMenu;
