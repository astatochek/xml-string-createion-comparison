import { Tree } from "./tree";

export function parseAsString(tree: Tree): string {
  if (typeof tree.children === "string") {
    return `<${tree.name}>${tree.children}</${tree.name}>`;
  }
  let children = "";
  for (const child of tree.children) {
    children += parseAsString(child);
  }
  return `<${tree.name}>${children}</${tree.name}>`;
}
