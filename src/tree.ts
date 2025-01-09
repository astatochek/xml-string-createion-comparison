export type Tree = {
  name: string;
  children: Tree[] | string;
};

export function gen(depth: number, width: number): Tree {
  if (depth <= 1) {
    return {
      name: `container-of-level-${depth}`,
      children: `${Math.floor(Math.random() * 100)}`,
    };
  }
  return {
    name: `container-of-level-${depth}`,
    children: Array.from(Array(width).keys()).map(() => gen(depth - 1, width)),
  };
}
