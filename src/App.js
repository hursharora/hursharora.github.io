import React, {Component} from 'react';
import './App.css';
import NavBar from "./NavBar/NavBar";
import ProjectCarousel from "./ProjectCarousel/ProjectCarousel";
import BackDrop from "./BackDrop/BackDrop";
import NameText from "./NameText/NameText";
import SectionHeader from "./SectionHeader/SectionHeader";
import AboutContent from "./AboutContent/AboutContent";
import ProjectModal from "./Modal/ProjectModal";
import TileStyles from "./TileStyles.module.css"

//images, content in projects
//logo
//refine spacing
//publish

const DoorID_description =
    <p>
        DoorID was a 24 hour Hackathon project made at nwHacks 2020. The idea behind
        the project was to help people with memory loss identify who's ringing their doorbell. <br/><br/>
        Originally, my team planned on using the camera on a Ring doorbell to send an image
        to a backend server for facial recognition, and then notify the user using an app.
        However, we ran into problems powering the doorbell, so we ended up using a website to
        simulate a doorbell instead. <br/><br/>
        My teammates worked on backend side of things including using the Azure Face API to
        get the doorbell server running, while I was responsible for creating the Android app that would
        receive notifications from the server. <br/><br/>
        The project Github for the Android app is available
        <a href="https://github.com/hursharora/DoorbellID"> here</a> and for the server
        <a href="https://github.com/parsasi/projectDoorbellServer"> here</a>. The hackathon Devpost is available
        <a href="https://devpost.com/software/door-identify"> here</a><br/><br/>
        <strong>Technologies Used: Java, Android, Android Studio, JSON</strong>
    </p>

const TVShow_description =
    <p>
        For one of my course projects, I decided to make a TV show tracker...
    </p>

const NoteSet_description =
    <p>
        and since I've really been enojoying React lately, I decided to create NoteSet.
    </p>

class App extends Component {
    state = {
        aboutDescription: null, //Todo: move about description here for easy maintainability
        clickedProject: null,
        showingModal: false,
        projects: [{
                        name: "TVShow Tracker",
                        image: null,
                        description: TVShow_description,
                        id: 0,
                        tileStyle: TileStyles.TVShowTracker
                    }, {
                        name: "DoorID",
                        image: null,
                        description: DoorID_description,
                        id: 1,
                        tileStyle: TileStyles.DoorID
                    }, {
                        name: "NoteSet",
                        image: null,
                        description: NoteSet_description,
                        id: 2,
                        tileStyle: TileStyles.NoteSet
                    }]
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
                                  closed={this.modalClosedHandler}
                                  toDisplay={this.state.clickedProject}>Test</ProjectModal>
                    <ProjectCarousel projects={this.state.projects}
                                     projectClick={this.projectClickedHandler}/>
                </BackDrop>
            </>
        )
    }

}

export default App;
