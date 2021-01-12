import React from "react";

export const Board = ({ children }) => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplate: "repeat(3, 1fr) / repeat(3, 1fr)",
        gridGap: "12px",
        width: "300px",
        height: "300px",
        padding: "12px",
        backgroundColor: "#2c3e50",
        margin: "0 auto"
      }}
    >
      {children}
    </div>
  );
};
