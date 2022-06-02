import { useEffect, useState } from "react";
import { MediaBox, Parallax } from "react-materialize";

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
          <img src={image} />
        </MediaBox>
      )
    );
  } else if (parallax) {
    return image && (
      <Parallax
        image={<img alt="" src={image}/>}
        options={{
          responsiveThreshold: 0,
        }}
      />
    );
  } else {
    return image && <img src={image} />;
  }
};

export default Image;
