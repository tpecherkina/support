import React, { Component } from "react";
import items from "./etsy.json";

const Goods = () => {
    const template = items.map((item, index) =>
      item.state === "active" ? (
        <div className="item-list" key={item.listing_id}>
          <div className="item">
            <div className="item-image">
              <a href={item.url}>
                <img
                  src={item.MainImage.url_570xN}
                  alt={item.MainImage.listing_image_id}
                />
              </a>
            </div>
            <div className="item-details">
            <p className="item-title">{item.title}</p>
            <p className="item-price">{item.price}</p>
      <p className="item-quantity">{item.quantity} left</p>
          </div>
          </div>
        </div>
      ) : null
    );
  
    return template;
  };

export default Goods;