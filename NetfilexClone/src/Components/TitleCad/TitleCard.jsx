import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import './TitleCard.css';
// import card_data from '../../assets/cards/Cards_data';

const TitleCard = ({ title, category }) => {
  const [apidata, setApiData] = useState([]);

  const cardsRef = useRef();

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ODAxY2QwNzVjMTU1YTU4Nzk3NmJmNzIyMmEyMGYyOSIsIm5iZiI6MTczNjE1NTk1Mi4zNDYsInN1YiI6IjY3N2JhMzMwMTU1MjFmODNkOTY3MTJmZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.OJpl4fL9WTbFo3O6cTr89tyEUAXkIhKe7BqFp4iJWhc',
    },
  };

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${
        category ? category : 'now_playing'
      }?language=en-US&page=1`,
      options
    )
      .then((res) => res.json())
      .then((res) => setApiData(res.results))
      .catch((err) => console.error(err));
    cardsRef.current.addEventListener('wheel', handleWheel);
  }, []);
  const handleWheel = (events) => {
    events.preventDefault();
    cardsRef.current.scrollLeft += event.deltaY;
  };

  return (
    <div className="titleCards">
      <h2>{title ? title : 'Popular on Netflix '}</h2>
      <div className="card-list" ref={cardsRef}>
        {apidata.map((card, index) => {
          return (
            <>
              <Link to={`/player/ ${card.id}`}>
                <div className="card" key={index}>
                  <img
                    src={`https://image.tmdb.org/t/p/w500` + card.poster_path}
                    alt=""
                  />
                  <p>{card.original_title}</p>
                </div>
              </Link>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default TitleCard;
