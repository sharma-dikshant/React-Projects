import { useState } from "react";

export default function StarRating({
  size = "48",
  color = "#fff",
  length = 5,
}) {
  const [rating, setRating] = useState(0);
  const [tempRating, setTempRatng] = useState(0);
  return (
    <div
      style={{
        minHeight: "200px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {Array.from({ length: length }, (_, i) => (
        <Star
          key={i}
          size={size}
          color={color}
          onHoverIn={() => setTempRatng(i + 1)}
          onHoverOut={() => setTempRatng(0)}
          tempRating={tempRating}
          onRate={() => setRating(i + 1)}
          isfull={tempRating ? tempRating >= i + 1 : rating >= i + 1}
        />
      ))}
    </div>
  );
}

function Star({
  size,
  color,
  tempRating,
  onHoverIn,
  onHoverOut,
  isfull,
  onRate,
}) {
  const styles = {
    height: size,
    width: size,
    cursor: "pointer",
  };
  return (
    <span
      onMouseEnter={onHoverIn}
      onMouseLeave={onHoverOut}
      onClick={onRate}
      style={styles}
    >
      {isfull ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={size}
          height={size}
          fill={color}
          className="bi bi-star-fill"
          viewBox="0 0 16 16"
        >
          <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={size}
          height={size}
          fill="#000"
          className="bi bi-star-fill"
          viewBox="0 0 16 16"
        >
          <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
        </svg>
      )}
    </span>
  );
}
