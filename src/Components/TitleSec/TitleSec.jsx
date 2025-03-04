
import { motion } from "framer-motion";

const Title = ({ text }) => {
  return (
    <h1 className="title">
      {text.split("").map((letter, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.1 }}
          className="section-title"
        >
          {letter}
        </motion.span>
      ))}
    </h1>
  );
};

export default Title;
