import React from "react";
import Image from "next/image";

async function obtenerProducto(id) {
  const response = await fetch(`https://dummyjson.com/products/${id}`);
  if (!response.ok) throw new Error("no se pudo adquirir el dato");
  return response.json();
}

const page = async ({ params: { id } }) => {
  const data = await obtenerProducto(id);
  return (
    <div>
      <h1 className=" text-center text-2xl pb-5">{data.title}</h1>
      <Image
        className="mx-[38%]"
        src={data.thumbnail}
        alt="product image"
        width={300}
        height={200}
        style={{ width: 300, height: 200 }}
      />
      <h2 className="text-center py-5">{data.description}</h2>
      <h2 className="text-center">$ {data.price}</h2>
    </div>
  );
};

export default page;
