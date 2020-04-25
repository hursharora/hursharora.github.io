import React, {Component} from 'react';
import './App.css';
import NavBar from "./NavBar/NavBar";
import ProjectCarousel from "./ProjectCarousel/ProjectCarousel";
import BackDrop from "./BackDrop/BackDrop";
import NameText from "./NameText/NameText";

class App extends Component {

    render() {
        return (
            <>
                <NavBar/>
                <BackDrop video>
                    <NameText/>
                </BackDrop>
                <BackDrop>
                    <ProjectCarousel/>
                </BackDrop>
            </>

        )
    }

}

export default App;
