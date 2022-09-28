import styles from "./card.module.scss";
import { Row, Col, Button } from "react-materialize";
import Image from "../image/image";
import { formatDate } from "../../utils/utils";

const Card = ({ exp, index }) => {
  return (
    <Row
      className={styles.experience}
      key={index}
      id={exp.company.replace(/ /g, "")}
    >
      <Col l={6} s={12} className={styles.content}>
        <div className={styles.contentText}>
          <h5 data-id={exp.company.replace(/ /g, "")}>{exp.company}</h5>
          <p className={`${styles.date} caption`}>
            {formatDate(exp.start, exp.end)}
          </p>
          <p>{exp.description}</p>
        </div>
        <Button
          href={exp.link}
          node="a"
          small
          className={styles.link}
          style={{
            marginTop: "40px",
            backgroundColor: "#60A961",
            cursor: "none",
            mixBlendMode: "difference",
          }}
          waves="light"
        >
          LEARN MORE
        </Button>
      </Col>
      <Col l={6} s={12} className={styles.imgCol}>
        <Image path={exp.image} />
      </Col>
    </Row>
  );
};

export default Card;
