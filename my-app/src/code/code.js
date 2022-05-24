import styles from "./code.module.scss";
import codeExperiences from "../utils/experiences/codeExperience";
import { Icon } from "react-materialize";
import Card from "../components/card/card";

const Code = () => {
  return (
    <div className={styles.container}>
      <div className={styles.bigText}>code</div>
      <div className={styles.scrollText}>
        <p className="caption">
          Keep scrolling to learn about my coding experiences
        </p>
        <Icon>arrow_downward</Icon>
      </div>
      {codeExperiences.map((e, i) => (
        <Card exp={e} key={i}/>
      ))}
    </div>
  );
};

export default Code;
