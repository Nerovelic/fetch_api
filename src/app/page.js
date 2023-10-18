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
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 gap-4 mx-5">
        {products.map((product) => (
          <div className="mx-2">
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
