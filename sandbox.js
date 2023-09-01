const matrix = [];

for (let i = 0; i < 3; i++) {
  const row = [];
  for (let j = 0; j < 3; j++) {
    row.push(i * 3 + j);
  }
  matrix.push(row);
}

console.log(matrix);
