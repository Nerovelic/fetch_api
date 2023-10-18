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
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const obtenerDatosProducto = async () => {
      try {
        const productData = await obtenerProducto(id);
        setData(productData);
        if (productData.images && productData.images.length > 0) {
          setSelectedImage(productData.images[0]);
        }
      } catch (error) {
        console.error("Error al obtener los datos del producto:", error);
      }
    };

    obtenerDatosProducto();
  }, [id]);

  const redirectToHome = () => {
    router.push("/");
  };

  const handleThumbnailClick = (image) => {
    setSelectedImage(image);
  };

  return (
    <div style={{ position: "relative" }}>
      <div
        className="w-full h-[50vh] bg-cover bg-no-repeat bg-center"
        style={{
          backgroundImage: `url(${data?.thumbnail})`,
          boxShadow: "inset 0 0 10px rgba(0, 0, 0, 0.836)",
        }}
      ></div>
      <h2 className="text-center py-5 text-xl font-bold">
        Eslogan: {data ? data.description : "Cargando..."}
      </h2>
      <h2 className="text-center py-2 text-lg font-semibold">
        Marca: {data?.brand}
      </h2>
      <h2 className="text-center py-2 text-lg font-semibold">
        Categoria: {data?.category}
      </h2>
      <h2 className="text-center py-5 text-lg font-semibold">
        Disponibles: {data?.stock} unidades
      </h2>

      <div className="mx-[25%] bg-slate-600 mb-10">
        <div className="pb-10">
          <h1 className="text-center text-2xl py-2 font-semibol font-semibold">
            Galeria de Fotos
          </h1>
          <div className="flex justify-center pb-5">
            {selectedImage && (
              <Image
                className="py-5"
                src={selectedImage}
                alt="product image"
                width={300}
                height={300}
                style={{ width: 300, height: 300 }}
              />
            )}
          </div>
          <div className="flex justify-center">
            {data && data.images && data.images.length > 0 && (
              <div className="flex justify-center">
                {data.images.map((image, index) => (
                  <div
                    key={index}
                    style={{ marginRight: "10px", cursor: "pointer" }}
                    onClick={() => handleThumbnailClick(image)}
                  >
                    <Image
                      src={image}
                      alt={`product image ${index}`}
                      width={100}
                      height={100}
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      <button
        className="px-4 py-2 bg-red-400 text-white rounded-md hover:bg-red-600"
        onClick={redirectToHome}
        style={{
          position: "absolute",
          bottom: "-20px",
          left: "10px",
        }}
      >
        Home
      </button>
    </div>
  );
};

export default Page;
