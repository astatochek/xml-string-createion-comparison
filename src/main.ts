import { parseAsElement } from "./element";
import { parseAsString } from "./string";
import { gen } from "./tree";

const tree = gen(7, 10);

console.log(
  "String ms:",
  time(() => parseAsString(tree)), // ~ 365 ms
);
console.log(
  "Element ms:",
  time(() => parseAsElement(tree)), // ~ 6599 ms
);

function time(fn: () => void): number {
  const start = performance.now();

  fn();

  const end = performance.now();

  return end - start;
}
