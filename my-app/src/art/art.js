import { Col, Row, Carousel } from "react-materialize";
import styles from "./art.module.scss";
import art from "../img/art.png";
import { useState, useEffect } from "react";

const generatePaths = (n) => {
  let res = [];
  for (let i = 1; i < n + 1; i++) {
    res.push(`tiles/tile-${i}.JPG`);
  }
  return res;
};

const Art = () => {
  let [paths, setPaths] = useState();

  useEffect(() => {
    const p = generatePaths(9);
    setPaths(p);
  }, []);

  return (
    <div className={styles.container}>
      <Row className={styles.row}>
        <Col className={styles.col} m={6} s={12}>
          <div className={styles.bigText}>ART & DESIGN</div>
        </Col>
        <Col className={styles.imgCol} m={6} s={12}>
          <img src={art} />
        </Col>
      </Row>
      <div className={styles.content}>
        <div>
          <h4 className={styles.sectionHeader}> Art.</h4>
          <div className={styles.artContent}>
            {/* {paths && <Carousel
              carouselId="artCarousel"
              images={[
                "https://picsum.photos/200/300?image=0",
                "https://picsum.photos/200/300?image=1",
                "https://picsum.photos/200/300?image=2",
                "https://picsum.photos/200/300?image=3",
                "https://picsum.photos/200/300?image=4",
              ]}
              options={{
                dist: -100,
                duration: 200,
                fullWidth: false,
                indicators: false,
                noWrap: false,
                numVisible: 5,
                onCycleTo: null,
                padding: 0,
                shift: 0,
              }}
            />} */}
          </div>
        </div>
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
