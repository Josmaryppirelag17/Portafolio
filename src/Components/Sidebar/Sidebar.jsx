import { useState, useEffect } from "react";
import { motion, useAnimation, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import "./Sidebar.css";
import { faChalkboardUser, faHome } from "@fortawesome/free-solid-svg-icons";
import { faComment, faUser } from "@fortawesome/free-regular-svg-icons";
import { faRankingStar } from "@fortawesome/free-solid-svg-icons/faRankingStar";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [activeIcon, SetActiveIcon] = useState(null);
  const sidebarControls = useAnimation();

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = (icon) => {
    SetActiveIcon(icon);
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
              open: { with: 55, opacity: 0 },
              closed: { with: 0, opacity: 0 },
            }}
            initial="closed"
            animate={sidebarControls}
            exit="closed"
          >
            <div className={`sidebar__text`}>
              <ul className="sidebar__list">
                {[
                  { icon: faHome, path: "/", key: "home" },
                  { icon: faUser, path: "/aboutme", key: "aboutme" },
                  {
                    icon: faChalkboardUser,
                    path: "/formation",
                    key: "formation",
                  },
                  { icon: faRankingStar, path: "/portfolio", key: "portfolio" },
                  { icon: faComment, path: "/contact", key: "contact" },
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
