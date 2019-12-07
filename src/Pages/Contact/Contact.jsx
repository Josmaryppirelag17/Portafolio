import MotionHoc from "../../Components/MotionHoc/MotionHoc";
import "./Contact.css";
import github from "../../assets/github-black.svg";
import codepen from "../../assets/codepen-svgrepo-com.svg";
import linkedin from "../../assets/linkedin-161-svgrepo-com.svg";
import linktree from "../../assets/linktree-svgrepo-com.svg";
import emailjs from "emailjs-com";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPaperPlane } from "@fortawesome/free-regular-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import swal from "sweetalert2";
import { motion } from "framer-motion";
import Title from "../../Components/TitleSec/TitleSec";

const ContactComponent = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;
    const message = e.target.message.value;

    // Expresión regular para validar el formato del correo electrónico
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      // Mostrar mensaje de error si el correo electrónico no es válido
      swal(
        "Error",
        "Por favor, introduce un correo electrónico válido",
        "error"
      );
      return;
    }

    if (message.trim().length < 30) {
      // Mostrar mensaje de error si el mensaje es demasiado corto
      swal("Error", "El mensaje debe tener al menos 50 caracteres", "error");
      return;
    }

    try {
      await emailjs.sendForm(
        "service_kqewfng",
        "template_8bdz4tm",
        e.target,
        "0dqReoIznBc66IJ3C"
      );
      swal("Mensaje enviado");
    } catch (error) {
      console.error("Error:", error);
      swal("Error al enviar el mensaje");
    }
  };

  return (
    <motion.section
      className="contact__section page"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <Title text="Contacto" />
      <div className="contact-wrapper">
        <motion.form
          id="contact-form"
          className="form-horizontal"
          role="form"
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <motion.div
            className="form-group"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7 }}
          >
            <div>
              <input
                type="text"
                className="form__item form-control"
                id="name"
                name="name"
                placeholder="NOMBRE"
                required
              />
            </div>
          </motion.div>
          <motion.div
            className="form-group"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.9 }}
          >
            <div>
              <input
                type="email"
                className="form__item form-control"
                id="email"
                name="email"
                placeholder="CORREO ELECTRONICO"
                required
              />
            </div>
          </motion.div>
          <motion.textarea
            className="form-control form__item"
            rows="10"
            placeholder="MENSAJE"
            name="message"
            required
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.1 }}
          ></motion.textarea>
          <motion.button
            className="btn send-button"
            id="submit"
            type="submit"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.3 }}
          >
            <div className="alt-send-button">
              <FontAwesomeIcon icon={faPaperPlane} />
              <span className="send-text">ENVIAR</span>
            </div>
          </motion.button>
        </motion.form>
        <motion.div
          className="direct-contact-container"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          <ul className="contact-list">
            <motion.li
              className="list-item"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.7 }}
            >
              <FontAwesomeIcon className="contact__svg" icon={faLocationDot} />
              <span className="contact-text place">Maracaibo, Venezuela</span>
            </motion.li>
            <motion.li
              className="list-item"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 2.1 }}
            >
              <FontAwesomeIcon className="contact__svg" icon={faEnvelope} />
              <span className="contact-text gmail">
                <a
                  href="mailto:josmarypireladev@gmail.com"
                  title="Espero tu mensaje"
                >
                  josmarypirela.dev@gmail.com
                </a>
              </span>
            </motion.li>
          </ul>
          <hr />
          <ul className="social-media-list">
            <ul className="social__media">
              <motion.li
                className="social__media-item"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 2.3 }}
              >
                <a
                  className="social__media-link"
                  href="https://github.com/Josmaryppirelag17"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    className="social__media-svg"
                    src={github}
                    alt="github"
                  />
                </a>
              </motion.li>
              <motion.li
                className="social__media-item"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 2.5 }}
              >
                <a
                  className="social__media-link"
                  href="https://codepen.io/Josmaryppirelag17"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  <img
                    className="social__media-svg"
                    src={codepen}
                    alt="codepen"
                  />
                </a>
              </motion.li>
              <motion.li
                className="social__media-item"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 2.7 }}
              >
                <a
                  className="social__media-link"
                  href="https://www.linkedin.com/in/josmary-pirela/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  <img
                    className="social__media-svg"
                    src={linkedin}
                    alt="linkedin"
                  />
                </a>
              </motion.li>
              <motion.li
                className="social__media-item"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 2.9 }}
              >
                <a
                  className="social__media-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://linktr.ee/josmarypireladev"
                >
                  {" "}
                  <img
                    className="social__media-svg"
                    src={linktree}
                    alt="linktree"
                  />
                </a>
              </motion.li>
            </ul>
          </ul>
          <hr />
        </motion.div>
      </div>
    </motion.section>
  );
};

const Contact = MotionHoc(ContactComponent);

export default Contact;
