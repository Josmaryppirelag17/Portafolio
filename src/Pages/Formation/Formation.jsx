import MotionHoc from "../../Components/MotionHoc/MotionHoc";
import Title from "../../Components/TitleSec/TitleSec";
import "./Formation.css";
import { motion } from "framer-motion";

const FormationComponent = () => {
  return (
    <motion.section
      className="formation__section page"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="formation">
        <article className="formation__educ">
          <motion.h2
            className="educ__formation section-title"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Title text="Educación" />
          </motion.h2>
          <motion.figure
            className="educ__formation-item"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <motion.figcaption
              className="formation__subtitle text-transform"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              Cursos
            </motion.figcaption>
            <motion.h4
              className="formation__name"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              Oracle Next Education
            </motion.h4>
            <motion.h5
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1 }}
            >
              Oracle/Alura Latam
            </motion.h5>
            <motion.h6
              className="formation__date"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.2 }}
            >
              2023 - 2024
            </motion.h6>
          </motion.figure>

          <motion.figure
            className="educ__formation-item"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <motion.figcaption
              className="formation__subtitle"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              Formal
            </motion.figcaption>
            <motion.h4
              className="formation__name"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              Ingeniería de Sistemas
            </motion.h4>
            <motion.h5
              className="formation__info"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1 }}
            >
              Instituto Universitario Politécnico “Santiago Mariño”
            </motion.h5>
            <motion.h6
              className="formation__date"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.2 }}
            >
              2023 - Actualmente
            </motion.h6>
          </motion.figure>
        </article>

        <article>
          <motion.h2
            className="formation__title section-title"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Title text="Experiencia" />
          </motion.h2>
          <motion.figure
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <p>
              Aunque cuento con experiencia laboral previa, colaboré de manera
              efectiva con mis colegas, demostrando habilidades en organización,
              flexibilidad y capacidad para liderar equipos y tomar decisiones
              bajo presión. Esta experiencia me permitió desarrollar
              competencias valiosas que estoy seguro/a de que serán de gran
              utilidad en futuras oportunidades.
            </p>
          </motion.figure>
        </article>
      </div>
    </motion.section>
  );
};

const Formation = MotionHoc(FormationComponent);

export default Formation;
