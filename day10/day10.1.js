
const captureSignal = (cycle, signal, snapshots) => {
  const snapshotsCopy = [...snapshots]
  const signalPoints = [20, 60, 100, 140, 180, 220];
  signalPoints.forEach((point) => {
    if (point === cycle) {
      snapshotsCopy.push(point * signal);
    }
  });
  return snapshotsCopy;
};

const day10 = (input) => {
  const inputArr = input
    .split("\n")
    .map((ins) => ins.split(" "))
    .map((ins) => {
      if (ins[0] !== "noop") {
        return [ins[0], parseInt(ins[1])];
      } else {
        return ins;
      }
    });

  let cycle = 1;
  let signal = 1;
  let signalStrengths = [];
  inputArr.forEach((ins) => {
    if (ins[0] === "noop") {
      signalStrengths = captureSignal(cycle, signal, signalStrengths);
      cycle += 1;
    } else {
      signalStrengths = captureSignal(cycle, signal, signalStrengths);
      cycle += 1;
      signalStrengths = captureSignal(cycle, signal, signalStrengths);
      cycle += 1;
      signal += ins[1];
    }
  });
  return signalStrengths.reduce((acc,cur) => acc+cur);
};
module.exports = { day10, captureSignal };
