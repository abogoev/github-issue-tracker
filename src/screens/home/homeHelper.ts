export const extractSubpages = (
  dataLength: number,
  divisor: number,
  page: number
): number[] => {
  const subPages = Math.ceil(dataLength / divisor);
  const nums = Array.from(
    { length: subPages },
    (_, i) => i + 1 + subPages * (page - 1)
  );

  return nums;
};

export const getPieceFromArray = (
  array: any[],
  pieceIndex: number,
  piecesSize: number
) => {
  return array.slice(pieceIndex * piecesSize, (pieceIndex + 1) * piecesSize);
};
