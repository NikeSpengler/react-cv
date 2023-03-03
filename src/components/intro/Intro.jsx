import "./intro.scss"
import React, { useEffect } from "react";
import Aos from 'aos';
import 'aos/dist/aos.css';

export default function Intro() {

  useEffect(() => {
    Aos.init({duration: 1000});
  }, []);

  return (
    <div className="intro" id="intro">
      <div className="left">
        <ul>
            <li className="logo">
                <a href="#intro" className="logo">Nike Spengler</a>
            </li>
            <li className="link-extern">
                <a href="https://github.com/NikeSpengler">Github</a>
            </li>
            <li className="link-extern">
                <a href="https://www.linkedin.com/in/nike-spengler-61ba68130">Linkedin</a>
            </li>
        </ul>
      </div>
      <div className="right">
        <div className="imgContainer" data-aos="flip-left" data-aos-easing="ease-out-cubic"
              data-aos-duration="2000" >
          <img src="./assets/irregular-hexagon.svg" height="320px"/>       
        </div>
      </div>
    </div>
  )
}
