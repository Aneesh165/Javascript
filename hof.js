const radius = [1, 2, 3, 4];
const calculate = function (radius, logic) {
  const output = [];
  for (let i = 0; i < radius.length; i++) {
    output.push(logic(radius[i]));
  }
  return output;
};
const area = function (radius) {
  return Math.PI * radius * radius;
};
const diameter = function (radius) {
  return 2 * radius;
};

console.log("radius:-" + radius);
setTimeout(() => {
  console.log("Area of circles are:" + calculate(radius, area));
}, 2000);
console.log("diameter of circles are:" + calculate(radius, diameter));
