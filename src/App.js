import React, {Component} from 'react';
import './App.css';
import NavBar from "./NavBar/NavBar";
import ProjectCarousel from "./ProjectCarousel/ProjectCarousel";
import BackDrop from "./BackDrop/BackDrop";
import NameText from "./NameText/NameText";
import SectionHeader from "./SectionHeader/SectionHeader";
import AboutPhoto from "./AboutPhoto/AboutPhoto";

class App extends Component {

    projectRef = React.createRef()
    aboutRef = React.createRef();
    homeRef = React.createRef();

    render() {
        return (
            <>
                <NavBar projectRef={this.projectRef} aboutRef={this.aboutRef} homeRef={this.homeRef}/>
                <BackDrop video sectionRef={this.homeRef}>
                    <NameText/>
                </BackDrop>
                <BackDrop sectionRef={this.aboutRef}>
                    <SectionHeader>About</SectionHeader>
                    <AboutPhoto/>
                </BackDrop>
                <BackDrop sectionRef={this.projectRef}>
                    <SectionHeader>Projects</SectionHeader>
                    <ProjectCarousel/>
                </BackDrop>
            </>

        )
    }

}

export default App;
