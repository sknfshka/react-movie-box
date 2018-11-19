import React from 'react';

let FilmViewTop = ({ film, doSwitchFavorite, userId }) => {

  let headerStyle = {
    backgroundImage: 'url(' + film.backgroundPicture + ')'
  }

  return (
      <div className="film-header" style={headerStyle}>
        <h1 className="film-title">{film.title}</h1>
        <div className="personal-buttons">
          <div className={"button favorite-button" + (film.personal.isFavorite ? " active" : "")}
            onClick={() => doSwitchFavorite(film.id, userId)}>Favorite<img src="/images/star-white.svg" role="presentation" />
          </div>
        </div>
      </div>
    )
}

export default FilmViewTop;
