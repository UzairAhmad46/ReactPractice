import React, { useEffect, useState } from 'react';
import back_arrow_icon from '../../assets/back_arrow_icon.png';
import './Player.css';
import { useNavigate, useParams } from 'react-router-dom';

const Player = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [apidata, setApiData] = useState({
    name: '',
    key: '',
    published_at: '',
    typeof: '',
  });
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
      `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
      options
    )
      .then((res) => res.json())
      .then((res) => setApiData(res.results[0]));
    // .catch((err) => console.error(err));
  }, [id]);

  return (
    <div className="player">
      <img
        src={back_arrow_icon}
        alt=""
        onClick={() => {
          navigate(-2);
        }}
      />
      <iframe
        src={`https://www.youtube.com/embed/${apidata.key}`}
        frameBorder="0"
        width="90%"
        height="90%"
        title="trailer "
        allowFullScreen
      ></iframe>
      <div className="player-info">
        <p>{apidata.published_at.slice(0, 10)}</p>
        <p>{apidata.name} </p>
        <p>{apidata.Type}</p>
      </div>
    </div>
  );
};

export default Player;
