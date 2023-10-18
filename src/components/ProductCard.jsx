"use client";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const ProductCard = ({ product }) => {
  const router = useRouter();

  const redirectToProduct = () => {
    router.push(`/${product.id}`);
  };

  return (
    <div className="flex flex-col justify-center item-center content-center">
      <p className="text-center text-xl pt-10">{product.title}</p>
      <div className="flex justify-center">
        <Image
          className="py-5"
          src={product.thumbnail}
          alt="product image"
          width={200}
          height={200}
          style={{ width: 200, height: 200 }}
        />
      </div>
      <h2 className="text-center">$ {product.price}</h2>
      <div className="flex flex-row justify-center items-center w-full pt-5">
        <button
          className="p-2 bg-red-400 rounded-md px-5"
          onClick={redirectToProduct}
        >
          Ver más
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
