import React from 'react';

import Films from './Films';
import Comments from './Comments';

class FilmsInfo extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      ...props,
      activeTab: "reviews",
      //showSubscriptions: true,
      //isYourProfile: false,
    };
  }

  render = () => {
    const { activeTab, user } = this.state;
    return (
      <div className="profile-table blue">
        <div className="profile-nav">
          <div className={"tablinks" + (activeTab === "favorites" ? " active" : "")} >Favorites</div>
          <div className={"tablinks" + (activeTab === "visited" ? " active" : "")} >Visited</div>
          <div className={"tablinks" + (activeTab === "reviews" ? " active" : "")} >Reviews</div>
        </div>

        {activeTab === "favorites" ? <Films /> : null}
        {activeTab === "visited" ? <Films /> : null}
        {activeTab === "reviews" ? <Comments comments={user.myComments}/> : null}

      </div>
    )
  }
}

export default FilmsInfo;
