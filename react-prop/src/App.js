import "./App.css";
import React from "react";
import Profile from "./profile/component/Profile";
import FullData from "./profile/component/FullData";

function App() {
  function handleAlertClick(title) {
    alert("Vous avez cliqué à " + title);
  }
  return (
    <>
      <h1> Card Visit </h1>
      <div className="container">
        <Profile
          title={FullData[0].title}
          proffes={FullData[0].proffes}
          about={FullData[0].about}
          imgsrc={FullData[0].imgsrc}
          btn={FullData[0].btn}
          handleName={handleAlertClick}
        >
          <img src={FullData[0].imgsrc} alt="Profession" />
        </Profile>
      </div>
      <div className="container">
        <Profile
          title={FullData[1].title}
          proffes={FullData[1].proffes}
          about={FullData[1].about}
          btn={FullData[1].btn}
          handleName={handleAlertClick}
        >
          <img src={FullData[1].imgsrc} alt="Profession" />
        </Profile>
      </div>
    </>
  );
}

export default App;
