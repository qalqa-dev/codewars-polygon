function bouncingBall(h, bounce, window) {
  if (h <= 0 || bounce <= 0 || bounce >= 1 || window >= h) return -1;
  let count = 0;
  while (h >= window) {
    h *= bounce;
    if (h <= window) return count + 1;
    count += 2;
  }
  return count;
}

console.log(bouncingBall(3, 0.66, 1.5));
