import PageDetail from "../pageDetail";
import styles from "./tesla.module.scss";

export default new PageDetail(
  "Tesla",
  new Date(2023, 2),
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
        C-suite (and Mr Musk!). I truly believe that creating software products
        that people love to use is just as important as the data we are
        displaying. Thus I also started a component library and design system
        that ended up speeding up our prototype process and allowed us to gain
        more detailed and accurate user feedback. Because of this, our data
        platform has become the #1 place our engineers and production leaders to
        go to for kpi metrics.
      </p>
      <h5>The Data</h5>
      <p>
        With any data analytics platform, ensuring clean, accurate and low
        latency data is crucial. I worked on a handful of critical data
        pipelines using Airflow jobs and a clickhouse database (optimized for
        aggregations!). With these projects we're able to create datasources
        that are available nowhere else in Tesla, and enable us to build unique
        and custom solutions for our customers.
      </p>
      <h5>The System</h5>
      <p>
        With a product as complex as a cybertruck cell, Tesla has built multiple
        in-house tools to provide insights on many different aspects of the
        manufacturing line. For example, while we work on high level metrics,
        other platforms focus on machine level data. Part of my role has been
        the exciting job of merging all those products together. To do this, I'm
        working with a team of brilliant UI engineers to build a new app that
        brings all those metrics into one shared place. With this, i've had the
        opportunity to work on a wide distributed system of applications and
        servers. I lead redesigns and reworks of existing applications to create
        a cohesive and unuified system, and am currently also working on a new
        service that centralizes common configurations.
      </p>
    </div>
  )
);
