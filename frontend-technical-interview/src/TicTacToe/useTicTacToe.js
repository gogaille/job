import { useCallback, useEffect, useState } from "react";
import { EMPTY_CELL, PLAYER_O, PLAYER_X } from "./constant";
import { resolveTicTacToe } from "./resolveTicTacToe";

const onlyFreeCell = (oneCell) => oneCell !== EMPTY_CELL;

export const useTicTacToe = (boardWidth = 3) => {
  const [cells, setCells] = useState(() =>
    [...new Array(boardWidth ** 2)].map(() => EMPTY_CELL)
  );

  const [activePlayer, setActivePlayer] = useState(() => PLAYER_X);

  const playerSelectCell = useCallback(
    (cellOffset) => {
      setCells((previousCells) => {
        if (previousCells[cellOffset] !== EMPTY_CELL) {
          console.error(
            `The cell is already own by player "${previousCells[cellOffset]}"`
          );
        }

        const newCells = [...previousCells];
        newCells[cellOffset] = activePlayer;

        return newCells;
      });
    },
    [activePlayer]
  );

  const [gameResult, setGameResult] = useState({ winner: null });

  useEffect(() => {
    if (cells.filter(onlyFreeCell).length % 2 === 0) {
      setActivePlayer(PLAYER_X);
    } else {
      setActivePlayer(PLAYER_O);
    }
  }, [cells]);

  useEffect(() => {
    const { winner } = resolveTicTacToe(cells, boardWidth);
    if (winner) {
      setGameResult({ winner });
    }
  }, [cells, boardWidth]);

  return { cells, playerSelectCell, gameResult, activePlayer };
};
