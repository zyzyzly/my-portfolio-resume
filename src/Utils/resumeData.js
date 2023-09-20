import React from "react";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import TelegramIcon from "@mui/icons-material/Telegram";

const resumeData = {
  name: "Zeinab Zeinali",
  title: "Frontend Developer",
  birthday: "09th July 1992",
  email: "zeinabzeinali71@gmail.com",
  address: "Tehran, Iran",
  phone: "(+98)9366588863",
  socials: {
    Twitter: {
      link: "https://www.twitter.com/",
      text: "zyzyzeinali",
      icon: <TwitterIcon />,
    },
    LinkedIn: {
      link: "https://www.linkedin.com/",
      text: "zeinab-zeinali",
      icon: <LinkedInIcon />,
    },
    GitHub: {
      link: "https://www.github.com/",
      text: "zyzyzly",
      icon: <GitHubIcon />,
    },
    Telegram: {
      link: "https://www.Telegram.com/",
      text: "zyzyzeinali",
      icon: <TelegramIcon />,
    },
  },
};

export default resumeData;
