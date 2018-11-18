import React from 'react';
import { Link } from 'react-router';

const calculateColor = (rating) => {
  if (rating >= 7) return "film__rating_excelent";
  else if (rating >= 4) return "film__rating_good";
  else return "film__rating_bad";
}

const Film = ({ film }) => {
  return (
    <div className="film">
      <div className="film__poster"><Link className="film__poster-link" to={`/film/${film.id}`}><img src={film.picture}
        alt={film.title + " poster"} /></Link></div>
      <Link className="film__title" to={`/film/${film.id}`}>{film.title}</Link>
      <div className="film__date">{film.date.toLocaleString('eng', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      })}
      </div>
      <div className={"film__rating " + calculateColor(film.rating)}>{film.rating}</div>
    </div>
  );
}

export default Film;