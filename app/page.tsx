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
                <p style={{ marginTop: "20px" }}>
                  Tal vez no te vi el día de hoy, pero te mando con mucho amor
                  tu flor amarilla y que me mejor con un girasol.
                </p>

                <button
                  className={`${styles.modalButton} ${styles.regresarButton}`}
                  onClick={goToSecondView}
                >
                  Siguiente
                </button>
              </>
            ) : (
              <>
                <h3>¿Sabías que hoy es el día mundial de la poesía?</h3>
                <p>Mar de fuego</p>
                <p>
                  Te amo como el mar que besa la orilla, con intensidad y
                  ternura en cada ola, como el viento que abraza las velas, sin
                  miedo al naufragio, sin miedo a la sombra. Tus ojos, dos faros
                  en noche profunda, guían mi cuerpo entre espuma y deseo, y en
                  cada latido la marea se agita, como un susurro de amor en el
                  tiempo. Eres tempestad y calma infinita, marea que arrastra mi
                  alma desnuda, y en cada ola que rompe en mi pecho, arde el
                  abismo, que enciende la luna. No hay horizonte que apague este
                  fuego, ni puerto seguro que frene mi ancla, pues te amo en el
                  agua, en la brisa y la arena, te amo en la sal que mi piel
                  desata. Que el mar nos devore, que el tiempo se rinda, que el
                  sol nos sorprenda temblando en la orilla, pues nuestro amor no
                  es solo un reflejo, es un océano, eterno y sin prisa.
                </p>
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
