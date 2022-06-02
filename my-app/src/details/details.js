import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styles from "./details.module.scss";
import { formatDate } from "../utils/utils";
import Image from "../components/image/image";

const CodeDetails = ({ type }) => {
  const { id } = useParams();
  let [detail, setDetail] = useState();

  useEffect(() => {
    const path = `${id}/${id}`;
    const promise = import("../pageDetails/" + path);
    promise.then((d) => {
      setDetail(d.default);
    });
  }, []);

  return (
    detail && (
      <div className={styles.container}>
        <div className={styles.headerContainer}>
          <div className={styles.heading}>
            <h1>{detail.company}</h1>
            <h6>{formatDate(detail.start, detail.end)}</h6>
          </div>
            <Image path={detail.image} parallax />
        </div>
        <div className={styles.content}>
          {detail.content ? (
            detail.content
          ) : (
            <div className={styles.comingSoon}> COMING SOON</div>
          )}
        </div>
      </div>
    )
  );
};

export default CodeDetails;
