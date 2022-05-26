import { useEffect, useState } from "react";
import { MediaBox } from "react-materialize";

const Image = ({ path, classes, boxed }) => {
  let [image, setImage] = useState();
  useEffect(() => {
    const promise = import(`../../img/${path}`);
    promise.then((i) => {
      setImage(i.default);
    });
  }, []);
  
  if (boxed) {
    return image && (
      <MediaBox
        id="MediaBox_9"
        options={{
          inDuration: 275,
          onCloseEnd: null,
          onCloseStart: null,
          onOpenEnd: null,
          onOpenStart: null,
          outDuration: 200,
        }}
      >
        <img src={image} className={classes} />
      </MediaBox>
    );
  } else {
    return image && <img src={image} className={classes} />;
  }
};

export default Image;
