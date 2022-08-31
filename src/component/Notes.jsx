import React, { useState } from "react";
import "./Notes.css";
import Not from "./Not";

const Notes = () => {
  const [Note, setNote] = useState({
    title: "",
    content: "",
  });

  const [Noti, setNot] = useState([]);
  const Inp = (e) => {
    const { name, value } = e.target;

    setNote((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
    console.log(Note);
  };
  const reload = () => {
    document.getElementById("t1").value = "";
    document.getElementById("i1").value = "";
  };

  const Add = () => {
    console.log(Noti);
    setNot((pre) => {
      return [...pre, Note];
    });
    console.log(Noti);
    reload();
  };
  const Deli = (id) => {
    console.log(id);
    setNot((valu) =>
      valu.filter((cu, i) => {
        return i !== id;
      })
    );
  };
  const Edt=(id,ti,cont)=>{
    document.getElementById("t1").value = ti;
    document.getElementById("i1").value = cont;
    Deli(id);

  }
  
  return (
    <>
      <div className="main1">
        <div className="stick">
          <h2>📕 Varun Notes</h2>
        </div>
        <div className="text">
          <input
            id="i1"
            type="text"
            placeholder="Title"
            
            name="title"
            onChange={Inp}
          />
          <textarea
            
            name="content"
            id="t1"
            placeholder="Write note here.."
            onChange={Inp}
          ></textarea>
          <i className="rel fa-solid fa-rotate-right" onClick={reload}></i>
          <i className="dlt fa-solid fa-plus" onClick={Add}></i>
        </div>
        <div className="content">
          <div className="card">
            <h3>hii</h3>
            <p>Welcome to Note App</p>
            <i className="edt fa-solid fa-pen-to-square"></i>
            <i className="dlt fa-solid fa-trash-can"></i>
          </div>

          {Noti.map((ar, i) => {
            return (
              <Not
                key={i}
                id={i}
                ti={ar.title}
                cont={ar.content}
                onDeli={Deli}
                onEdit={Edt}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Notes;
