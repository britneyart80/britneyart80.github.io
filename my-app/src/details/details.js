import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styles from "./details.module.scss";

const CodeDetails = ({type}) => {
  const { id } = useParams();
  let [detail, setDetail] = useState();

  useEffect(() => {
    const path = `${id}/${id}`;
    const promise = import("../pageDetails/" + path);
    promise.then((d) => {
      setDetail(d.default);
    });
  }, []);

  return detail && detail.content;
};

export default CodeDetails;
