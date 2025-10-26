import React from "react";

const HeadingImageSection = ({
  title,
  imageUrl,
  imageHeight = "auto",
  containerClass = "",
  titleClass = "",
  imgClass = "",
}) => {
  return (
    <div
      className={`w-full max-w-[58.125rem] mx-auto px-[0.25rem] sm:px-[0.5rem] lg:px-0 border-b border-gray-300 pb-4 ${containerClass}`}
    >
      {/* Heading */}
      <h2
        className={`text-center font-semibold mb-4 hover:text-blue-600 ${titleClass}`}
        style={{
          fontSize: "clamp(2rem, 4vw, 3.36rem)",
          lineHeight: "clamp(2.8rem, 5vw, 4.704rem)",
        }}
      >
        {title}
      </h2>

      {/* Large Image */}
      <div className="w-full overflow-hidden rounded">
        <img
          src={imageUrl}
          alt={title}
          className={`w-full object-cover transition-transform duration-500 hover:scale-105 cursor-pointer ${imgClass}`}
          style={{ height: imageHeight }}
        />
      </div>
    </div>
  );
};

export default HeadingImageSection;
