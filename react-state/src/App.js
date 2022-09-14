import React, { Component } from "react";
import "./App.css";

class App extends Component {
  state = {
    Person: {
      fullName: "Steve Jobs",
      bio: "Steve Jobs, né le 24 février 1955 à San Francisco (Californie) et mort le 5 octobre 2011 à Palo Alto (dans le même État), est un entrepreneur et inventeur américain, souvent qualifié de visionnaire1,et une figure majeure de l'électronique grand public, notamment pionnier de l'avènement de l'ordinateur personnel, du baladeur numérique, du smartphone et de la tablette tactile. Cofondateur, directeur général et   président du conseil d'administration de l'entreprise multinationale américaine Apple Inc, il dirige aussi les studios Pixar et devient membre du conseil d'administration de Disney lors du rachat en 2006 de Pixar par Disney",
      about: " INGENEIER",
      imgsrc:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Steve_Jobs_Headshot_2010-CROP2.jpg/800px-Steve_Jobs_Headshot_2010-CROP2.jpg",
      profession:
        " En 1975, Jobs et Wozniak participent aux rencontres du Homebrew Computer Club, où les amateurs d'informatique viennent échanger leurs idées concernant les machines de l'époque, telles que l'Altair 8800",
    },
    show: true,
  };
  handleShowPerson = () => {
    this.setState({
      ...this.state,
      show: !this.state.show,
    });
  };
  render() {
    return (
      <>
        <div className="container">
          <div className="cards">
            <>
              {this.state.show && (
                <>
                  <h1> {this.state.Person.fullName} </h1>
                  <hr />
                  <h1> {this.state.Person.bio} </h1>
                  <img src={this.state.Person.imgsrc} alt=" Persson"></img>
                  <hr />
                  <h1> {this.state.Person.profession} </h1>
                  <h1> {this.state.Person.about} </h1>

                  <hr />
                </>
              )}
              <button onClick={this.handleShowPerson}>click here</button>
            </>
          </div>
        </div>
      </>
    );
  }
}
export default App;
