import React from "react";
import { obtenerProductos } from "@/libs/getProductos";
import ProductCard from "@/components/ProductCard";

const HomePage = async () => {
  const { products } = await obtenerProductos();

  return (
    <div>
      <div>
        <h1 className="text-center text-3xl pb-5">Tienda online</h1>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 mx-5">
        {products.map((product) => (
          <ProductCard product={product} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
