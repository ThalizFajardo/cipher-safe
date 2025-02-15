import styles from "./Card.module.css";
import { IonIcon } from "@ionic/react";
import { mailOutline, starOutline } from "ionicons/icons";
import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
}

export const Card = ({ children }: CardProps) => {
  return <div className={styles.card}>{children}</div>;
};

export const StarBtn = () => {
  return <IonIcon className={styles.starBtn} icon={starOutline} />;
};

interface IconCardProps {
  text: string;
}

export const IconCard = ({ text }: IconCardProps) => {
  return (
    <div className={styles.iconCard}>
      <IonIcon icon={mailOutline} />
      <span>{text}</span>
    </div>
  );
};
