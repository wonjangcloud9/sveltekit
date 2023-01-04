export async function GET({ fetch, request }) {
  return new Response(JSON.stringify({ message: "Hello from API1" }));
}
