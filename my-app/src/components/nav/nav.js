import M from "materialize-css";
import { Navbar, NavItem, Icon } from "react-materialize";
import styles from "./nav.module.scss";

const Nav = () => {
  const openMenu = () => {
    const nav = document.getElementById("nav");
    nav.style.transform = "translate(0%)";
  }

  return (
    <div className={styles.navbarContainer}>
      <Navbar
      className={styles.nav}
        alignLinks="right"
        brand={
          <a className={styles.logoContainer} href="/">
            <h6>BRITNEY CHEN</h6>
          </a>
        }
        id="nav"
        menuIcon={<Icon onClick={openMenu}>menu</Icon>}
        options={{
          draggable: true,
          edge: "left",
          inDuration: 250,
          onCloseEnd: null,
          onCloseStart: null,
          onOpenEnd: null,
          onOpenStart: null,
          outDuration: 200,
          preventScrolling: true,
        }}
      >
        <NavItem href="/">HOME</NavItem>
        <NavItem href="/about">ABOUT</NavItem>
        <NavItem href="/code">CODE</NavItem>
        <NavItem href="/art-and-design">ART & DESIGN</NavItem>
        <a href="/resume">RESUME</a>
      </Navbar>
    </div>
  );
};

export default Nav;
