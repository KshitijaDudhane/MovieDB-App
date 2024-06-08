import React, { useEffect, useState } from 'react'
import Card from './Card';
import { Link, useParams } from 'react-router-dom';

const Cast = () => {
  const [movieData, setMovieData] = useState([]);
  const params = useParams();
  

useEffect(() => {
  const getData = async () => {
    const url = `https://api.themoviedb.org/3/movie/${params.movie_id}?api_key=c45a857c193f6302f2b5061c3b85e743&language=en-US&page=1`;
    try {
      const resp = await fetch (url);
      const data = await resp.json();
      console.log(data.results);
      setMovieData(data.results);
    } catch (err) {
      console.error(err);
    }
  }

  getData();
}, []);
  return (
    <div className='card-listing'>
    {movieData && movieData.length > 0 ? movieData.map((cardData, index) => (
        <Card
            key={index}
            title={cardData.title}
            rating={cardData.vote_average}
            image={cardData.poster_path ? `https://image.tmdb.org/t/p/w500/${cardData.poster_path}` : null}
            
        />
    )) : <p>No data available.</p>}

</div>
  )
}

export default Cast
