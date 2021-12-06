const inputValues = document.body.textContent
  .split(`\n`)
  .filter((val) => val !== "")
  .map((line) =>
    line.split("->").map((tuple) => tuple.split(",").map((t) => t.trim()))
  );
// consider only horizontal and vertical lines
// only use lines where x1 and x2 or y1 and y2 are the same
// log all coords that have been mapped.
// any time // wait, dont remove vals, 'cause you may double count
// make dictionary of each point as key to a count
// sort by x

const horizontalLines = inputValues.filter((value) => {
  return Number(value[0][1]) === Number(value[1][1]);
});

const verticalLines = inputValues.filter((value) => {
  return Number(value[0][0].trim()) === Number(value[1][0].trim());
});

// get diagonal lines and add them in

const northWestToSouthEastLines = inputValues.filter((value) => {
  return Number(value[0][0]) > Number(value[1][0]);
});

const southWestToNorthEastLines = inputValues.filter((value) => {
  return Number(value[0][0]) < Number(value[1][0]);
});

const dangerMap = {};

horizontalLines.forEach((line) => {
  const smallX = Math.min(Number(line[0][0]), Number(line[1][0]));
  const largeX = Math.max(Number(line[0][0]), Number(line[1][0]));
  for (let x = smallX; x <= largeX; x++) {
    dangerMap[String(x + "," + line[0][1])] =
      1 + !!dangerMap[String(x + "," + line[0][1])];
  }
});

verticalLines.forEach((line) => {
  const smallY = Math.min(Number(line[0][1]), Number(line[1][1]));
  const largeY = Math.max(Number(line[0][1]), Number(line[1][1]));
  for (let y = smallY; y <= largeY; y++) {
    dangerMap[String(line[0][0] + "," + y)] =
      1 + !!dangerMap[String(line[0][0] + "," + y)];
  }
});

// JSON.stringify(dangerMap);

const result = Object.values(dangerMap).filter((value) => value > 1).length;
result;
