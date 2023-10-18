export async function obtenerProductos() {
  const response = await fetch("https://dummyjson.com/products");
  return response.json();
}
