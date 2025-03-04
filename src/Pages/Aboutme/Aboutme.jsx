import { motion } from "framer-motion";
import InfiniteScroll from "../../Components/InfiniteScroll/InfiniteScroll";
import MotionHoc from "../../Components/MotionHoc/MotionHoc";
import "./Aboutme.css";
import Title from "../../Components/TitleSec/TitleSec";

const AboutmeComponent = () => {
  return (
    <motion.div
      className="aboutme__section page"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.h1
        className="section-title aboutme__title"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Title text="Sobre mí" />
      </motion.h1>
      <div className="description">
        <div className="description__info">
          <motion.h2
            className="section-subtitle"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Descripción
          </motion.h2>
          <motion.p
            className="description__text"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            ¡Hola y bienvenido/a a mi mundo digital!
            <br />
            <br />
            Soy Josmary Pirela, una entusiasta desarrolladora front-end y
            estudiante de ingeniería en sistemas. Mi pasión por el desarrollo
            web es como una chispa que enciende mi creatividad y curiosidad.
            Estoy emocionada por compartir contigo mi trabajo, mi pasión y mi
            visión del mundo a través de este pequeño rincón digital. Espero que
            te sientas inspirado/a y motivado/a al explorar mi portafolio, ¡y
            que juntos podamos crear un futuro brillante y lleno de
            posibilidades!
            <br />
            <br />
            ¡Gracias por visitar mi espacio digital y por ser parte de esta
            increíble aventura!
          </motion.p>
        </div>
        <div className="aboutme__contact">
          <div className="resume">
            <div className="skills">
              <motion.h2
                className="section-subtitle"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
              >
                Habilidades
              </motion.h2>
              <InfiniteScroll />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Aboutme = MotionHoc(AboutmeComponent);

export default Aboutme;
