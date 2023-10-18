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
    <div className=" bg-slate-300 border border-gray-300 rounded-lg p-5 shadow-md w-80 my-5">
      <p className="text-gray-700 text-2xl mt-1 text-center mb-5">
        {product.title}
      </p>
      <div className="relative">
        <Image
          src={product.thumbnail}
          alt="product image"
          objectFit="cover"
          className="rounded-lg"
          width={300}
          height={300}
          style={{ width: 300, height: 300 }}
        />
      </div>
      <p className="text-gray-700 text-2xl mt-4">${product.price}</p>
      <div className="flex justify-center mt-3">
        <button
          onClick={redirectToProduct}
          className="px-4 py-2 bg-red-400 text-white rounded-md hover:bg-red-600"
        >
          Ver más
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
