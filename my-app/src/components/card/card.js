import styles from "./card.module.scss";
import { Row, Col, Button } from "react-materialize";
import Image from "../image/image";
import { Link } from "react-router-dom";

const Card = ({ exp, key }) => {
  const formatDate = (start, end) => {
    return `${start.toLocaleString("en-us", {
      month: "long",
      year: "numeric",
    })} - ${end.toLocaleString("en-us", { month: "long", year: "numeric" })}`;
  };
  return (
    <Row className={styles.experience} key={key}>
      <Col l={6} s={12} className={styles.content}>
        <div className={styles.contentText}>
          <h5>{exp.company}</h5>
          <p className={`${styles.date} caption`}>
            {formatDate(exp.start, exp.end)}
          </p>
          <p>{exp.description}</p>
        </div>
        <Link className={styles.link} to={exp.link}>
          <Button
            node="a"
            small
            style={{
              marginTop: "40px",
              backgroundColor: "rgba(114, 179, 116, 1)",
              cursor: "none",
              mixBlendMode: "difference",
            }}
            waves="light"
          >
            LEARN MORE
          </Button>
        </Link>
      </Col>
      <Col l={6} s={12} className={styles.imgCol}>
        <Image path={exp.image} />
      </Col>
    </Row>
  );
};

export default Card;
