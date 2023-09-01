const matrix = [];

for (let i = 0; i < 3; i++) {
  const row = [];
  for (let j = 0; j < 3; j++) {
    row.push(i * 3 + j);
  }
  matrix.push(row);
}

console.log(matrix);

{
  /* <React.Fragment>
  <div className="status">{status}</div>
  {Array(3)
    .fill(null)
    .map((_, rowIndex) => (
      <div className="board-row" key={rowIndex}>
        {Array(3)
          .fill(null)
          .map((_, colIndex) => {
            const squareIndex = rowIndex * 3 + colIndex;
            return (
              <Square
                key={squareIndex}
                value={squares[squareIndex]}
                onSquareClick={() => handleClick(squareIndex)}
              />
            );
          })}
      </div>
    ))}
</React.Fragment>; */
}
