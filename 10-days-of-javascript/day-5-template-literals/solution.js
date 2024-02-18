/**
 * Task: kembalikan nilai array dari operasi akar
 */
function sides(literals, ...expressions) {
  const spread = [...expressions];

  const s1 =
    (spread[1] + Math.sqrt(spread[1] * spread[1] - 16 * spread[0])) / 4;
  const s2 =
    (spread[1] - Math.sqrt(spread[1] * spread[1] - 16 * spread[0])) / 4;

  return [s1, s2].sort((a, b) => b - a);
}

console.log(sides("sdfsd", 140, 48));
