import React, {Component} from 'react';
import './App.css';
import NavBar from "./NavBar/NavBar";
import ProjectCarousel from "./ProjectCarousel/ProjectCarousel";
import BackDrop from "./BackDrop/BackDrop";

class App extends Component {

    render() {
        return (
            <>
                <BackDrop video>
                    <NavBar/>
                </BackDrop>
                <BackDrop>
                    <ProjectCarousel/>
                </BackDrop>
            </>

        )
    }

}

export default App;
