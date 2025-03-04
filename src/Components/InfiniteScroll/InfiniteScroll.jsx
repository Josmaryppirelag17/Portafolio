import "./InfiniteScroll.css";
import Marquee from "react-fast-marquee";
import html from "../../assets/html5.svg";
import css from "../../assets/css3.svg";
import bootstrap from "../../assets/bootstrap.svg";
import reactjs from "../../assets/react.svg";
import javascript from "../../assets/javascript.svg";
import figma from "../../assets/figma.svg";
import notion from "../../assets/notion.svg";
import trello from "../../assets/trello.svg";
import git from "../../assets/git.svg";
import github from "../../assets/github-black.svg";
import { motion } from "framer-motion";

const InfiniteScroll = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 1 }}
      className="infinite-scroll"
    >
      <div className="scroll-top">
        {" "}
        <Marquee
          direction="left"
          speed="20"
          autoFill
          pauseOnHover
          gradient
          gradientColor="black"
        >
          <div className="marquee__item-box">
            <img className="marquee__item-img" src={html} alt="" />
          </div>
          <div className="marquee__item-box">
            <img src={css} alt="" className="marquee__item-img" />
          </div>
          <div className="marquee__item-box">
            <img src={javascript} alt="" className="marquee__item-img" />
          </div>
          <div className="marquee__item-box">
            <img src={reactjs} alt="" className="marquee__item-img" />
          </div>
          <div className="marquee__item-box">
            <img src={bootstrap} alt="" className="marquee__item-img" />
          </div>
          <div className="marquee__item-box">
            <img src={git} alt="" className="marquee__item-img" />
          </div>
          <div className="marquee__item-box">
            <img src={github} alt="" className="marquee__item-img" />
          </div>
          <div className="marquee__item-box">
            <img src={trello} alt="" className="marquee__item-img" />
          </div>
          <div className="marquee__item-box">
            <img src={notion} alt="" className="marquee__item-img" />
          </div>
          <div className="marquee__item-box">
            <img src={figma} alt="" className="marquee__item-img" />
          </div>
        </Marquee>
      </div>
      <div className="scroll-right">
        <Marquee
          direction="right"
          speed="20"
          autoFill
          pauseOnHover
          gradient
          gradientColor="black"
        >
          <div className="marquee__item-box">
            <p className="marquee__item">Mente creativa</p>
          </div>
          <div className="marquee__item-box">
            <p className="marquee__item">Adaptable</p>
          </div>
          <div className="marquee__item-box">
            <p className="marquee__item">Comunicadora y elocuente</p>
          </div>
          <div className="marquee__item-box">
            <p className="marquee__item">Naturalmente curiosa</p>
          </div>
          <div className="marquee__item-box">
            <p className="marquee__item">Organizadora meticulosa</p>
          </div>
          <div className="marquee__item-box">
            <p className="marquee__item">Apasionada por el aprendizaje</p>
          </div>
          <div className="marquee__item-box">
            <p className="marquee__item">Colaboradora entusiasta</p>
          </div>
          <div className="marquee__item-box">
            <p className="marquee__item">Solucionadora de problemas</p>
          </div>
        </Marquee>
      </div>
    </motion.div>
  );
};

export default InfiniteScroll;
