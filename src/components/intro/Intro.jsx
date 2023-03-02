import "./intro.scss"
// import { FiHexagon } from "react-icons/fi";

export default function intro() {
  return (
    <div className="intro" id="intro">
      {/* <FiHexagon/> */}
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
        <div className="image">
          <img src="./assets/irregular-hexagon.svg" height="350px"/>       
        </div>
      </div>
    </div>
  )
}
