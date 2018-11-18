import React from 'react';

import Film from '../common/parts/Film';

const Films = ({ films }) => {

  let toDisplay = [];

  if (films) {
    films.forEach((film, id) => {
      toDisplay.push(
        <Film film={film} key={id} />
      );
    });
  }

  return (
    <div className="profile-content-tab films active">
      {toDisplay}
    </div>
  )
}

export default Films;