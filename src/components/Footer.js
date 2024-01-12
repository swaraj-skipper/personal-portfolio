import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import gfg from "../assets/img/gfgw.png";
import leetcode from "../assets/img/leetcode.png";
import cf from "../assets/img/cf.png";
import hrank from "../assets/img/hrank.png";
import fiverr from "../assets/img/fiverr.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from "react";
import { faGithub, faFacebook } from '@fortawesome/free-brands-svg-icons';

export const Footer = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  const icons = [
    { link: "https://auth.geeksforgeeks.org/user/swarajsaiyan", image: gfg },
    { link: "https://leetcode.com/skipper__7/", image: leetcode },
    { link: "https://www.linkedin.com/in/swaraj-nayak-360715201/", image: navIcon1 },
    { link: "https://github.com/swaraj-skipper", icon: faGithub },
    { link: "https://codeforces.com/profile/skipper__7", image: cf },
    { link: "https://www.hackerrank.com/profile/skipper__7", image: hrank },
    { link: "https://www.fiverr.com/swarajnayak7?up_rollout=true", image: fiverr },
    { link: "https://www.instagram.com/skipper__7/", image: navIcon3 },
    { link: "https://m.facebook.com/profile.php/?id=100009544997561", icon: faFacebook },

  ];

  return (
    <footer className="footer">
      <div className="social-icon">
        {icons.map((icon, index) => (
          <a
            key={index}
            href={icon.link}
            target="_blank" rel="noreferrer"
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
            style={{ textDecoration: "none" }}
          >
            {icon.image ? (
              <img src={icon.image} alt={`Icon ${index + 1}`} />
            ) : (
              <FontAwesomeIcon
                icon={icon.icon}
                style={{ color: hoveredIndex === index ? "#000000" : "#fcfcfc" }}
              />
            )}
          </a>
        ))}
      </div>
      {/* <p>Copyright 2022. All Rights Reserved</p> */}
    </footer>
  )
}
