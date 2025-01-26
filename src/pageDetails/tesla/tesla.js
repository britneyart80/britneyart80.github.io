import PageDetail from "../pageDetail";
import styles from "./tesla.module.scss";

export default new PageDetail(
  "Tesla",
  new Date(2023, 1),
  null,
  "experiences/tesla.webp",
  "React, Typescript, GraphQL, Python, DBs (CH/PG), Kubernetes",
  (
    <div className={styles.content}>
      <p>
        Disclaimer: Due to company confidentiality policies, I am unable to
        attach images and content from the data analytics platforms we build
      </p>

      <h5>Overview</h5>
      <p>
        I'm so proud and excited to be working on Tesla's in-house data
        analytics system that is used daily by our engineers to drive cybertruck
        battery manufacturing decisions. I've had to honor to work on truly
        impactful projects in a fast paced, highly efficient team. Our team
        focuses on high-level KPI metrics such as yield, throughput and cost for
        every single step in the battery lifecycle.
      </p>
      <h5>The App</h5>
      <p>
        Starting from the core web application, I lead the design and creation
        of multiple analytics dashboards, covering core factory metrics such as
        yield, throughput and scrap cost. These dashboards have become critical
        to the factory and its numbers are used to report weekly number to our
        C-suite (and Mr Musk). They have allowed our production engineers to
        make data-driven decisions and take corrective action to reduce our
        scrap costs by 50%, save millions of dollars of material and improve
        yield by 10%+ for each process within the factory.
      </p>
      <p>
        Within our development team, I noticed a lack of design process which
        caused us to have weak feedback loops with customers, and would often
        waste engineering time to make changes. to solve this I started a
        component library and design system that ended up speeding up our
        prototype process by 90% and allowed us to gain more detailed and
        accurate user feedback. Because of this, our development has decreased
        by 25% and the data platform has become the #1 place our engineers and
        production leaders to go to for kpi metrics.
      </p>
      <h5>The Data</h5>
      <p>
        With any data analytics platform, ensuring clean, accurate and low
        latency data is crucial. I worked on a handful of critical data
        pipelines using Airflow jobs, a clickhouse database and trino data
        lakes. Our pipelines process 14M+ rows of data per day and we take into
        consideration key factors such as scalability and data latency to make
        decisions on whether certain data should follow ETL or ELT processing.
        <p>
          With these projects I have been able to contribute to datasources that
          are available nowhere else in Tesla, and enable us to build unique and
          custom solutions for our customers.
        </p>
      </p>
      <h5>The System</h5>
      <p>
        With a product as complex as a cybertruck cell, Tesla has built multiple
        in-house tools to provide insights on many different aspects of the
        manufacturing line. For example, while we work on high level metrics,
        other platforms focus on machine level data. Part of my role has been
        the exciting job of merging all those products together. To do this, I'm
        working with a team of brilliant UI and distributed systems engineers to
        build a new app that brings all those metrics into one shared place.
        With this, I've had the opportunity to work on a wide distributed system
        of applications and servers. I lead redesigns and reworks of existing
        applications to create a cohesive and unuified system.
      </p>
      <p>
        I am currently also working on a GraphQL service to streamline
        configuration management across 4 teams and elimiate individually
        managed datasets. This not only reduces data redundancies by 50% but
        also ensures scalable and safe management of configuration data.
      </p>
    </div>
  )
);
