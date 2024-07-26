import { useEffect, useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill, BsCircle } from "react-icons/bs";

export default function ImageSlider({ BASE_URL }) {
  const [images, setImages] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [curIndex, setCurIndex] = useState(0);

  useEffect(
    function () {
      async function fetchImages() {
        try {
          setIsLoading(true);
          const res = await fetch(BASE_URL);
          const data = await res.json();

          if (res.ok) {
            console.log(data);
            setImages(data);
          }
        } catch (e) {
          setError(e.message);
        } finally {
          setIsLoading(false);
        }
      }
      fetchImages();
    },
    [BASE_URL]
  );

  return (
    <div>
      {isLoading ? (
        <p>Loading</p>
      ) : (
        images.map((img, i) =>
          i === curIndex ? (
            <Image
              img={img.urls.small}
              updateCurIndex={setCurIndex}
              maxSize={images.length}
              key={i}
              index={i}
            />
          ) : null
        )
      )}
    </div>
  );
}

function Image({ img, updateCurIndex, maxSize, index }) {
  const ImgStyles = {
    border: "2px solid black",
    maxHeight: "400px",
    maxWidth: "400px",
    padding: "5px",
  };

  const arrowStyles = {
    fontSize: "1.5rem",
    cursor: "pointer",
  };

  return (
    <div>
      <span
        style={arrowStyles}
        onClick={() => {
          if (index === 0) updateCurIndex(maxSize - 1);
          updateCurIndex((cur) => cur - 1);
        }}
      >
        <BsArrowLeftCircleFill />
      </span>
      <img src={img} alt="img" style={ImgStyles} />
      <span
        style={arrowStyles}
        onClick={() => {
          if (index === maxSize - 1) updateCurIndex(0);
          updateCurIndex((cur) => cur + 1);
        }}
      >
        <BsArrowRightCircleFill />
      </span>
    </div>
  );
}
