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
            I am Nike Spengler, a junior software developer based in Stockholm. Before I decided to become a developer, I worked as a graphic designer and I have a Bachelor's degree in Graphic Design & Illustration from Konstfack GDI. Most of all, it has given me a deep understanding and a keen interest in usability. As a collegue, I am prestigeless and passionate about collaborating with others to develop software that meets the needs of users and delivers real value.
          </p>
        </div>
      </div> 
    </div>
  )
}
