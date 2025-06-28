import aboutMeImg from "../images/aboutme2.png";
import { motion } from "framer-motion";
import SocialIcons from "./SocialIcons";
import { useInView } from "react-intersection-observer";

const AboutMe = ({ name, email, location, availability, brand }) => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  // Variants for paragraph animations
  const paragraphVariants = {
    initial: { y: 20, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  // Variants for staggered animations
  const staggerVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  return (
    <div className="aboutContainer container">
      <div className="row">
        <motion.div
          className="personalImage col-12 col-lg-4"
          ref={ref}
          initial={{ x: "-10vw", opacity: 0 }}
          animate={inView ? { x: 0, opacity: 1 } : { x: "-10vw", opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        >
          <img src={aboutMeImg} alt={name} />
        </motion.div>
        <motion.div
          className="personalInfo col-12 col-lg-8"
          // ref={ref}
          initial={{ x: "10vw", opacity: 0 }}
          animate={inView ? { x: 0, opacity: 1 } : { x: "10vw", opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        >
          <div className="contentContainer">
            <h4>Nice to meet you</h4>
            <h5>I'm a Software Engineer, crafting amazing digital experiences!</h5>
            <div className="contentDescription">
              <motion.div
                className="contentDescription"
                variants={staggerVariants}
                initial="initial"
                animate={inView ? "animate" : "initial"}
              >
                <motion.p variants={paragraphVariants}>
                  Currenty building systems to process fast and secure bank payments at{" "}
                  <a target="_blank" rel="noreferrer" href="https://wafi.cash">
                    wafi.cash
                  </a>{" "}
                  (fullstack Engineer)
                </motion.p>
                <br />
                <motion.p variants={paragraphVariants}>
                  Skills: Python, Javascript, Go Programming language, AWS (certified Solutions
                  Architect), React.js, Django, Flask, Node.js etc. I have a lot of experience building AI agents and Agentic systems. 
                  I am passionate about designing and architecting secure and scalable systems in the cloud.
                </motion.p>
                <br />
                <motion.p variants={paragraphVariants}>
                  Life is a kaleidoscope of experiences, when I am not coding, I am finding magic in
                  all the smallest things.
                  <br />I love playing my guitar, swimming and exploring new places!.
                </motion.p>
              </motion.div>
            </div>
            <div className="infoContainer">
              <div className="row">
                <div className="col-12 col-md-6 info">
                  <span>Name:</span>
                  <p>{name}</p>
                </div>
                <div className="col-12 col-md-6 info">
                  <span>Email:</span>
                  <p>
                    <a href={`mailto:${email}`}>{email}</a>
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="col-12 col-md-6 info">
                  <span>Location:</span>
                  <p>{location}</p>
                </div>
                <div className="col-12 col-md-6 info">
                  <span>Availability:</span>
                  <p>{availability}</p>
                </div>
              </div>
            </div>
            <div className="buttonContainer">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://drive.google.com/file/d/1N8-lls1Z60RKLOBc9hZ-cgd2by8l0VF3/view?usp=sharing"
              >
                <button className="btn downloadCV">Resume</button>
                <SocialIcons />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutMe;
