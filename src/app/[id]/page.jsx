"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

async function obtenerProducto(id) {
  const response = await fetch(`https://dummyjson.com/products/${id}`);
  if (!response.ok) throw new Error("no se pudo adquirir el dato");
  return response.json();
}

const Page = ({ params: { id } }) => {
  const router = useRouter();
  const [data, setData] = useState(null);

  useEffect(() => {
    const obtenerDatosProducto = async () => {
      try {
        const productData = await obtenerProducto(id);
        setData(productData);
      } catch (error) {
        console.error("Error al obtener los datos del producto:", error);
      }
    };

    obtenerDatosProducto();
  }, [id]);

  const redirectToHome = () => {
    router.push("/");
  };

  return (
    <div style={{ position: "relative" }}>
      <h1 className="text-center text-2xl py-5">{data?.title}</h1>
      <div className="flex justify-center">
        {data && (
          <Image
            className="py-5"
            src={data.thumbnail}
            alt="product image"
            width={300}
            height={300}
            style={{ width: 300, height: 300 }}
          />
        )}
      </div>
      <h2 className="text-center py-5">
        {data ? data.description : "Cargando..."}
      </h2>
      <button
        className="p-2 bg-red-400 rounded-md px-5"
        onClick={redirectToHome}
        style={{
          position: "absolute",
          top: "190%",
          left: "10px",
        }}
      >
        Home
      </button>
    </div>
  );
};

export default Page;
