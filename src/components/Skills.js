import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png"
import cplus from "../assets/img/cplus.png"
import mysql from "../assets/img/mysql.png"
import powerBI from "../assets/img/powerBI.png"
import photoshop from "../assets/img/photoshop.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3Alt, faBootstrap , faJs, faReact , faNodeJs, faPython  } from '@fortawesome/free-brands-svg-icons';
import { faPencil } from '@fortawesome/free-solid-svg-icons';


export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
              <div className="item">
                <img className="custom-icon" src={cplus} alt="C++ Icon"/>
                  <h5>C++</h5>
                </div>
              
                <div className="item">
                <FontAwesomeIcon icon={faJs} size="10x" />
                  <h5>JavaScript</h5>
                </div>
                <div className="item">
                <FontAwesomeIcon icon={faReact} size='10x' />
                  <h5>ReactJS</h5>
                </div>
                <div className="item">
                <img className="custom-icon" src={mysql} alt="C++ Icon"/>
                  <h5>mySql</h5>
                </div>
                <div className="item">
                  <FontAwesomeIcon icon={faHtml5} size="10x" />
                  <h5>HTML5</h5>
                </div>

                <div className="item">
                  <FontAwesomeIcon icon={faCss3Alt} size="10x" />
                  <h5>CSS3</h5>
                </div>
                <div className="item">
                  <FontAwesomeIcon icon={faBootstrap} size="10x"/>
                  <h5>Bootstrap</h5>
                </div>
                
                <div className="item">
                <FontAwesomeIcon icon={faNodeJs} size='10x' />
                  <h5>NodeJS</h5>
                </div>
                <div className="item">
                <FontAwesomeIcon icon={faPencil} size='10x'/>
                  <h5>Sketching</h5>
                </div>
                <div className="item">
                <FontAwesomeIcon icon={faPython} size='10x' />
                  <h5>Python</h5>
                </div>

                <div className="item">
                <img className="custom-icon" src={powerBI} alt="C++ Icon"/>
                  <h5>powerBI</h5>
                </div>
                <div className="item">
                <img className="custom-icon" src={photoshop} alt="C++ Icon"/>
                  <h5>Adobe Photoshop</h5>
                </div>
                
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
