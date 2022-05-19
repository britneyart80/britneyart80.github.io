import styles from "./style/App.module.scss";
import Home from "./home/home";
import Nav from "./components/nav/nav";
import { Routes, Route } from "react-router-dom";
import "materialize-css/dist/css/materialize.min.css";

const App = () => {
  return (
    <div className={styles.container}>
      <Nav></Nav>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="about" element={<Home/>}/>
        <Route path="code" element={<Home/>}/>
        <Route path="art-and-design" element={<Home/>}/>
      </Routes>
    </div>
  );
};

export default App;
