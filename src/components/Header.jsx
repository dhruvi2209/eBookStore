import React from "react";
import { favicon } from "../assets/images";
import SearchBar from "./SearchBar";
function Header() {
  return (
    <>
        <div style={{display:"flex",flexDirection: 'row',alignItems:'center',justifyContent:'center'}}>

       
        <img src={favicon} height={60} width={60} />&nbsp;&nbsp;
        <SearchBar/>
        </div>
     
    </>
  );
}

export default Header;
