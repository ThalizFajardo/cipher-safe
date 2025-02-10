import styles from "./Button.module.css";
import React, { CSSProperties } from "react";

interface Props {
  onClick: () => void;
  type: "primary" | "secondary";
  width?: string;
  height?: string;
  children: React.ReactNode;
  size?: "small" | "medium" | "large";
  style?: CSSProperties;
  btnType?: "button" | "submit";
  loading?: boolean;
  disabled?: boolean;
}

export const Button = ({
  onClick,
  type,
  width,
  height,
  children,
  size = "medium",
  style,
  btnType = "button",
  loading = false,
  disabled = false,
}: Props) => {
  const handleClick = () => {
    if (!loading && !disabled) {
      onClick();
    }
  };

  const sizeStyles: CSSProperties = {
    small: { height: "32px", minWidth: "32px" },
    medium: { height: "40px", minWidth: "80px" },
    large: { height: "48px", minWidth: "120px" },
  }[size];

  const apliedStyles: CSSProperties = {
    ...sizeStyles,
    ...(width && { width }),
    ...(height && { height }),
    flex: "none",
    ...style,
  };

  return (
    <button
      type={btnType}
      onClick={handleClick}
      className={`${styles.button} ${styles[type]} ${
        disabled || loading ? styles.disabled : ""
      }`}
      style={apliedStyles}
      disabled={disabled || loading}
    >
      {children}
    </button>
  );
};
