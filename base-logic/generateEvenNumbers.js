function generateEvenNumbers(numbersAmount, groupsAmount) {
  if (numbersAmount < 0 || groupsAmount < 0) return [];
  if (numbersAmount === 0 || groupsAmount === 0) return [];

  const evenNumbers = [];
  for (let i = 2; evenNumbers.length < numbersAmount; i += 2) {
    evenNumbers.push(i);
  }

  const result = [];
  for (let i = 0; i < groupsAmount; i++) {
    const group = evenNumbers.slice(
      i * (numbersAmount / groupsAmount),
      (i + 1) * (numbersAmount / groupsAmount),
    );
    result.push(group);
  }

  result.forEach((r) => {
    console.log(r);
  });
}

generateEvenNumbers(10, 2);
console.log("---");
generateEvenNumbers(11, 3);
