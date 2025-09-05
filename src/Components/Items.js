import React from "react";
import ItemCard from "./ItemCard";
import "../Styles/Items.css";

const Items = ()=>{
    return(
        <div id="items-container">
                <ItemCard src="/Products/iphone01.png" name="Iphone 16" rating="4.4" ratingCount="50" actualPrice={70000.00} currentPrice={52000.00} deliveryDate="9th Sep"/>
                <ItemCard src="/Products/iphone02.png" name="Iphone 16" rating="4.4" ratingCount="50" actualPrice={70000.00} currentPrice={52000.00} deliveryDate="9th Sep"/>
                <ItemCard src="/Products/iphone03.png" name="Iphone 16" rating="4.4" ratingCount="50" actualPrice={70000.00} currentPrice={52000.00} deliveryDate="9th Sep"/>
                <ItemCard src="/Products/iphone04.png" name="Iphone 16" rating="4.4" ratingCount="50" actualPrice={70000.00} currentPrice={52000.00} deliveryDate="9th Sep"/>
                <ItemCard src="/Products/iphone05.png" name="Iphone 16" rating="4.4" ratingCount="50" actualPrice={70000.00} currentPrice={52000.00} deliveryDate="9th Sep"/>
                <ItemCard src="/Products/iphone06.png" name="Iphone 16" rating="4.4" ratingCount="50" actualPrice={70000.00} currentPrice={52000.00} deliveryDate="9th Sep"/>
                <ItemCard src="/Products/iphone07.png" name="Iphone 16" rating="4.4" ratingCount="50" actualPrice={70000.00} currentPrice={52000.00} deliveryDate="9th Sep"/>
                <ItemCard src="/Products/iphone08.png" name="Iphone 16" rating="4.4" ratingCount="50" actualPrice={70000.00} currentPrice={52000.00} deliveryDate="9th Sep"/>
                <ItemCard src="/Products/iphone09.png" name="Iphone 16" rating="4.4" ratingCount="50" actualPrice={70000.00} currentPrice={52000.00} deliveryDate="9th Sep"/>
                <ItemCard src="/Products/iphone10.png" name="Iphone 16" rating="4.4" ratingCount="50" actualPrice={70000.00} currentPrice={52000.00} deliveryDate="9th Sep"/>
                <ItemCard src="/Products/iphone11.png" name="Iphone 16" rating="4.4" ratingCount="50" actualPrice={70000.00} currentPrice={52000.00} deliveryDate="9th Sep"/>
        </div>
    );
}

export default Items;