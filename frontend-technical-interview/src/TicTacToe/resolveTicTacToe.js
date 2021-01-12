import { EMPTY_CELL } from "./constant";

const generateWinningCombinations = (boardWidth) => {
  const winningRows = [...new Array(boardWidth)].map((v, offset) => {
    const rowStart = offset * boardWidth;
    const rowEnd = rowStart + boardWidth;

    const rowCoordinates = [];
    for (
      let oneCoordinate = rowStart;
      oneCoordinate < rowEnd;
      oneCoordinate++
    ) {
      rowCoordinates.push(oneCoordinate);
    }

    return rowCoordinates;
  });

  const winningColumns = [...new Array(boardWidth)].map((v, offset) => {
    const columStart = offset;

    const columnsCoordinates = [];
    for (let delta = 0; delta < boardWidth; delta++) {
      columnsCoordinates.push(columStart + delta * boardWidth);
    }

    return columnsCoordinates;
  });

  // TODO: Implement diagonal cases
  const winningDiagonals = [];

  return [...winningRows, ...winningColumns, ...winningDiagonals];
};

/**
 *
 * @param {Array} cells
 * @param {number} boardWidth
 */
export const resolveTicTacToe = (cells, boardWidth) => {
  const winningCombinations = generateWinningCombinations(boardWidth);

  let winner = null;
  winningCombinations.forEach((oneWinningCombination) => {
    const offsetOfTheFirstWinningValue = oneWinningCombination[0];
    const winningValue = cells[offsetOfTheFirstWinningValue];

    let isWinning = true;
    oneWinningCombination.forEach((offset) => {
      const currentCellValue = cells[offset];

      if (
        currentCellValue !== winningValue ||
        currentCellValue === EMPTY_CELL
      ) {
        isWinning = false;
        return false;
      }
    });

    if (isWinning) {
      winner = winningValue;
      return false;
    }
  });

  return {
    winner
  };
};
