// Only change code below this line
function compareDifferentValues(m, n) {
  if (m === n) {
    return "Equal";
  }
  return "Not equal";
}

compareDifferentValues("10", 10);
console.log(compareDifferentValues(8, "8"));
console.log(compareDifferentValues("8", 8));
console.log(compareDifferentValues("8", 8));
console.log(compareDifferentValues("8", "8"));
console.log(compareDifferentValues(8, 8));

// Only change code above this line
module.exports = compareDifferentValues;
