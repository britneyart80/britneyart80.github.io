import { Col, Row } from "react-materialize";
import Image from "../../components/image/image";
import PageDetail from "../pageDetail";
import styles from "./prepper.module.scss";

export default new PageDetail(
  "Prepper",
  new Date(2019, 7),
  new Date(2019, 7),
  "experiences/prepper.gif",
  "ReactJS, Sass, Express/MongoDB, UI/UX Design",
  (
    <div className={styles.content}>
      <h5>Overview</h5>
      <p>
        I built this project over the summer of 2019 during my Software
        Engineering Immersive at General Assembly (GA). The GA Immersive program
        was a 12-week coding bootcamp where we learned essential technologies,
        such as React, Bootstrap, MongoDB, Express, Ruby on Rails, ajax, axios
        etc. This project was one of the SPA's I built during my time there.
      </p>
      <h5>The Process</h5>
      <Row>
        <p>
          This was an individual project that we had 4 days to finish building,
          including the front-end, backend and design. I planned out the project
          first by coming up with an idea I was excited about. From there,
          wireframes and user stories took place.
        </p>
      </Row>
      <Row className={styles.centerFlex}>
        <Col l={6} s={12}>
          <Image path="prepper/wireframe1.png" />
        </Col>
        <Col l={6} s={12}>
          <Image path="prepper/wireframe2.png" />
        </Col>
      </Row>
      <Row className={styles.backend}>
        <Col l={6} s={12}>
          <Image path="prepper/backend.png" />
        </Col>
        <Col l={6}>
          <p>
            After wireframes were set up, it was easier to understand what
            functionality we needed and the backend endpoints required. I
            created a map of the backend architecture which shows the
            relationship between databases. I also created a catalog of CRUD
            routes that were needed.
          </p>
        </Col>
      </Row>
      <p>
        Once back-end was set up, I moved to implementing front-end
        functionality and styling. Along the way, there were both front-end and
        back-end bugs and I utilized the terminal/browser console.logs() a lot
        in the process of debugging. This helped me easily trace back to the
        source of the problem. To reduce the amount of bug encounters, I always
        planned out in my head how I wanted to implement the structure of
        classes and functions before I began coding.
      </p>
    </div>
  ),
  "https://github.com/britneyart80/Prepper"
);
