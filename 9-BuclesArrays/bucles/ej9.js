for (let i = 1; i < 12; i++) {
  i % 2 === 0
    ? console.log(`${i} --- ${i ** 3}`)
    : console.log(`${i} --- ${i ** 2}`);
}
