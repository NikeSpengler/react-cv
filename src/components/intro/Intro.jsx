import "./intro.scss"
// import { FiHexagon } from "react-icons/fi";

export default function intro() {
  return (
    <div className="intro">
      {/* <FiHexagon/> */}
      <div className="left">
                <a href="#intro" className="logo">Nike Spengler</a>
            </div>
            <div className="right">
                <div className="hamburger">
                  <span className="line1"></span>
                  <span className="line2"></span>
                  <span className="line3"></span>
                </div>
            </div>
    </div>
  )
}
