import styles from "./resume.module.scss";
import res from "../img/resume.png";
import { Button, Icon } from "react-materialize";
import file from "./resume.pdf";
const Resume = () => {
  return (
    <div className={styles.container}>
      <Button
        node="button"
        small
        style={{
          backgroundColor: "rgba(114, 179, 116, 1)",
          cursor: "none",
          mixBlendMode: "difference",
        }}
        waves="light"
      >
        <a
          href={file}
          download={"Britney_Chen_Resume"}
        >
          DOWNLOAD
          <Icon right>download</Icon>
        </a>
      </Button>
      <img src={res} alt="resume"/>
    </div>
  );
};

export default Resume;
