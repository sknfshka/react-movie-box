import React from 'react';

const calculateColor = (rating) => {
  if (rating >= 7) return "film__rating_excelent";
  else if (rating >= 4) return "film__rating_good";
  else return "film__rating_bad";
}

const Film = (props) => {
  const { film } = props;
  return (
    <div className="film">
      <div className="film__poster"><a className="film__poster-link" href="http://localhost:8090/film"><img src={film.picture}
        alt={film.title + " poster"} /></a></div>
      <a href="http://localhost:8090/film" className="film__title">{film.title}</a>
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