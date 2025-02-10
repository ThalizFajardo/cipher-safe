/*---- INIT STYLES -----*/
import styles from "./AuthLayout.module.css";
/*---- END STYLES -----*/

import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export const AuthLayout = ({ children }: Props) => {
  return (
    <main className={styles.container}>
      <section>
        <h2>CipherSafe</h2>
      </section>
      <section>{children}</section>
    </main>
  );
};
