function queueTime(customers, n) {
  if (n <= 0) return 0;

  if (n === 1) return customers.reduce((sum, time) => sum + time, 0);

  if (customers.length <= n) return Math.max(...customers);

  const tills = new Array(n).fill(0);

  for (let i = 0; i < customers.length; i++) {
    const nextTill = tills.indexOf(Math.min(...tills));
    tills[nextTill] += customers[i];
  }

  return Math.max(...tills);
}
