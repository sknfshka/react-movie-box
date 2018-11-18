import React from 'react';

const Films = ({ }) => {

  return (
    <div className="profile-content-tab films active" id="favorites">
      <div className="film">
        <div className="film__poster">
          <a className="film__poster-link" href="/film">
            <img src="/images/film8.jpg" alt="Aquaman poster" />
          </a>
        </div>
        <a className="film__title" href="/film">Aquaman</a>
        <div className="film__date">December 2, 2013</div>
        <div className="film__rating film__rating_bad">2</div>
      </div>
    </div>
  )
}

export default Films;