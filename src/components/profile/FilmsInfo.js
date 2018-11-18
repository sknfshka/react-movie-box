import React from 'react';

import Films from './Films';
import Comments from './Comments';

class FilmsInfo extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      ...props,
      activeTab: this.props.isYourProfile || this.props.user.hasPermission ? "favorites" : "reviews",
    };
  }

  switchTabTo = (tabName) => {
    this.setState({
      activeTab: tabName
    });
  }

  render = () => {
    const { activeTab, user, isYourProfile } = this.state;
    return (
      <div className="profile-table blue">
        <div className="profile-nav">
          {isYourProfile || user.hasPermission ? <div className={"tablinks" + (activeTab === "favorites" ? " active" : "")} onClick={() => this.switchTabTo("favorites")} >Favorites</div> : null}
          {isYourProfile ? <div className={"tablinks" + (activeTab === "visited" ? " active" : "")} onClick={() => this.switchTabTo("visited")} >Visited</div> : null}
          <div className={"tablinks" + (activeTab === "reviews" ? " active" : "")} onClick={() => this.switchTabTo("reviews")} >Reviews</div>
        </div>

        {activeTab === "favorites" ? <Films films={user.favoriteFilms} /> : null}
        {activeTab === "visited" ? <Films films={user.visitedFilms} /> : null}
        {activeTab === "reviews" ? <Comments comments={user.myComments} /> : null}

      </div>
    )
  }
}

export default FilmsInfo;
