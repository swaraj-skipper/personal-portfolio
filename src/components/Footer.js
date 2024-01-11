import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from "react";
import { faGithub } from '@fortawesome/free-brands-svg-icons';

export const Footer = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };
  
  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const iconColor = isHovered ? '#000000' : '#fcfcfc';
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/swaraj-nayak-360715201/" target="_blank"><img src={navIcon1} alt="linkedIn" /></a>
              <a href="https://github.com/swaraj-skipper" target="_blank"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                style={{ textDecoration: 'none' }}>
                <FontAwesomeIcon icon={faGithub} style={{ color: iconColor }} />
              </a>
              <a href="https://www.instagram.com/skipper__7/" target="_blank"><img src={navIcon3} alt="ig" /></a>
            </div>
            <p>Copyright 2022. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
