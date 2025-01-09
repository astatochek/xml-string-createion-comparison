import { Tree } from "./tree";

export function parseAsElement(tree: Tree): string {
  return rec(tree).outerHTML;
}

function rec(tree: Tree): Element {
  const el = element(tree.name);

  if (typeof tree.children === "string") {
    el.innerHTML = tree.children;
    return el;
  }

  for (const child of tree.children) {
    el.append(rec(child));
  }

  return el;
}

function element(name: string): Element {
  //@ts-ignore
  return document.createElement(name, null);
}
