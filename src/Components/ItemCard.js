import React from "react";
import "../Styles/ItemCard.css";
import {Square, SquareCheckBig, Heart, Star, Truck} from 'lucide-react';

const ItemCard = ({src,name,rating,ratingCount,currentPrice,actualPrice, deliveryDate})=>{
    console.log(src);
    return(
        <div className="item-card">
            <span className="image-section">
                <img src={src} alt="Product"/>
                <span className="product-action-buttons">
                    <button id="addToFavourites"><Heart strokeWidth={"1px"}/></button>
                    <button id="compareTo"><Square strokeWidth={"1px"}/><p>Compare</p></button>
                </span>
            </span>
            <h2>{name}</h2>
            <span className="rating-section">
                <p className="rating">{rating}<Star color="#12daa8"/></p>
                <p className="ratingCount">{ratingCount}</p>
            </span>
            <span className="price-section">
                <p className="currentPrice">₹{parseInt(currentPrice).toLocaleString("en-IN")}</p>
                <p className="actualPrice">₹{parseInt(actualPrice).toLocaleString("en-IN")}</p>
                <span className="savings">
                    (Save ₹{parseInt(actualPrice-currentPrice).toLocaleString("en-IN")} off)
                </span>
                <span className="discount">
                    {
                        parseInt((actualPrice-currentPrice)/actualPrice*100,10)
                    }
                    % Off
                </span>
            </span>
            <span className="delivery-section">
                <Truck/>
                <p>Standard Delivery by <b>{deliveryDate}</b></p>
            </span>
        </div>
    );
}
export default ItemCard;