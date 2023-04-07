import React from "react";
import ReactStars from "react-rating-stars-component";

const EmptyIcon = () => {
  return (
    <>
      <img src="/emptystar.svg" alt="star" />
    </>
  );
};

const HalfIcon = () => {
  return (
    <>
      <img src="/halfstar.svg" alt="star" />
    </>
  );
};

const FilledIcon = () => {
  return (
    <>
      <img src="/filledstar.svg" alt="star" />
    </>
  );
};

function Rating({ totalStars, value }) {
  return (
    <div>
      <ReactStars
        count={totalStars}
        size={20}
        activeColor="#ffd700"
        isHalf={true}
        emptyIcon={<EmptyIcon />}
        halfIcon={<HalfIcon />}
        filledIcon={<FilledIcon />}
        edit={false}
        value={value}
      />
    </div>
  );
}

export default Rating;
