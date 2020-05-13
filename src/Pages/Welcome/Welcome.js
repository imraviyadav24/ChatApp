import React from "react";
import "react-toastify/dist/ReactToastify.css";
import "./Welcome.css";

export default class WelcomeCard extends React.Component {
  render() {
    return (
      <div className="viewWelcomeBoard">
        <img
          className="avatarWelcome"
          src={this.props.currentUserPhoto}
          alt=""
        />
        <span className="textTileWelcome">{`Welcome, ${this.props.currentuserName}`}</span>
        <span className="textDescriptionWelcome">let's connect the World</span>
      </div>
    );
  }
}
