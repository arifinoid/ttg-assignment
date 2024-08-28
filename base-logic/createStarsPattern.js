function createStarsPattern(numberOfRows) {
  let result = "";

  for (let i = numberOfRows; i > 0; i--) {
    let stars = "*".repeat(i * 2 - 1);
    result += stars + "\n";
  }

  console.log(result);
}

createStarsPattern(3);
createStarsPattern(5);
