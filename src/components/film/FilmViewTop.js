import React from 'react';
import { connect } from 'react-redux';

class FilmViewTop extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      ...props,
      headerStyle: {
        backgroundImage: 'url(' + props.backgroundPicture + ')'
      },
    };
  }

  componentWillReceiveProps = (nextProps) => {
    this.setState({
      isFavorite: nextProps.isFavorite
    });
  }

  render() {
    const { userId, doSwitchFavorite, headerStyle, title, isFavorite, filmId } = this.state;
    return (
      <div className="film-header" style={headerStyle}>
        <h1 className="film-title">{title}</h1>
        <div className="personal-buttons">
          <div className="button watch-button">Watch<img src="/images/play-button-white.svg" role="presentation" /></div>
          <div className={"button favorite-button" + (isFavorite ? " active" : "")}
            onClick={() => doSwitchFavorite(filmId, userId)}>Favorite<img src="/images/star-white.svg" role="presentation" />
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
  (state) => {
    return {
      filmId: state.films.filmToDisplay.id,
      title: state.films.filmToDisplay.title,
      isFavorite: state.films.filmToDisplay.personal.isFavorite,
      backgroundPicture: state.films.filmToDisplay.backgroundPicture,
      userId: state.login.uid,
    };
  },
  (dispatch) => ({
    doSwitchFavorite: (filmdId, userId) => {
      dispatch({
        type: 'FAVORITE_FILM', payload: {
          filmId: filmdId,
          userId: userId,
        }
      })
    },
  })
)(FilmViewTop);
