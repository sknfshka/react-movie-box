import React from 'react';
import Film from './parts/Film';

const FilmList = (props) => {
  const films = [];

  props.films.forEach(film => {
    films.push(
      <Film film={film} key={film.id} />
    );
  });
  
  return (
    <div className="films" id="films-container">
      {films}
    </div>
  );
}

export default FilmList;
