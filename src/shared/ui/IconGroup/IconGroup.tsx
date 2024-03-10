import React, { ReactNode } from "react";

interface IconGroupProps {
  children: ReactNode;
}

export const IconGroup: React.FC<IconGroupProps> = ({ children }) => {
  const icons = React.Children.toArray(children);

  return (
    <div style={{ display: "inline-flex", position: "relative" }}>
      {icons.map((icon, index) => (
        <div key={index}>{icon}</div>
      ))}
    </div>
  );
};
