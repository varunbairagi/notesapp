import React from "react";
import "./Notes.css";


const Not=(props)=>{
    return (
        <>
        <div className="card" >
                <h3>{props.ti}</h3>
                <p>{props.cont}</p>
                <i className="edt fa-solid fa-pen-to-square"  onClick={()=>props.onEdit(props.id,props.ti,props.cont)}></i>
                <i className="dlt fa-solid fa-trash-can" onClick={()=>props.onDeli(props.id)}></i>
              </div>
        </>
    )

}
export default Not;
