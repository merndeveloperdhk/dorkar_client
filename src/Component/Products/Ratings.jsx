const Ratings = () => {
  return (
    <div className="flex">
      <div className="rating rating-sm">
        <input
          type="radio"
          name="rating-7"
          className="mask mask-star-2 bg-orange-400"
        />
        <input
          type="radio"
          name="rating-7"
          className="mask mask-star-2 bg-orange-400"
          checked
        />
        <input
          type="radio"
          name="rating-7"
          className="mask mask-star-2 bg-orange-400"
        />
        <input
          type="radio"
          name="rating-7"
          className="mask mask-star-2 bg-orange-400"
        />
        <input
          type="radio"
          name="rating-7"
          className="mask mask-star-2 bg-orange-400"
        />
      </div>
      <h1>(0 Reviews)</h1>
    </div>
  );
};

export default Ratings;
