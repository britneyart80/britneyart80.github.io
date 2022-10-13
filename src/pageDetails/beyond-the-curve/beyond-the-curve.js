import PageDetail from "../pageDetail";
import styles from "./beyond-the-curve.module.scss";

export default new PageDetail(
  "Beyond the curve",
  new Date(2020, 7),
  new Date(2020, 8),
  "experiences/btc.gif",
  "ReactJS, Bootstrap, UI/UX Design",
  (
    <div className={styles.content}>
      <div>
        <h5>Overview</h5>
        <p>
          Beyond the Curve is a subject and standardized test tutoring company
          based in Los Angeles, California. Over the summer of 2020, I got in
          contact with the founder, who needed a new website.
        </p>
      </div>
      <div>
        <h5>The Process</h5>
        <p>
          The first step of the process was speaking with the client to
          understand the needs of the website, such as functionality, desired
          aethetic and content. I took note of the requirements and started
          researching similar/competitor sites to showcase to the client. After
          designing and wireframing, I started building out the site with the
          design and color schemes in mind.
        </p>
        <p>
          The project was built using React and I used components from
          Bootstrap's library to build out the site. After reviewing my work and
          getting approval with the client, I hooked it up to the company
          domain. You can view the site{" "}
          <a href="https://beyondthecurve.cc" target="_blank">
            here
          </a>
          !
        </p>
      </div>
    </div>
  ),
  "https://github.com/beyondthecurve/beyondthecurve.github.io"
);
