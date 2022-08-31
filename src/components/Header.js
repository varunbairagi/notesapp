import React from "react";
import "./style.css";

const Header = (props) => {
  const getValue = (e) => {
    let val = e.target.value;
    
    props.getV(val);
    // console.log(val);
  };
  return (
    <>
      <div className="ip_div">
        <input id="inp" type="text" value={props.value} onChange={getValue} placeholder="Search Movie..." />{" "}
        
      </div>
    </>
  );
};
export default Header;
