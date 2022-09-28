import PageDetail from "../pageDetail";
import styles from "./asics.module.scss";

export default new PageDetail(
  "ASICS Digital Co-op",
  new Date(2020, 0),
  new Date(2020, 11),
  "experiences/asics.gif",
  "JS, HTML/CSS, Salesforce",
  (
    <div className={styles.content}>
      <p>
        ASICS Digital are the digital innovators of the leading athletics brand,
        ASICS. As a Software Engineering Co-op on the Trust pod, I was in charge
        of fixing bugs and developing new checkout features. We worked in a
        salesforce integrated codebase and much of the code is linked to
        salesforce configurations. Since checkout is an extremely important part
        of the pipeline, it was integral that code was always thoroughly tested
        through rounds of QA. After finishing my 6 month full-time co-op, I
        continued working as a part time software engineer for 6 months.
      </p>
      <h5>Highlight: Brand Mode</h5>
      <p>
        In response to Covid-19 shipping blockages in certain areas of the
        world, I worked with a group of senior engineers to develop 'Brand
        mode'- a set of configurations that would allow us to toggle checkout on
        and off depending on region and locale. This solved the issue by
        stopping the customer from checking out if they were in a country that
        ASICS could not ship to. I was tasked with implementing feature flags
        into the code, allowing us to turn brand mode on and off for different
        regions. Through this experience, I not only learned how experienced
        teams work together under time pressure, but also got to gain experience
        in how to come up with creative solutions for real-world problems.
      </p>
    </div>
  )
);
