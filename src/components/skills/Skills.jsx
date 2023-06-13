import "./skills.scss";
import React, { useEffect } from "react";
import Aos from 'aos';
import 'aos/dist/aos.css';

export default function Skills() {

  useEffect(() => {
    Aos.init({duration: 1000});
  }, []);

  return (
    <div className='skills'id="skills">
      <div className="skills-text">
        <div className="item">
          <p>
          I have mainly worked with JavaScript/ TypeScript, CSS/ HTML, React/ React Native, Next.js, Node.js. Apart from this, I am open to testing and learning new technologies. I love the continuous learning and growth that comes with this field and am always eager to learn new things. I am always looking for ways to improve my skills and become a better developer.
          </p>
        </div>
      </div> 
    </div>
  )
}

