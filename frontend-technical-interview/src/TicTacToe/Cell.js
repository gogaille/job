import React, { useMemo } from "react";
import { EMPTY_CELL } from "./constant";

export const Cell = ({ value, onClick, clickable = true }) => {
  const isAlreadyPlayed = useMemo(() => EMPTY_CELL !== value, [value]);

  return (
    <div
      disabled={isAlreadyPlayed}
      onClick={() => !isAlreadyPlayed && clickable && onClick()}
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#34495e",
        color: "#f8f8f3",
        fontSize: "4em",
        fontWeight: "bold",
        fontFamily: "Helvetica, sans-serif",
        cursor: isAlreadyPlayed || !clickable ? "default" : "pointer"
      }}
    >
      {isAlreadyPlayed ? value : ""}
    </div>
  );
};
