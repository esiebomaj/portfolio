import { useState, useEffect } from "react";
import { AiOutlineStar } from "react-icons/ai";
import { BiGitRepoForked } from "react-icons/bi";
import { motion } from "framer-motion";
import SocialIcons from "./SocialIcons";

/**
 * Represents the footer section of the website.
 *
 * @component
 */

const Footer = () => {
  const date = new Date();
  const currentYear = date.getFullYear();

  return (
    <footer>
      {/* Social icons */}
      <SocialIcons />

      <a className="footer-link" href="https://github.com/mdyeates">
        <p>
          <span>▷</span> Designed and built by Michael Yeates &copy;{" "}
          {currentYear}
        </p>
      </a>
    </footer>
  );
};

export default Footer;
