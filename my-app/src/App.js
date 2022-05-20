import styles from "./style/App.module.scss";
import Home from "./home/home";
import About from "./about/about";
import Code from "./code/code";
import Art from "./art/art";
import Nav from "./components/nav/nav";
import { Routes, Route } from "react-router-dom";
import "materialize-css/dist/css/materialize.min.css";

const App = () => {
  return (
    <div className={styles.container}>
      <Nav></Nav>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="about" element={<About/>}/>
        <Route path="code" element={<Code/>}/>
        <Route path="art-and-design" element={<Art/>}/>
      </Routes>
    </div>
  );
};

export default App;
