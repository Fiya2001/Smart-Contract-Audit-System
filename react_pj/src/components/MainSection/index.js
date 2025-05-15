import React, { useState, useEffect, useCallback } from "react";
import { Button } from '../ButtonElements';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

import Video from '../../videos/video3.mp4';
import {
  MainContainer,
  MainBg,
  VideoBg,
  MainContent,
  MainH1,
  MainP,
  MainBtnWrapper,
  ArrowForward,
  ArrowRight
} from './MainElements';

function MainSection() {
  // State variables
  const [hover, setHover] = useState(false); // Whether the mouse is hovering over the button
  const [loopNum, setLoopNum] = useState(0); // Loop counter
  const [isDeleting, setIsDeleting] = useState(false); // Whether text is being deleted
  const [text, setText] = useState(''); // Displayed text
  const [delta, setDelta] = useState(300 - Math.random() * 100); // Animation interval time

  // Text and animation interval for text rotation
  const toRotate = ["Convenient", "Smart", "Save your Time"];
  const period = 2000; // Time for switching a single character

  // Function for text rotation
  const tick = useCallback(() => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
  
    if (fullText) {
      console.log('fullText:', fullText);
      let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);
      setText(updatedText);
  
      if (isDeleting) {
        setDelta(prevDelta => prevDelta / 2);
      }
  
      if (!isDeleting && updatedText === fullText) {
        setIsDeleting(true);
        // setLoopNum(prevLoopNum => prevLoopNum - 1);
        setDelta(period);
      } else if (isDeleting && updatedText === '') {
        setIsDeleting(false);
        setLoopNum(prevLoopNum => prevLoopNum + 1);
        setDelta(500);
      }
    }
  }, [loopNum, isDeleting, text, toRotate, setDelta, setIsDeleting, setLoopNum]);
  
  // Start text rotation effect
  useEffect(() => {
    const ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker); // Clear the timer to avoid memory leaks
    };
  }, [delta, tick]);

  // Mouse hover event handling function
  const handleHover = () => {
    setHover(!hover);
  };

  return (
    <MainContainer id='home'>
      <MainBg>
        <VideoBg playsInline autoPlay loop muted src={Video} type='video/mp4' />
      </MainBg>
      <MainContent>
        <MainH1>Welcome to Smart Connect Audit System</MainH1>
        <MainP>
          Sign up to use the Smart Connect System.
        </MainP>
        <TrackVisibility>
          {({ isVisible }) => (
            <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
              <h1>
                <span className="txt-rotate" data-period="1000" data-rotate={JSON.stringify(toRotate)}>
                  <span className="wrap">{text}</span>
                </span>
              </h1>
            </div>
          )}
        </TrackVisibility>
        <MainBtnWrapper>
          <Button
            to='signup'
            smooth={true}
            duration={500}
            spy={true}
            exact='true'
            offset={-80}
            primary='true'
            dark='true'
            onMouseEnter={handleHover}
            onMouseLeave={handleHover}
          >
            Get Started {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </MainBtnWrapper>
      </MainContent>
    </MainContainer>
  );
}

export default MainSection;
