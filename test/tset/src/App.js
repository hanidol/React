import "./App.css";
import React, { Component } from "react";
//import React from "react";
import FullData from "./Profile/component/FullData";
import Profile from "./Profile/component/Profile";
class App extends Component {
  state = {
    isVisible: false,
  };
  toggleVisibility = () => {
    this.setState({ isVisible: !this.state.isVisible });
  };

  render() {
    return (
      <>
        <div className="container">
          <h1> Catalogue </h1>
          <button onClick={this.toggleVisibility}>
            {this.state.isVisible ? "Hide Counter" : "Show Counter"}
          </button>
          {this.state.isVisible && (
            <Profile
              title={FullData[0].title}
              proffes={FullData[0].proffes}
              about={FullData[0].about}
              imgsrc={FullData[0].imgsrc}
              btn={FullData[0].btn}
            >
              <img src={FullData[0].imgsrc} alt="Profession" />
            </Profile>
          )}
          <h1> Catalogue </h1>
          <button onClick={this.toggleVisibility}>
            {this.state.isVisible ? "Hide Counter" : "Show Counter"}
          </button>
          {this.state.isVisible && (
            <Profile
              title={FullData[1].title}
              proffes={FullData[1].proffes}
              about={FullData[1].about}
              imgsrc={FullData[1].imgsrc}
              btn={FullData[1].btn}
            >
              <img src={FullData[1].imgsrc} alt="Profession" />
            </Profile>
          )}
        </div>
      </>
    );
  }
}
export default App;
