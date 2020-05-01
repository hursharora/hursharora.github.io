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
import DoorIDImage from "./assets/DoorIDThumb.PNG"
import TVShowImage from "./assets/TVShowTrackerImg.PNG"

//images, content in projects
//logo
//refine spacing, make it look good on laptop display
//publish
//add name on navbar after scroll

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
        For one of my course projects, I decided to make a TV show tracker. Users can search for shows,
        add them to a watch list, and track what episodes they have watched. All TV Show data, including
        episode/season information and poster images, are retrieved using TVDB's API. <br/><br/>
        The entire project is made using Java and utilizes JavaFX for UI and jUnit for testing.
        Design patterns are used to reduce coupling and increase cohesion of code.<br/><br/>
        Since TVDB updated their API, the project no longer functions. <br/><br/>
        The project Github is available <a href="https://github.com/hursharora/TVShow-Tracker">here</a>.
        <br/><br/><strong>Technologies Used: Java, JavaFX, jUnit, JSON, IntelliJ</strong>
    </p>

const NoteSet_description =
    <p>
        NoteSet is a project I am currently working on using React and Firebase.
        I've always been searching for the perfect note taking app, however I've never been able to find
        one that has all the features I want. Since I've really been enjoying React lately,
        I decided to create create NoteSet in an attempt to create my perfect note taking app. <br/><br/>
        More information to come.
    </p>

const about_description =
    <p>
        I'm a second year Computer Science student at
        The University of British Columbia. Thanks for visiting my website! <br/><br/>
        Currently I'm working on on a note taking and task management web app using React
        and Firebase. <br/><br/>
        Looking for co-op internship opportunities for Fall 2020.<br/><br/>
        Scroll down to see some of my projects.
    </p>

class App extends Component {
    state = {
        aboutDescription: about_description,
        clickedProject: null,
        showingModal: false,
        projects: [{
                        name: "TVShow Tracker",
                        image: TVShowImage,
                        description: TVShow_description,
                        id: 0,
                        tileStyle: TileStyles.TVShowTracker
                    }, {
                        name: "DoorID",
                        image: DoorIDImage,
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
                    <AboutContent desc={this.state.aboutDescription}/>
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
