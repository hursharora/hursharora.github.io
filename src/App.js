import React, {Component} from 'react';
import './App.css';
import NavBar from "./NavBar/NavBar";
import ProjectCarousel from "./ProjectCarousel/ProjectCarousel";

class App extends Component {

  render() {
    return (
        <>
          <NavBar/>
          <ProjectCarousel/>
        </>
    )
  }

}

export default App;
