import styles from "./style/App.module.scss";
import Home from "./home/home";
import About from "./about/about";
import Code from "./code/code";
import Art from "./art/art";
import PageDetail from "./details/details";
import Nav from "./components/nav/nav";
import { Routes, Route } from "react-router-dom";
import "materialize-css/dist/css/materialize.min.css";
import { useEffect, useState } from "react";
import Resume from "./resume/resume";

const Cursor = () => {
  let [pos, setPos] = useState({ x: document.pageX, y: document.pageY});
  let [linkHover, setLinkHover] = useState(false);

  const setEventListeners = () => {
    document.querySelectorAll('a').forEach((el) => {
      el.addEventListener('mouseover', () => setLinkHover(true));
      el.addEventListener('mouseout', () => setLinkHover(false));
    });
    document.querySelectorAll('button').forEach((el) => {
      el.addEventListener('mouseover', () => setLinkHover(true));
      el.addEventListener('mouseout', () => setLinkHover(false));
    });
  }

  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      setPos({ x: e.pageX - 18, y: e.pageY - 18 });
    });
    setEventListeners();
    setInterval(() => {
      setEventListeners();
    }, 3000)  
  }, []);

  return (
    <div className={`cursor ${linkHover ? styles.cursorHover : ""}`} style={{
      left: pos.x + "px",
      top: pos.y + "px"
    }}/>
  )
};

const App = () => {
  return (
    <div className={styles.container}>
      <Nav></Nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/code" element={<Code/>}/>
        <Route path="/code/:id" element={<PageDetail type="code"/>}/>
        <Route path="/art-and-design" element={<Art />} />
        <Route path="/resume" element={<Resume/>}/>
      </Routes>
      <Cursor/>
    </div>
  );
};

export default App;
