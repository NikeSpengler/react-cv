import "./app.scss"
import Topbar from "./components/topbar/Topbar.jsx"
import Intro from "./components/intro/Intro.jsx"
import About from "./components/about/About.jsx"
import Skills from "./components/skills/Skills.jsx"
import Contact from "./components/contact/Contact.jsx"
import Footer from "./components/footer/Footer.jsx"


function App() {
  return (
    <div className="app">
      <Topbar/>
      <div className="sections">
        <Intro/>
        <About/>
        <Skills/>
        <Contact/>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
