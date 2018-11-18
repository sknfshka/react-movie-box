import React from 'react';

import Subscriptions from './Subscriptions';
import Subscribers from './Subscribers';

class SubsInfo extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      ...props,
      activeTab: "subscriptions",
    };
  }

  switchTabTo = (tabName) => {
    this.setState({
      activeTab: tabName
    });
  }

  render = () => {
    const { user, isYourProfile, activeTab } = this.state;
    return (
      <div className="profile-table pink">
        <div className="profile-nav">
          <div className={"tablinks" + (activeTab === "subscriptions" ? " active" : "")} onClick={() => this.switchTabTo("subscriptions")}>Subscriptions</div>

          {
            isYourProfile ?
              <div className={"tablinks" + (activeTab === "subscribers" ? " active" : "")} onClick={() => this.switchTabTo("subscribers")}>Subscribers</div>
              : null
          }

        </div>

        {activeTab === "subscriptions" ? <Subscriptions user={user} isYourProfile={isYourProfile} /> : null}
        {activeTab === "subscribers" ? <Subscribers user={user} /> : null}
      </div>
    )
  }
}

export default SubsInfo;
