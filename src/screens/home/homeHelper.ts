export const extractSubpages = (
  dataLength: number,
  divisor: number,
  lastNumber: number,
  isNext: boolean
): number[] => {
  const subPages = Math.ceil(dataLength / divisor);

  const nums = [];
  let lastElement = lastNumber;
  for (let i = subPages; i > 0; i--) {
    lastElement = isNext ? lastElement + 1 : lastElement - 1;
    nums.push(lastElement);
  }

  if (!isNext) {
    nums.reverse();
  }

  return nums;
};

export const getPieceFromArray = (
  array: any[],
  startIndex: number,
  piecesSize: number
) => {
  return array.slice(startIndex * piecesSize, (startIndex + 1) * piecesSize);
};
