export async function load({ fetch }) {
  const res = await fetch("https://dummyjson.com/products/11");
  const result = await res.json();
  return result;
}
