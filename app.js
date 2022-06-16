//ownerproof-2165400-1655367374-7e63e2d8e20c
const { coodinates, foldings } = require('./inputReaderUtil');

console.log("coordinates:", coodinates, "foldings:", foldings);
part1();
part2();

function part1() {
  const dots = [...coodinates];
  const nextDots = [];
  for (const folding of foldings) {
    dots.forEach(dot => {
      if (dot[folding.axis] > folding.lineValue) {
        dot[folding.axis] = (dot[folding.axis] - folding.lineValue) * -1 + folding.lineValue
      }
      nextDots.push(dot);
    })
    break;
  }
  const dotsWithNoDuplicates = new Set(dots.map(dot => `${dot.x},${dot.y}`));
  console.log("Amount of dots after first folding:", dotsWithNoDuplicates.size)
}

function part2() {
  const dots = [...coodinates];
  const nextDots = [];
  for (const folding of foldings) {
    dots.forEach(dot => {
      if (dot[folding.axis] > folding.lineValue) {
        dot[folding.axis] = (dot[folding.axis] - folding.lineValue) * -1 + folding.lineValue
      }
      nextDots.push(dot);
    })
  }
  const dotsWithNoDuplicatesSet = new Set(dots.map(dot => `${dot.x},${dot.y}`))
  const commaseperatedCoordinatesArray = [...dotsWithNoDuplicatesSet].map(dot => dot.split(','))

  const maxX = Math.max(...commaseperatedCoordinatesArray.map(dot => dot[0]));
  const maxY = Math.max(...commaseperatedCoordinatesArray.map(dot => dot[1]));

  for (let y = 0; y <= maxY; y++) {
    let theFoldedPaper = '';
    for (let x = 0; x <= maxX; x++) {
      const key = `${x},${y}`
      if (dotsWithNoDuplicatesSet.has(key)) {
        theFoldedPaper += "#";
      } else {
        theFoldedPaper += ".";
      }
    }
    console.log(theFoldedPaper);
  }
}

