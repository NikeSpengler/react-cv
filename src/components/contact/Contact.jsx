import "./contact.scss"

export default function Contact() {
  return (
    <div className="contact" id="contact">
      <div className="contact-text">
        <ul>
            <li>
                <a href="#intro" className="contact-logo">Contact me!</a>
            </li>
            <li className="link-extern">
                <a href="https://github.com/NikeSpengler">Github</a>
            </li>
            <li className="link-extern">
                <a href="https://www.linkedin.com/in/nike-spengler-61ba68130">Linkedin</a>
            </li>
        </ul>
      </div>
      <div className="contact-image">
          <img src="./assets/hexagon-irregular2.svg" height="350px"/>       
      </div>
    </div>
  )
}
