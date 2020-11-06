import React from "react";
import "./CollectionItem.styles.scss";

const CollectionItem = ({ id, imageUrl, name, price }) => {
  return (
    <div className="collection-item" key={id}>
      <div
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
        alt=""
        className="image"
      />{" "}
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
    </div>
  );
};

export default CollectionItem;
