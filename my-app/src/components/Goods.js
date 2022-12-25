import React, { Component } from "react";
import items from "./etsy.json";
import Quantity from "./Quantity";
import Price from "./Price";

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
            <p className="item-title">{item.title.substring(0,50)}</p>
            <Price price={item.price} code={item.currency_code} />
            <Quantity quantity={item.quantity} />
          </div>
          </div>
        </div>
      ) : null
    );
  
    return template;
  };

export default Goods;