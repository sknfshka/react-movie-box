import React from 'react';

import Subscriptions from './Subscriptions';
import Subscribers from './Subscribers';

class SubsInfo extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      ...props,
      showSubscriptions: true,
      //isYourProfile: false,
    };
  }

  switchTab = () => {
    if (this.state.isYourProfile) {
      this.setState({
        showSubscriptions: !this.state.showSubscriptions
      });
    }
  }

  render = () => {
    const { user, showSubscriptions, isYourProfile } = this.state;
    return (
      <div className="profile-table pink">
        <div className="profile-nav">
          <div className={"tablinks" + (showSubscriptions ? " active" : "")} onClick={() => this.switchTab()}>Subscriptions</div>
          {
            isYourProfile ?
              <div className={"tablinks" + (!showSubscriptions ? " active" : "")} onClick={() => this.switchTab()}>Subscribers</div>
              : null
          }
        </div>

        {showSubscriptions ? <Subscriptions user={user} isYourProfile={isYourProfile} /> : <Subscribers user={user} />}
      </div>
    )
  }
}

export default SubsInfo;
