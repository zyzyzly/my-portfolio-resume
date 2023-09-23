import React from "react";
import "./Footer.css";
import resumeData from "../../Utils/ResumeData";
import { Typography } from "@mui/material";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer_left">
        <Typography className="footer_name">{resumeData.name}</Typography>
      </div>
      <div className="footer_right">
        <Typography className="footer_copyright">
          Designed and Developed by{" "}
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Zeinab Zeinali
          </a>
        </Typography>
      </div>
    </div>
  );
};

export default Footer;
