export async function load({ fetch }) {
  const res = await fetch("/api1");
  const result = await res.json();
  return result;
}
