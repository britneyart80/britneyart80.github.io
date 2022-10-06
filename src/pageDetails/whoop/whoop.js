import Image from "../../components/image/image";
import PageDetail from "../pageDetail";
import styles from "./whoop.module.scss";
import { Row, Col } from "react-materialize";

export default new PageDetail(
  "WHOOP Co-op",
  new Date(2021, 6),
  new Date(2021, 11),
  "experiences/whoop.gif",
  "ReactJS, Material UI, Java, PostgreSQL, UX Research/Design, Design Systems",
  (
    <div className={styles.content}>
      <p>
        Whoop is a fast-growing fitness wearable startup and during Fall 2020 I
        worked on the Enterprise team (now known as Whoop Unite) as a Web
        Developer Co-op. Whoop sells wearable straps and the Enterprise team is
        responsible for building the new B2B solution for Whoop. My role as a
        Web developer was to build out major features on the Whoop Unite
        dashboard such as on/offboarding and account management. I collaborated
        daily with team members to design and build primarily front-end
        features, but also implemented back-end api endpoints. Below are
        highlights of some of the features I worked on during my time at Whoop.
        <br />
        <br />
        Note: I worked on features before launch and certain features may have
        changed over time! All information shown in the screenshots are mock
        information to respect the privacy of the company.
      </p>

      <h5>Highlight #1: CSM Account Dashboard</h5>
      <p>
        One of the major features I devleoped was the Customer Success Manager
        management dashboard. The purpose of this dashboard was for customer
        success managers to be able to view all their accounts and account stats
        in one centralized dashboard. For this feature I was the sole developer
        for both the front-end interface as well as the backend api endpoints.
      </p>
      <p>
        This feature was accessible only to those with the correct permissions
        (i.e CSMs and employees), which were enforced in the backend for
        security. I collaborated with the senior back end engineer to make
        decisions on what attributes were needed to display the aggregated data
        shown on the designs. Then I implemented the SQL query to grab all
        relevant information from across various tables. After testing and
        ensuring the robustness of the endpoints, I implemented the front-end in
        React. The final product allowed CSM's to gain an overview of their
        accounts and aggregated data, greatly reducing the amount of time spent
        searching for information, and click into it to view more details about
        the members in each account.
      </p>

      <Row className={styles.centerFlex}>
        <Image path={"whoop/csm.png"} />
      </Row>

      <h5>Highlight #2: Offboarding / Onboarding</h5>
      <Row className={styles.centerFlex}>
        <Col s={12} l={7} className={styles.centerFlex}>
          <Image path={"whoop/offboarding.png"} />
        </Col>
        <Col s={12} l={5}>
          <p>
            I was in charge of the implementation for the front-end for our
            offboarding flow. This flow is used when enterprise accounts want to
            offboard a member from an account. I collaborated with design to
            discuss UI/UX implications and error states before and during
            development of this feature.
          </p>
        </Col>
      </Row>
      <Row className={styles.centerFlex}>
        <Col className={styles.centerFlex} s={12} l={7}>
          <Image path={"whoop/onboarding.png"} />
        </Col>
        <Col s={12} l={5}>
          <p>
            For the onboarding flow, we needed a clear way to review invitee
            emails after uploading/inputting them. I was tasked with designing
            the review process for the invite flow as well as developing it. The
            design went through multiple iterations with design before approval
            and implementation.
          </p>
        </Col>
      </Row>
      <h5>Highlight #3: Concealed Mode</h5>
      <p>
        As functionality grew, the dashboard needed account settings to manage
        different use cases. One of these settings was 'Concealed mode', which
        essentially hid collected data from users so they cannot introduce bias
        (for medical cases). My goal was to design the page as well as implement
        it in the front and back end. I collaborated with the designer to design
        the implemented page as well as future iterations of the page.
      </p>
      <Row className={styles.concealedImg}>
        <Col m={12} l={6}>
          <Image path={"whoop/concealed1.png"} />
        </Col>
        <Col m={12} l={6}>
          <Image path={"whoop/concealed2.png"} />
        </Col>
      </Row>
      <div className={styles.highlight}>
        <h5>Highlight #4: Typography Design System</h5>
        <p>
          I took on a side project in an effort to standardize how the web teams
          were styling applications. Throughout this project, I collaborated
          with designers to come up with and delivered a new design system along
          with a storybook library, which impacted all 3 web teams across the
          software department at Whoop.
        </p>
        <Row className={styles.centerFlex}>
          <Col className={styles.centerFlex} s={12} l={7}>
            <Image path={"whoop/typography.png"} />
          </Col>
          <Col className={styles.centerFlex} s={12} l={5}>
            <p>
              The first step in creating the design system was auditing. I
              collaborated with design leaders across all 3 departments to
              understand the current design systems in place and design
              practices, as well as collect samples from design screens. I
              compiled a chart of how typography is being used across the web
              teams so that I could easily compare them.
            </p>
          </Col>
        </Row>
        <Row className={styles.centerFlex}>
          <Col className={styles.centerFlex} s={12} l={7}>
            <Image path={"whoop/recommendation.png"} />
          </Col>
          <Col className={styles.centerFlex} s={12} l={5}>
            <p>
              I composed a design system recommendation that was a middle ground
              for all the similarities and differences after comparing them
              using the above chart. I kept in mind that our customer facing
              styles should take priority, as any large changes on that end can
              disrupt the user experience and have larger consequences for the
              brand image.
            </p>
          </Col>
        </Row>
        <p>
          After multiple rounds of approvals and tweaking, I documented and
          built the design system into a shared storybook library so developers
          could easily implement it into the code base. Type styles were only
          applied within ".whoop-typography" containers so they were opt-in.
          Furthermore, the design system accounted for multiple display widths
          and perfectly aligned with the existing mobile design system, which
          ensures scalability and creates consistentcy across the brand.
        </p>
        <Row className={styles.centerFlex}>
          <Col className={styles.centerFlex} s={12} l={7}>
            <Image path={"whoop/spacing.png"} />
          </Col>
          <Col className={styles.centerFlex} s={12} l={5}>
            <p>
              In addition to creating a typography design system, the design
              team decided that we wanted to move towards a 4px grid system.
              This creates visual comfort for the user. To do this, I
              implemented a spacing library onto storybook so developers can
              easily access and implement predefined space using classes and
              variables.
            </p>
          </Col>
        </Row>
      </div>
      <p>
        I want to give a huge shoutout to the amazing team I got to work with!
        Thank you so much to Mark Flores and my enterprise team, as well as the
        incredible design team for such an amazing co-op experience. :)
      </p>
    </div>
  )
);
