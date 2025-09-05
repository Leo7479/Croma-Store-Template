import React from "react";
import {CircleUser, Computer, CreditCard, Heart, IndianRupee, MapPin, MapPinHouse, Menu, MonitorSmartphone, Package, Pen, ReceiptIndianRupee, Search, ShoppingCart, User } from 'lucide-react';
import '../Styles/Header.css';

const Header = ()=>{
    return(
        <header>
            <nav>
                <h1>crom<span className="umbrella-letter">a</span></h1>
                <span id="menu-span">
                    <input type="checkbox" hidden id="menu-sidebar"/>
                    <Menu/>
                    <label htmlFor="menu-sidebar">Menu</label> 
                </span>
                <span id="search-span">
                    <input type="text" min={0} max={250} placeholder="What are you looking for?"/>
                    <Search/>
                </span>
                <span id="user-section">
                <span id="address-span">
                    <MapPin/>
                    <p>Kolkata, 700030</p>
                    <Pen/>
                </span>
                <span id="user-span">
                    <User/>
                    <ul id="user-sidebar">
                        <li><CircleUser/><span><h1>My Profile</h1><p>Edit your basic details</p></span></li>
                        <li><MapPinHouse/><span><h1>My Address</h1><p>Manage your saved addresses</p></span></li>
                        <li><Package/><span><h1>My Orders</h1><p>View, track, cancel orders or buy again</p></span></li>
                        <li><Heart/><span><h1>My Wishlist</h1><p>Have a look a your favorite products</p></span></li>
                        <li><MonitorSmartphone/><span><h1>My Devices</h1><p>Manage all your logged in devices</p></span></li>
                        <li><ReceiptIndianRupee/><span><h1>My Subscriptions</h1><p>Your Subscribed Services</p></span></li>
                        <li><IndianRupee/><span><h1>Croma Pay</h1><p>Pay with just a touch</p></span></li>
                        <li><CreditCard/><span><h1>My Cards</h1><p>Manage all your cards</p></span></li>
                        <li><CreditCard/><span><h1>My Offers</h1><p>Exclusive offers for you</p></span></li>
                        <li><CreditCard/><span><h1>Service Requests</h1><p>Manage complaints, request, service requests</p></span></li>
                    </ul>
                </span>
                <span id="cart-span">
                    <ShoppingCart/>
                    <p>0</p>
                </span>
                </span>
            </nav>
        </header>
    );
}
export default Header;