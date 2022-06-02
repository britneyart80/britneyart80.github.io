import styles from "./tableOfContents.module.scss";
import { useState, useEffect, useRef } from "react";

const TableOfContents = () => {
  const [headings, setHeadings] = useState([]);

  useEffect(() => {
    const elements = Array.from(document.querySelectorAll("h5"));
    const headings = [];
    elements.forEach((heading) => {
      const { innerText: title, dataset } = heading;
      const dataId = dataset.id;
      headings.push({ dataId, title });
    });
    setHeadings(headings);
  }, []);

  return (
    <div className={styles.sticky} aria-label="Table of contents">
      <ul>
        {headings.map((heading, index) => (
          <li key={index}>
            <a
              href={`#${heading.dataId}`}
              onClick={(e) => {
                e.preventDefault();
                document.querySelector(`#${heading.dataId}`).scrollIntoView({
                  behavior: "smooth",
                });
              }}
            >
              {heading.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TableOfContents;
