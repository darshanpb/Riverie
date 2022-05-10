import React from "react";
import "./typography.css";

export interface TypographyProps {
  primary: Boolean;
  children: string;
}
const Typography = ({ primary, children }: TypographyProps) => {
  const mode = primary
    ? "riverie-typography-primary"
    : "riverie-typography-secondary";
  return <h3 className={["riverie-typography", mode].join(" ")}>{children}</h3>;
};

export default Typography;
