import MotionHoc from "../../Components/MotionHoc/MotionHoc";
import "./Portfolio.css";
import PortfolioCard from "../../Components/PortfolioCard/PortfolioCard";
import { Work } from "../../Data/WorkData";
import { motion } from "framer-motion";
import Title from "../../Components/TitleSec/TitleSec";

const PortfolioComponent = () => {
  return (
    <motion.div
      className="portfolio__section page"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="portfolio__info">
        <motion.h1
          className="portfolio__section-title section-title"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Title text="Portfolio" />
        </motion.h1>
        <motion.h2
          className="portfolio__section-subtitle section-subtitle"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          ¡Mi galería de trofeos digitales!
        </motion.h2>
      </div>
      <motion.div
        className="portfolio__grid"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
      >
        {Work.map((project) => (
          <PortfolioCard
            key={project.id}
            image={project.image}
            title={project.name}
            tags={project.tags}
            description={project.description}
            demo={project.demo}
            code={project.github}
          />
        ))}
      </motion.div>
    </motion.div>
  );
};

const Portfolio = MotionHoc(PortfolioComponent);

export default Portfolio;
