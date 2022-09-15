import { Col, Row } from "react-materialize";
import styles from "./art.module.scss";
import art from "../img/art.png";
import { useState, useEffect } from "react";
import Image from "../components/image/image";

const generatePaths = (n) => {
  let res = [];
  for (let i = 1; i < n + 1; i++) {
    res.push(`art/tile-${i}.jpg`);
  }
  return res;
};

const Art = () => {
  let [paths, setPaths] = useState();

  useEffect(() => {
    const p = generatePaths(12);
    setPaths(p);
  }, []);

  return (
    <div className={styles.container}>
      <Row className={styles.row}>
        <Col className={styles.col} m={6} s={12}>
          <div className={styles.bigText}>ART & DESIGN</div>
        </Col>
        <Col className={styles.imgCol} m={6} s={12}>
          <img src={art} alt="lifestyle image"/>
        </Col>
      </Row>
      <div className={styles.content}>
        <Row>
          <h4 className={styles.sectionHeader}> Art.</h4>
          <div className={styles.tiles}>
            {paths &&
              paths.map((p, index) => (
                <div className={styles.tile} key={index}>
                    <Image path={p} boxed></Image>
                </div>
              ))}
          </div>
        </Row>
        <div>
          <h4 className={styles.sectionHeader}> Design Projects.</h4>
          <div className={styles.designContent}>
            <div className={styles.comingSoon}> COMING SOON</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Art;
