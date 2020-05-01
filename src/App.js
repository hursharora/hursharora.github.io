import React, {Component} from 'react';
import './App.css';
import NavBar from "./NavBar/NavBar";
import ProjectCarousel from "./ProjectCarousel/ProjectCarousel";
import BackDrop from "./BackDrop/BackDrop";
import NameText from "./NameText/NameText";
import SectionHeader from "./SectionHeader/SectionHeader";
import AboutContent from "./AboutContent/AboutContent";
import ProjectModal from "./Modal/ProjectModal";

class App extends Component {
    state = {
        aboutDescription: null, //Todo: move project description here for easy maintainability
        clickedProject: null,
        projects: [{name: "TVShow Tracker", image: null, description: null, id: 0},
                    {name: "DoorID", image: null, description: null, id: 1},
                    {name: "NoteSet", image: null, description: null, id: 2}],
        showingModal: false
    }

    projectRef = React.createRef()
    aboutRef = React.createRef();
    homeRef = React.createRef();

    projectClickedHandler = id => {
        let clickedProj = this.state.projects[id];
        this.setState({clickedProject: clickedProj,
                            showingModal: true});
    }

    modalClosedHandler = () => {
        this.setState({showingModal: false});
    }

    render() {
        return (
            <>
                <NavBar projectRef={this.projectRef} aboutRef={this.aboutRef} homeRef={this.homeRef}/>
                <BackDrop video sectionRef={this.homeRef}>
                    <NameText/>
                </BackDrop>
                <BackDrop sectionRef={this.aboutRef}>
                    <SectionHeader>About</SectionHeader>
                    <AboutContent/>
                </BackDrop>
                <BackDrop sectionRef={this.projectRef}>
                    <SectionHeader>Projects</SectionHeader>
                    <ProjectModal show={this.state.showingModal}
                                  closed={this.modalClosedHandler}>Test</ProjectModal>
                    <ProjectCarousel projects={this.state.projects}
                                     projectClick={this.projectClickedHandler}/>
                </BackDrop>
            </>
        )
    }

}

export default App;
