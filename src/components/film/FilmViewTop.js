import React from 'react';

const FilmViewTop = (props) => {
  const { title, backgroundPicture, isFavorite } = props;

  var headerStyle = {
    backgroundImage: 'url(' + backgroundPicture + ')',
  };

  return (
    <div className="film-header" style={headerStyle}>
      <h1 className="film-title">{title}</h1>
      <div className="personal-buttons">
        <div className="button watch-button">Watch<img src="/images/play-button-white.svg" role="presentation" /></div>
        <div className={"button favorite-button" + (isFavorite ? " active" : "")}>Favorite<img src="/images/star-white.svg" role="presentation" />
        </div>
      </div>
    </div>
  );
}

export default FilmViewTop;