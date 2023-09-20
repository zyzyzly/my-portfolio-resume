import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { HomeRounded, Telegram } from "@mui/icons-material";
import { NavLink, withRouter } from "react-router-dom";
import CustomButton from "../Button/Button";
import resumeData from "../../utils/resumeData";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Header.css";

const Header = (props) => {
  const pathName = props.location?.pathName;

  return (
    <Navbar expand="lg" sticky="top" className="header">
      {/* Home link*/}
      <Nav.Link as={NavLink} to="/">
        <Navbar.Brand className="header_home">
          <HomeRounded />
        </Navbar.Brand>
      </Nav.Link>

      <Navbar.Toggle />

      <Navbar.Collapse>
        <Nav>
          {/* Resume Link */}
          <Nav.Link
            as={NavLink}
            to="/"
            className={pathName === "/" ? "header_link_active" : "header_link"}
          >
            Resume
          </Nav.Link>

          {/* Portfolio Link */}
          <Nav.Link
            as={NavLink}
            to="/Portfolio"
            className={
              pathName === "/Portfolio" ? "header_link_active" : "header_link"
            }
          >
            Portfolio
          </Nav.Link>
        </Nav>

        <div className="header_right">
          {Object.keys(resumeData.socials).map((key) => (
            <a
              key={key}
              href={resumeData.socials[key].link}
              target="_blank"
              rel="noopener noreferrer"
            >
              {resumeData.socials[key].icon}
            </a>
          ))}
          <CustomButton text={"Hire Me"} icon={<Telegram />} />
        </div>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default withRouter(Header);
