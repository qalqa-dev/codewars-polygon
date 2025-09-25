const rps = (p1, p2) => {
  const winConditions = {
    scissors: 'paper',
    paper: 'rock',
    rock: 'scissors',
  };
  if (p1 === p2) return 'Draw!';
  return winConditions[p1] === p2 ? 'Player 1 won!' : 'Player 2 won!';
};
