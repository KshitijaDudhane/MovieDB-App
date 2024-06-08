import React, { useEffect, useState } from "react";
import Card from "./Card";
import { Link } from "react-router-dom";

const Upcoming = ({ searchQuery }) => {
  const [movieData, setMovieData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    const fetchMovies = async (url) => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setMovieData((prevData) => [...prevData, ...data.results]);
        setHasMore(data.page < data.total_pages); // Check if there are more pages
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    const baseUrl = searchQuery
      ? `https://api.themoviedb.org/3/search/movie?api_key=c45a857c193f6302f2b5061c3b85e743&language=en-US&query=${searchQuery}&page=${currentPage}&include_adult=false`
      : `https://api.themoviedb.org/3/movie/upcoming?api_key=c45a857c193f6302f2b5061c3b85e743&language=en-US&page=${currentPage}`;

    fetchMovies(baseUrl);
  }, [searchQuery, currentPage]);

  const loadMoreMovies = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  return (
    <div className="card-listing">
      {movieData && movieData.length > 0 ? (
        <>
          {movieData.map((cardData) => (
            <Link to={`/movie/${cardData.id}`} key={cardData.id}>
              <Card
                title={cardData.title}
                rating={cardData.vote_average}
                image={
                  cardData.poster_path
                    ? `https://image.tmdb.org/t/p/w500/${cardData.poster_path}`
                    : null
                }
              />
            </Link>
          ))}
          {hasMore && (
            <button className="load-more" onClick={loadMoreMovies}>
              Load More
            </button>
          )}
        </>
      ) : (
        <p>No data available.</p>
      )}
    </div>
  );
};

export default Upcoming;
