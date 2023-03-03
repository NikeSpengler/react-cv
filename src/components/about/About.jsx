import "./about.scss";
import React, { useEffect } from "react";
import Aos from 'aos';
import 'aos/dist/aos.css';

export default function About() {

  useEffect(() => {
    Aos.init({duration: 1000});
  }, []);

  return (
    <div className='about'id="about">
      <div className="about-text">
        <div className="item">
          <p>
            I am Nike Spengler, a frontend developer with a background in graphic design who enjoys working both in teams and independently. The last few years my focus has shifted from graphic design to web development, which has been fun and exciting. I like working with visual expressions and always strive to find an intuitive functionality, as well as solving problems and writing code that is easy to understand and maintain. 
          </p>
        </div>
      </div> 
    </div>
  )
}
