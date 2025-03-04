import { motion } from "framer-motion";
import Swal from "sweetalert2"; // Importa Swal correctamente
import MotionHoc from "../../Components/MotionHoc/MotionHoc";
import Button from "../../Components/Button/Button";
import "./Home.css";

const HomeComponent = () => {
  const handleCopyEmail = () => {
    navigator.clipboard
      .writeText("josmarypirela.dev@gmail.com")
      .then(() => {
        // Usa Swal.fire para mostrar el mensaje
        Swal.fire({
          title: "¡Copiado!",
          text: "El correo se ha copiado al portapapeles.",
          icon: "success",
          timer: 1000, // Cierra automáticamente después de 1 segundo
          showConfirmButton: false, // No muestra el botón de confirmación
          customClass: {
            popup: "copy__alert", // Aplica la clase personalizada
          },
        });
      })
      .catch((err) => {
        console.error("Error al copiar el texto: ", err);
        Swal.fire({
          title: "Error",
          text: "No se pudo copiar el correo electrónico.",
          icon: "error",
          timer: 1000,
          showConfirmButton: false,
          customClass: {
            popup: "copy__alert",
          },
        });
      });
  };

  return (
    <motion.div
      className="home__section pages"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="home__bg-container"></div>
      <div className="home__section-card">
        <div className="home__section-info">
          <motion.h1
            className="section-title home__title"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Josmary Pirela
          </motion.h1>
          <div className="subtitle__content">
            <motion.h2
              className="section-subtitle home__subtitle"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              Desarrolladora Front-End.
            </motion.h2>
          </div>
          <motion.p
            className="home__description"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            ¡Bienvenido a mi mundo digital! Aquí encontrarás un reflejo de mi
            pasión y dedicación. ¡Explora y conoce más sobre mí y mi trabajo!
          </motion.p>{" "}
          <div className="resume">
            <motion.div
              initial={{ opacity: 0, scale: 0.3 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="resume__cv"
            >
              <a href="./JosmaryPirelaCV.pdf" download>
                <Button text="Descargar CV" padding="10px 20px"></Button>
              </a>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.3 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 1 }}
              className="copy__email"
            >
              <p>josmarypirela.dev@gmail.com</p>

              <div onClick={handleCopyEmail}>
                <Button text="Copiar" padding="9px 0px" />
              </div>
            </motion.div>
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.3 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="home__illustration"
        ></motion.div>
      </div>
    </motion.div>
  );
};

const Home = MotionHoc(HomeComponent);

export default Home;
