import React from "react";
import image from "./logo.jpg";
import "./Moviedetail.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Cast from "./Cast";
import Card from "./Card";
import CastCard from "./CastCard";

const Moviedetail = (title, popularity) => {
  const [movie, setMovie] = useState({});
  const [castDetail, setCastDetail] = useState([]);
  const params = useParams();

  useEffect(() => {
    const getData = async () => {
      const url = `https://api.themoviedb.org/3/movie/${params.id}?api_key=c45a857c193f6302f2b5061c3b85e743&language=en-US&page=1`;

      try {
        const resp = await fetch(url);
        const data = await resp.json();
        console.log(data);
        setMovie(data);
      } catch (err) {
        console.error(err);
      }
    };

    getData();
  }, []);

  useEffect(() => {
    const getData = async () => {
      const url = `https://api.themoviedb.org/3/movie/${params.id}/credits?api_key=c45a857c193f6302f2b5061c3b85e743&language=en-US&page=1`;

      try {
        const resp = await fetch(url);
        const data = await resp.json();
        console.log(data, "cast data");
        setCastDetail(data.cast);
      } catch (err) {
        console.error(err);
      }
    };

    getData();
  }, []);

  return (
    <>
      <div className="box">
        <div className="container">
          <div>
            <img src={image} alt={title} className="card-image" />
          </div>
          <div>
            <h1>{movie.title}</h1>
            <h2>Rating :{movie.vote_average}</h2>
            <p>{movie.runtime}</p>
            <p> Science fiction, Action, Adventure</p>
            <p>Release Date : {movie.release_date}</p>
          </div>
        </div>
        <div className="box2">
          <h1>Overview</h1>
          <p>{movie.overview}</p>
        </div>
      </div>
      {castDetail && castDetail.length > 0 ? (
        castDetail.map((cardData, index) => (
          <CastCard
            key={index}
            title={cardData.original_name}
            rating={cardData.character}
            image={
              cardData.profile_path
                ? `https://image.tmdb.org/t/p/w500/${cardData.profile_path}`
                : null
            }
          />
        ))
      ) : (
        <p>No data available.</p>
      )}
    </>
  );
};

export default Moviedetail;
