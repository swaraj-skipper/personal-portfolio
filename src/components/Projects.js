import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import newms from "../assets/img/Newms.png";
import food from "../assets/img/foodDelivery.png";
import kartit from "../assets/img/kartit.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      link: "KartIt",
      description: "An e-commerce application which allows only logged-in user to access protected routes",
      imgUrl: kartit,
      url: "https://e-commerce-cc9e2.web.app/",
      repo:"https://github.com/swaraj-skipper/kartit",
      
    },
    {
      link: "Newms",
      description: "A react based website, fetches latest news from NewsApi.org (Hosted as dummy offline, NewsAPI business plan requirred)",
      imgUrl: newms,
      url: "",
      repo:"https://github.com/swaraj-skipper/news",
    },
    {
      link: "Business Startup",
      description: "Design & Development",
      imgUrl: newms,
      url: "",
      repo:"https://github.com/swaraj-skipper/Food-Delivery-Website",
    },
    {
      link: "Business Startup",
      description: "Design & Development",
      imgUrl: newms,
      url: "",
      repo:"https://github.com/swaraj-skipper/Food-Delivery-Website",
    },
    {
      link: "Business Startup",
      description: "Design & Development",
      imgUrl: newms,
      url: "",
      repo:"https://github.com/swaraj-skipper/Food-Delivery-Website",
    },
    {
      link: "Khana Khazana",
      description: "A responsive frontend web-application mimicking a food delivery web, made using HTML and CSS only",
      imgUrl: food,
      url: "https://swaraj-skipper.github.io/Food-Delivery-Website/?name=&number=&mail=&msg=",
      repo:"https://github.com/swaraj-skipper/Food-Delivery-Website",
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div>
                <h2>Projects</h2>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first" className="proj">Projects</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Art Works</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Photography</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp">
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="section">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
