import React from "react";
import { FaGithub } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import { useTheme } from "./ThemeContext";

const Footer = () => {
  const spacings = () => {
    return "mr-5";
  };

  const { theme } = useTheme();

  return (
    <div>
      <footer
        className="flex justify-center"
        style={{
          border: "solid",
          backgroundColor: theme === "light" ? "white" : "black",
          color: theme === "light" ? "black" : "white",
        }}
      >
        <a
          href="https://www.facebook.com/profile.php?id=100093458891383"
          target="_blank"
          rel="noopener noreferrer"
        >
          <CiFacebook size="5vh" className={spacings()} />
        </a>
        <a
          href="https://github.com/yolk23"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub size="5vh" className={spacings()} />
        </a>
        <a
          href="https://www.linkedin.com/in/mikhail-sakdalan-2a28a722a/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <CiLinkedin size="5vh" className={spacings()} />
        </a>
      </footer>
    </div>
  );
};

export default Footer;
