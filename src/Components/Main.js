import React from "react";
import '../Styles/Main.css';
import Items from "./Items";

const Main = ()=>{
    const userSideBar = document.getElementById("user-sidebar");
    console.log(userSideBar);
    return(
        <main>
            <Items/>
        </main>
    );
}
export default Main;