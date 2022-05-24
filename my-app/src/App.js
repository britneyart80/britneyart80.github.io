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

const Cursor = () => {
  let [posX, setPosX] = useState();
  let [posY, setPosY] = useState();
  let [linkHover, setLinkHover] = useState(false);

  useEffect(() => {
      document.querySelectorAll('a').forEach((el) => {
        el.addEventListener('mouseover', () => setLinkHover(true));
        el.addEventListener('mouseout', () => setLinkHover(false));
      });
      document.querySelectorAll('button').forEach((el) => {
        el.addEventListener('mouseover', () => setLinkHover(true));
        el.addEventListener('mouseout', () => setLinkHover(false));
      });
    
    window.addEventListener("mousemove", (e) => {
      setPosX(e.pageX - 18);
      setPosY(e.pageY - 18);
    });
  }, [])

  return (
    <div className={`${styles.cursor} ${linkHover ? styles.cursorHover : ""}`} style={{
      left: posX + "px",
      top: posY + "px"
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
        <Route path="/code" element={<Code />}/>
        <Route path="/code/:id" element={<PageDetail type="code"/>}/>
        <Route path="art-and-design" element={<Art />} />
      </Routes>
      <Cursor/>
    </div>
  );
};

export default App;
