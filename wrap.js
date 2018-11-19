const longestLength = string => {
  const wordLengths = string.split(' ').map(word => word.length);

  const maxLength = Math.max(...wordLengths);
  return maxLength;
};

const wrap = (string, colNum) => {
  if (!string) return string;

  if (colNum > longestLength(string)) {
    if (colNum > string.length) return string;
  }
  return 'Try a longer column number';
};

module.exports = wrap;
