import React from 'react';

let FilmsInfo = ({ }) => {

  return (
    <div className="profile-table blue">
      <div className="profile-nav">
        <div className="tablinks active" data-name="watch" data-color="blue" id="defaultOpenBlue">Watch</div>
        <div className="tablinks" data-name="favorites" data-color="blue">Favorites</div>
        <div className="tablinks" data-name="reviews" data-color="blue">Reviews</div>
      </div>
      <div className="profile-content-tab profile-content-tab- films active" id="watch">
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
      <div className="profile-content-tab films" id="favorites">
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
      <div className="profile-content-tab" id="reviews">
        <div className="comments">
          <div className="comment-item"> <a className="comment-movie-link" href="/film">Fantastic Beast And Where To Find Them</a>
            <p className="comment-data">22 november 2018</p>
            <p className="comment-rating">7.5<span>/10</span></p>
            <p className="commnet-title">Best Movie</p>
            <p className="comment-text">«Богемная рапсодия» — автобиографическая, художественная картина. Можно сказать, что
              она получилась довольно спорной в силу того, что аудитория разделилась на несколько лагерей. Одни полностью
              поддерживают мысли по поводу её качества, а некоторые не согласны в корне. Что же получается? Получается
              большой ажиотаж. С учётом этого за первую неделю проката удалось собрать 150 миллионов долларов. Это
            внушительные цифры с опором на то, что было затрачено всего 50 миллионов. </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FilmsInfo;
