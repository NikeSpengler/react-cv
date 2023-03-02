import "./intro.scss"
// import { FiHexagon } from "react-icons/fi";

export default function intro() {
  return (
    <div className="intro" id="intro">
      {/* <FiHexagon/> */}
      <div className="left">
        <ul>
            <li className="logo">
                <a href="#intro">Nike Spengler</a>
            </li>
            <li className="link-extern">
                <a href="#about">Github</a>
            </li>
            <li className="link-extern">
                <a href="#skills">Linkedin</a>
            </li>
        </ul>
      </div>
      <div className="right">
        <div className="image">
          <img src="./assets/hexagon-cv.svg" height="430px"/>       
        </div>
      </div>
    </div>
  )
}
