const fs = require('fs');

const [rawCoordinates, rawFoldings] = fs
  .readFileSync('realInput.txt', { encoding: 'utf-8' })
  .toString()
  .trim()
  .split('\n\n');

const coodinates = rawCoordinates
  .split('\n')
  .map(coordinateLine => {
    const coordinateLineAsNumbers = coordinateLine.split(',').map(Number);
    const coordinateObject = {'x': coordinateLineAsNumbers[0], 'y': coordinateLineAsNumbers[1]}
    return coordinateObject
  });

const foldings = rawFoldings
  .split('\n')
  .map(foldingLine => {
    let [axis, lineValue] = foldingLine.replace('fold along ', '').split('=');
    lineValue = parseInt(lineValue, 10);
    return {axis, lineValue}
  });

module.exports = {
  coodinates,
  foldings
}