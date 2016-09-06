export function randomRange (min = 0, max) {
  if (!max) {
    max = min;
    min = 0;
  }
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export function randomPick (list) {
  const pick = randomRange(0, list.length - 1);

  return list[pick];
}

// Pick a random value from a list with probability distribution,
// this probability is according by ordering
export function randomPickWithProb (list) {
  let indexes = [];

  list.forEach((_, i) => {
    const prob = list.length - i;
    indexes = indexes.concat(new Array(Math.ceil(prob)).fill(i));
  });

  const index = randomPick(indexes);

  return list[index];
}
