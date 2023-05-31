import { useEffect, useState } from "react";
import ImageShow from "./ImageShow";

function ImageList({ data }) {
  const [images, setImages] = useState([]);

  useEffect(() => {
    if (data) {
      setImages(data.map((img) => img.urls.small));
    }
  }, [data]);

  return (
    <div>
      {images.map((img, index) => (
        <ImageShow key={index} img={img} />
      ))}
    </div>
  );
}

export default ImageList;
