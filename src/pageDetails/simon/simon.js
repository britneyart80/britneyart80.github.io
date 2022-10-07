import PageDetail from "../pageDetail";
import styles from "./simon.module.scss";

export default new PageDetail(
  "SIMON Markets (now iCapital)",
  new Date(2022, 5),
  new Date(2022, 7),
  "experiences/simon.png",
  "React, Redux, Figma",
  (
    <div className={styles.content}>
      <p>
        Disclaimer: Due to company confidentiality policies, I am unable to
        attach images and content from the internal portal I built over the
        summer.
      </p>
      <h5>Overview</h5>
      <p>
        Simon Markets (now iCapital) is an alternative investments platform that
        aims to be the one stop shop for financial advisors! The company is
        based in New York City, where I was stationed, and was recognized as one
        of Built In's "2021 Best Places to Work", "Best Small Places to Work",
        and "Best Paying Companies". Over the summer of 2022, I worked as a UI
        Engineer for the Structured Investments (SI) team.
      </p>
      <h5>Project Overview</h5>
      <p>
        Currently, many financial advisors gather interest for financial
        products through word of mouth or via email etc. This process is very
        manual and lacks organization. To help our clients address this issue, I
        worked in a team with one design intern and one backend intern to design
        and develop a crowdsourcing system. The Crowdsourcing Portal would not
        only allow Financial Advisors to create 'Trade Ideas', but it would also
        allow them to see other 'Trade Ideas' and put money into investment
        products that their client is interested in. The portal would also allow
        administrators to approve 'Trade Ideas' and send them to receive bank
        quotes when they were ready.
      </p>
      <h5>The Process</h5>
      <p>
        Throughout the entire summer, the project was extremely collaborative
        between design, backend and the UI. We as interns met regularly to
        discuss design decisions, which we would present to the greater team
        twice a week. Ideas were shared between the UI, design and backend teams
        and it was amazing to see the kind of results that can be produced when
        all minds are brought together. I collaborated especially closely with
        backend, as the architecture greatly impacted how the UI is built. We
        considered aspects such as MVP requirements, scalability, payload
        design, and reusability.
      </p>
      <p>
        This project was my first time using Redux, and it was exciting to see
        how the framework is applied in an application that processes huge
        amounts of data. With only 10 weeks to learn Redux, gather requirements,
        design and implement the portal, it was an intensive and exciting and
        learning environment! At the end of the summer, I was able to build the
        complete UI. I left Simon with a new Crowdsourcing portal as well as a
        bucket full of new learnings.
      </p>
      <h5>Special Thanks</h5>
      <p>
        Thank you so much to my manager, Alana, for advocating and rooting for
        me the entire summer! Big shoutout as well to all the amazing engineers
        I worked with, who not only taught me with great patience but embraced
        me into the incredible company culture at SIMON. Best of luck with the
        iCapital Acquisition :)
      </p>
      <h5>Recommendations</h5>
      <div className={styles.recommendations}>
        <h6>Alana Ruth - UI Engineer @ Simon Markets (now iCapital)</h6>
        <p>
          "From the day I met Britney, I knew that her strong communication
          skills, desire to learn, and her extensive real world engineering
          experience would propel her to make tangible impacts to our team. I
          was Britney's manager for the Summer 2022 internship program at SIMON
          (now iCapital); I could not have wished for a more delightful and
          driven mentee. In just 10 weeks, Britney successfully implemented a
          new Structured Investments workflow platform using React and Redux,
          the latter of which she did not have experience in. Additionally,
          Britney took the initiative to lead the Backend and UX interns in
          collaborating on their full-stack project, ensuring a fluid,
          user-friendly experience. Despite our optional in-office policy,
          Britney's passion for her work and her colleagues drove her to come
          into the office daily with a positive and productive attitude. I would
          highly recommend Britney as a strong technical and social addition to
          any team."
        </p>
      </div>
    </div>
  )
);
