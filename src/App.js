import React, { useState, useEffect } from "react";
import Movie from "./components/Movie";
import Header from "./components/Header";

const App = () => {
  const [Name, setName] = useState("Iron Man");
  const [data, setdata] = useState([]);

  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "11953919f1msha36b523db985331p136566jsnef85400936d7",
        "X-RapidAPI-Host": "advanced-movie-search.p.rapidapi.com",
      },
    };

    let url = `https://advanced-movie-search.p.rapidapi.com/search/movie?query=${Name}&page=1`;
    
        fetch(url, options)
      .then((res) => res.json())
      .then((data) => {
        console.log(data.results);
        setdata(data.results);
      });
    
    
  }, [Name]);

  const value = (name) => {
    setName(name);
    console.log(Name);
  };

  return (
    <>
      <div className="main">
        <Header getV={value}  value={Name}/>
        <div className="cont">
        {data?.map((ig, i) => (
          <Movie key={i} resp={ig} />
        ))}
        </div>
      </div>
    </>
  );
};


export default App;
