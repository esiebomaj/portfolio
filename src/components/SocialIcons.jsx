import { motion } from "framer-motion";

/**
 * Represents a component displaying social media icons.
 *
 * This component displays social media icons with animation effects.
 *
 * @component
 */

const SocialIcons = () => {
  // Define styles for the icons
  const styles = {
    icon: {
      textDecoration: "none",
      fontSize: "22px",
      padding: "10px",
      transition: "0.2s ease-in",
    },
  };

  return (
    <div className="socialIcons" style={styles.socialIcons}>
      <a
        className="icon"
        target="_blank"
        style={styles.icon}
        href="https://github.com/esiebomaj"
      >
        {/* GitHub Icon */}
        <motion.i
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.8, duration: 0.5, type: "spring" }}
          className="fa-brands fa-github"
          aria-hidden="true"
          title="Michael Yeates' GitHub Profile"
        ></motion.i>
      </a>
      <a
        className="icon"
        target="_blank"
        style={styles.icon}
        href="https://www.linkedin.com/in/jeremiahesieboma/"
      >
        {/* LinkedIn Icon */}
        <motion.i
          initial={{ y1: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.7, duration: 0.5, type: "spring" }}
          className="fa-brands fa-linkedin"
          aria-hidden="true"
          title="Michael Yeates' LinkedIn Profile"
        ></motion.i>
      </a>
      <a
        className="icon"
        target="_blank"
        style={styles.icon}
        href="https://www.instagram.com/esiebomaj/"
      >
        {/* Instagram Icon */}
        <motion.i
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.6, duration: 0.5, type: "spring" }}
          className="fa-brands fa-instagram"
          aria-hidden="true"
          title="Michael Yeates' Instagram Profile"
        ></motion.i>
      </a>
      <a
        className="icon"
        target="_blank"
        style={styles.icon}
        href="https://twitter.com/esiebomaj"
      >
        {/* Twitter Icon */}
        <motion.i
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.5, type: "spring" }}
          className="fa-brands fa-twitter"
          aria-hidden="true"
          title="Michael Yeates' Twitter Profile"
        ></motion.i>
      </a>
    </div>
  );
};

export default SocialIcons;
