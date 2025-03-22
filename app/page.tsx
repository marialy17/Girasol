"use client";
import { useState, useEffect } from "react";
import styles from "./page.module.css";
import Flor from "./components/Flor"; // Importar el componente Flor

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalView, setModalView] = useState("first"); // Controlador de las vistas dentro del modal
  const [isClient, setIsClient] = useState(false); // Estado para verificar si es cliente

  // Verificamos si el componente está montado en el cliente
  useEffect(() => {
    setIsClient(true); // Cambiar a true una vez que el componente se monta en el cliente
  }, []);

  // Función para cerrar el modal
  const closeModal = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if ((e.target as HTMLElement).id === "modalBackground") {
      setIsModalOpen(false);
    }
  };

  // Función para regresar a la vista inicial dentro del modal
  const handleRegresar = () => {
    setModalView("first"); // Vuelve a la primera vista
  };

  // Cambiar a la segunda vista del modal
  const goToSecondView = () => {
    setModalView("second");
  };

  // Evitar renderizar en el servidor
  if (!isClient) return null;

  return (
    <main className={styles.main}>
      {/* Título llamativo */}
      <h1 className={styles.title}>Bonjour Mon Coeur</h1>

      {/* Descripción breve */}
      <p className={styles.description}>
        Presiona el corazón para descubrir algo especial...
      </p>

      {/* Botón de corazón */}
      <button
        className={styles.heartButton}
        onClick={() => setIsModalOpen(true)}
      >
        💚
      </button>

      {/* Modal */}
      {isModalOpen && (
        <div
          id="modalBackground"
          className={styles.modal}
          onClick={closeModal} // Detecta clics fuera del contenido
        >
          <div className={styles.modalContent}>
            <button
              className={styles.closeButton}
              onClick={() => setIsModalOpen(false)}
            >
              ×
            </button>

            {modalView === "first" ? (
              <>
                <h2>Un Girasol para mi Amor</h2>
                {/* Aquí agregamos el componente Flor */}
                <Flor />
                <p style={{ marginTop: "20px" }}>Tal vez no te vi el día de hoy, pero te mando con mucho amor tu flor amarilla y que me mejor con un girasol.</p>

                <button
                  className={`${styles.modalButton} ${styles.regresarButton}`}
                  onClick={goToSecondView}
                >
                  Siguiente
                </button>
              </>
            ) : (
              <>
                <h2>¿Sabías que hoy es el día mundial de la poesía?</h2>
                <p>Mi...</p>

                <button
                  className={`${styles.modalButton} ${styles.regresarButton}`}
                  onClick={handleRegresar}
                >
                  Regresar
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </main>
  );
}
