function addNumbers(a, b) {
  if (a === null || b === null) {
    throw new Error("Inputs cannot be null.");
  }

  if (a === undefined || b === undefined) {
    throw new Error("Inputs cannot be undefined.");
  }

  if (typeof a !== "number" || typeof b !== "number") {
    throw new Error("Both inputs must be valid numbers.");
  }

  return a + b;
}

// Valid example
console.log(addNumbers(5, 3)); // 8

// Invalid example (will throw error)
// console.log(addNumbers("5", 3));
