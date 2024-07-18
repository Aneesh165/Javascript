const sides = [1, 2, 3, 4]; 

const calculate = function (sides, logic) {
  const output = [];
  for (let i = 0; i < sides.length; i++) {
    output.push(logic(sides[i]));
  }
  return output;
};

const area = function (side) {
  return side * side;
};

const perimeter = function (side) {
  return 4 * side;
};

console.log("Sides of squares:-", sides);
console.log("Areas of squares are:", calculate(sides, area));
console.log("Perimeters of squares are:", calculate(sides, perimeter));
