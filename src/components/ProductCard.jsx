"use client";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const ProductCard = ({ product }) => {
  const router = new useRouter();

  return (
    <div className="flex flex-col justify-center item-center content-center">
      <p className="text-center text-xl py-5">{product.title}</p>
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
      <div className="flex flex-row justify-center items-center w-full">
        <button
          className="p-2 bg-red-400 rounded-md px-5"
          onClick={() => {
            router.push(`http://localhost:3000/${product.id}`);
          }}
        >
          Ver mas
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
