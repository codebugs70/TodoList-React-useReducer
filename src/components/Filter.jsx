import React, { useEffect, useState } from "react";
/* import data */
import { images, btns } from "../Data";

const Filter = () => {
  const [active, setActive] = useState(false);
  const [filterImages, setFilterImages] = useState(null);

  /* only run one time when the browser loaded */
  useEffect(() => {
    setFilterImages(images);
  }, []);

  const handleClick = (e) => {
    let btnType = e.target.value;
    setActive(btnType);
    const newFilterImages = images.filter((item) => item.category === btnType);
    btnType === "all"
      ? setFilterImages(images)
      : setFilterImages(newFilterImages);
  };

  return (
    <section>
      <div className="wrapper">
        {/* heading */}
        <h1 className="text-center font-bold text-primary text-5xl mt-3 mb-10">
          Filter Images In React
        </h1>

        {/* Buttons */}
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5 mb-10">
          {btns.map((item, id) => {
            // destruct data
            const { name, value } = item;
            return (
              <button
                onClick={handleClick}
                value={value}
                className={`${
                  active === value ? "bg-fourth" : ""
                } py-3 px-6 border-4 hover:bg-fourth text-sm md:text-lg font-semibold transition-all duration-300 border-solid border-fourth rounded-full`}
                key={id}
              >
                {name}
              </button>
            );
          })}
        </div>

        {/* images */}
        <div className="grid md:grid-cols-3 gap-5">
          {filterImages &&
            filterImages.map((item, id) => {
              // destruct data
              const { img } = item;
              return (
                <div
                  className="border-4 border-solid border-green rounded-md overflow-hidden group"
                  key={id}
                >
                  <img
                    className="w-full h-full group-hover:scale-110 transition-all duration-500  object-cover rounded-md"
                    src={img}
                    alt="demo-img"
                  />
                </div>
              );
            })}
        </div>
      </div>
    </section>
  );
};

export default Filter;
