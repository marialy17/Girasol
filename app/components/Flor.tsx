"use client";
import React, { useEffect, useRef, useState } from "react";

const Flor = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // Asegura que el código se ejecute solo en el lado del cliente
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  return (
    <div
      style={{
        width: "100%", // Ajusta al tamaño que desees
        height: "300px", // Ajusta al tamaño que desees
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
      }}
    >
      {/* Muestra el archivo .gif con bordes redondeados */}
      <img
        src="/images/girasol.gif" // Ruta del archivo .gif
        alt="Flor animada"
        style={{
          maxWidth: "100%",
          maxHeight: "100%",
          objectFit: "contain", // Ajusta para que la imagen se ajuste al contenedor
          borderRadius: "15px", // Bordes redondeados
        }}
      />
    </div>
  );
};

export default Flor;
