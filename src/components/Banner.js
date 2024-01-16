import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import mine from "../assets/img/mine1.png";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import React from 'react'

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [ "Web Developer", "Coder", "Artist" ];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <a className="tagline" href="https://drive.google.com/file/d/1VOn8PAVlIL6QqXhnuJHmWCnMkErq-y4n/view?usp=drive_link" target="_blank">View resume</a>
                <h1>{`Hi! I'm Swaraj,`} <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Web Developer", "Coder", "Artist" ]'><span className="wrap">{text}</span></span></h1>
                  <p>Looking for 6 Internship and full time SDE role, graduating in 2024. Final year Student at Army Institute of Technology, Pune. Skills: C++ ,ReactJS, JavaScript, Python, TypeScript, Django, SQL , MongoDB , HTML5, CSS3, Tailwind CSS, and NodeJS</p>
                  <button style={{textDecoration:'None'}}><a href="#connect">Let’s Connect <ArrowRightCircle size={25} /></a></button>
              </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {() =>
                <div>
                  <img src={mine} alt="Header Img" style={{marginTop: "-75px"}}/>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
