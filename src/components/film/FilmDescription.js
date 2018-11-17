import React from 'react';

const FilmDescription = (props) => {
  const { film } = props;

  return (
    <div className="film-page">
      <img className="poster" src={film.picture} alt={film.title} />
      <div className="film-info">
        <div className="film-raiting-info">
          <div className="raiting-info-item">
            <h3>Raiting</h3>
            <p>{film.rating}</p>
          </div>
          <div className="raiting-info-item">
            <h3>Your Raiting</h3>
            <p>{film.personal.rating}</p>
          </div>
        </div>
        <div className="top-film-info">
          <p>{film.yearAllowed}</p>
          <p>{film.time}</p>
          <p>{film.categories.join(", ")}</p>
          <p>{film.date.toLocaleString('eng', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          })}</p>
        </div>
        <div className="film-info-list">
          <h4>Stars</h4>
          <p>{film.stars.join(", ")}</p>
          <h4>Director</h4>
          <p>{film.director}</p>
          <h4>Writer</h4>
          <p>{film.writer}</p>
        </div>
        <p className="description">{film.description}</p>
      </div>
    </div>
  );
}

export default FilmDescription;