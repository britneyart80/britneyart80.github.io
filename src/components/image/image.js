import { useEffect, useState } from "react";
import { MediaBox, Parallax } from "react-materialize";
import styles from "./image.module.scss";

const Image = ({ path, boxed, parallax }) => {
  let [image, setImage] = useState();
  useEffect(() => {
    const promise = import(`../../img/${path}`);
    promise.then((i) => {
      setImage(i.default);
    });
  }, []);

  if (boxed) {
    return (
      image && (
        <div>
          <MediaBox
            id={`mediaBox_${image}`}
            options={{
              inDuration: 275,
              onCloseEnd: null,
              onCloseStart: null,
              onOpenEnd: null,
              onOpenStart: null,
              outDuration: 200,
            }}
          >
            <img className={styles.image} src={image} />
          </MediaBox>
        </div>
      )
    );
  } else if (parallax) {
    return (
      image && (
        <Parallax
          image={<img className={styles.image} alt={path} src={image} />}
          options={{
            responsiveThreshold: 0,
          }}
        />
      )
    );
  } else {
    return image && <img className={styles.image} src={image} alt={path} />;
  }
};

export default Image;
