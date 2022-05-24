import { useEffect, useState } from "react";

const Image = ({ path, classes }) => {
    let [image, setImage] = useState();
    useEffect(() => {
        const promise = import(`../../img/${path}`)
        promise.then((i) => {setImage(i.default)});
    }, [])
    return image && <img src={image} className={classes}/>
}

export default Image;