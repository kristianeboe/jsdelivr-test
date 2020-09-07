import { getInjectionPoint } from "./shopify";

getInjectionPoint();

export const COLORS = {
  red: "red",
  blue: "blue",
};

(async function test() {
  await fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then((response) => response.json())
    .then((json) => console.log(json));
})();

console.log(COLORS);
