export const swap = (array, index1, index2) => {
  if (
    index1 < 0 || index1 >= array.length ||
    index2 < 0 || index2 >= array.length ||
    index1 === index2
  ) return array;

  const updated = [...array];
  [updated[index1], updated[index2]] = [updated[index2], updated[index1]];
  return updated;
};
