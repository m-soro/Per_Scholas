function staircase(n) {
  let gap = n;
  for (let i = 1; i <= n; i++) {
    console.log(" ".repeat((gap -= 1)), "#".repeat(i));
  }
}
staircase(6);
