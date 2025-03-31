import React from "react";
import "./galleryItem.css";

const GalleryItem = ({ item }) => {
  const rowSpan = Math.ceil(item.height / 10); // Adjust based on `grid-auto-rows`
  
  return (
    <div className="galleryItem" style={{ gridRowEnd: `span ${rowSpan}` }}>
      <img src={item.media} alt="gallery" />
    </div>
  );
};

export default GalleryItem;
