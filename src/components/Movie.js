import React from "react";
import "./style.css";

const Movie = (props) => {
  const {poster_path,title,vote_average,original_language,overview,release_date}=props.resp;
  
  return (
    <>
    
      <div className="show">
        <div className="img">
          <img
            src={poster_path}
            width="100%"
            alt="Movie.img"
          />
        </div>
        <div className="info">
          <h2 className="M-name">{title}</h2>
          <div className="extra">
            <div className="rep">release_date: {release_date}</div>
            <div className="rep">language:{original_language}</div>
            <div className="rep">⭐Imdb Rating:{vote_average}</div>
          </div>
        </div>
      </div>
    
    </>
  );
};

export default Movie;
