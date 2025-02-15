import styles from "./Header.module.css";
import { ProfileInfo } from "../profile-info/ProfileInfo";

export const Header = () => {
  return (
    <header className={styles.header}>
      <h2>ChipherSafe</h2>
      <ProfileInfo />
    </header>
  );
};
