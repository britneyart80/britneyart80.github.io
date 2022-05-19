import M from "materialize-css";
import { Navbar, NavItem, Icon } from "react-materialize";
import styles from "./nav.module.scss";

const Nav = () => {

  return (
    <div className={styles.navbarContainer}>
      <Navbar
        alignLinks="right"
        brand={
          <a className={styles.logoContainer} href="/">
            <h5>Britney Chen</h5>
          </a>
        }
        id="nav"
        menuIcon={<Icon>menu</Icon>}
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
        <NavItem href="about">About</NavItem>
        <NavItem href="code">Code</NavItem>
        <NavItem href="art-and-design">Art & Design</NavItem>
      </Navbar>
    </div>
  );
};

export default Nav;
