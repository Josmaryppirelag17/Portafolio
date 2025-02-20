import { useState, useEffect } from "react";
import { motion, useAnimation, AnimatePresence } from "framer-motion";
import "./Sidebar.css";
import home from "../../assets/house-chimney-solid.svg";
import aboutme from "../../assets/user-solid.svg";
import blog from "../../assets/feather-pointed-solid.svg";
import formation from "../../assets/chalkboard-user-solid.svg";
import portfolio from "../../assets/ranking-star-solid.svg";
import contact from "../../assets/comments-regular.svg";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [activeIcon, setActiveIcon] = useState(null);
  const sidebarControls = useAnimation();

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = (icon) => {
    setActiveIcon(icon);
    setIsOpen(true);
  };

  useEffect(() => {
    sidebarControls.start(isOpen ? "open" : "closed");
  }, [isOpen, sidebarControls]);

  return (
    <div className="sidebar">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="sidebar__container"
            variants={{
              open: { width: 55, opacity: 1 },
              closed: { width: 0, opacity: 0 },
            }}
            initial="closed"
            animate={sidebarControls}
            exit="closed"
          >
            <div className={`sidebar__text`}>
              <ul className="sidebar__list">
                {[
                  { icon: home, path: "/", key: "home" },
                  { icon: aboutme, path: "/aboutme", key: "aboutme" },
                  { icon: formation, path: "/formation", key: "formation" },
                  { icon: portfolio, path: "/portfolio", key: "portfolio" },
                  { icon: contact, path: "/contact", key: "contact" },
                ].map((item) => (
                  <motion.li
                    key={item.key}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 1.1 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <Link
                      to={item.path}
                      className={`sidebar__icon ${
                        activeIcon === item.key ? "active" : ""
                      }`}
                      onClick={() => handleItemClick(item.key)}
                    >
                      <img
                        className="sidebar__icon-img"
                        src={item.icon}
                        alt=""
                      />
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Sidebar;
