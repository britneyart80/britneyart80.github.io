import styles from "./code.module.scss";
import codeExperiences from "../utils/experiences/codeExperience";
import { Icon, Button } from "react-materialize";
import Card from "../components/card/card";
import TableOfContents from "../components/tableOfContents/tableOfContents";

const Code = () => {
  return (
    <>
      <TableOfContents/>
      <div className={styles.container}>
        <div className={styles.bigText}>code</div>
        <div className={styles.scrollText}>
          <p className="caption">
            Keep scrolling to learn about my coding experiences
          </p>
          <Icon>arrow_downward</Icon>
        </div>
        {codeExperiences.map((e, i) => (
          <Card exp={e} key={i} />
        ))}
        <Button
          node="button"
          small
          style={{
            backgroundColor: "transparent",
            boxShadow: "none",
            color: "rgba(114, 179, 116, 1)",
            cursor: "none",
            mixBlendMode: "difference",
          }}
          waves="light"
          onClick={() => {
            window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
          }}
        >
          BACK TO TOP
          <Icon right>arrow_upward</Icon>
        </Button>
      </div>
    </>
  );
};

export default Code;
