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
import DoorIDImage from "./assets/DoorIDThumb.PNG";
import TVShowImage from "./assets/TVShowTrackerImg.PNG";
import NoteSet1 from "./assets/NoteSet1.PNG";
import NoteSet2 from "./assets/NoteSet2.PNG";
import SMP1 from "./assets/smpvis1.PNG";
import firebase from "firebase/app";
import "firebase/analytics";


//replace with functional components

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
        <a href="https://devpost.com/software/door-identify"> here</a>.<br/><br/>
        <b>Technologies Used: Java, Android, Android Studio, JSON</b>
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
        <br/><br/><b>Technologies Used: Java, JavaFX, jUnit, JSON, IntelliJ</b>
    </p>

const NoteSet_description =
    <p>
        NoteSet is a note taking and task management web app made using React and Firebase.
        I've always been searching for the perfect note taking app, but I haven't been able to find
        one that has all the features I want. Since I've really been enjoying React lately,
        I decided to create NoteSet in an attempt to create my perfect note taking app. <br/><br/>
        You can visit the live version <a href="https://noteset-8f7ba.web.app/">here</a> (works best on Chrome)
        or check out
        the project Github <a href="https://github.com/hursharora/noteset">here</a>.
        <br/><br/><b>Technologies Used: React, React Router, Redux, Firebase, JavaScript, CSS, HTML/JSX</b>
    </p>

const SMP_description =
    <p>
        After learning about the stable matching problem in my algorithms class, I decided to create
        a visualization for it.
        <br/><br/>
        I started off by implementing the Gale-Shapely algorithm in C++, then
        I slightly modified the algorithm so it prints out the steps it takes to
        produce a stable matching. I then created a Node/Express server to run the C++ code
        and return the output of the algorithm as a JSON array. The react front end then uses the
        output to visualize the algorithm.
        <br/><br/>
        You can visit the live version <a href="https://smp-vis.herokuapp.com/">here</a> or you can
        check out the project Github for the front-end <a
        href="https://github.com/hursharora/smp-vis-react">here</a> and
        the back-end (including C++ code) <a href="https://github.com/hursharora/smp-vis-node">here</a>.
        <br/><br/><b>Technologies Used: React, Node.js, Express.js, C++, JavaScript, CSS, HTML/JSX, Heroku</b>
    </p>

const about_description =
    <p>
        I'm a third year Computer Science student at
        The University of British Columbia. Thanks for visiting my website! <br/><br/>
        Currently interning at Localintel.<br/><br/>
        Check out my <a href="https://github.com/hursharora">Github</a><br/>
        Contact me: hursharora@gmail.com
    </p>

const firebaseConfig = {
    apiKey: "AIzaSyAMHAAwO-wJb3hRhTgMBZ7wvLJ7nIG589k",
    authDomain: "personal-website-41144.firebaseapp.com",
    databaseURL: "https://personal-website-41144.firebaseio.com",
    projectId: "personal-website-41144",
    storageBucket: "personal-website-41144.appspot.com",
    messagingSenderId: "536691094725",
    appId: "1:536691094725:web:1dc2ad3715320953796cac",
    measurementId: "G-RVQQX7G5H4"
};

class App extends Component {
    state = {
        aboutDescription: about_description,
        clickedProject: null,
        showingModal: false,
        projects: [{
            name: "TVShow Tracker",
            image: TVShowImage,
            image2: null,
            description: TVShow_description,
            id: 0,
            tileStyle: TileStyles.TVShowTracker
        }, {
            name: "DoorID",
            image: DoorIDImage,
            image2: null,
            description: DoorID_description,
            id: 1,
            tileStyle: TileStyles.DoorID
        }, {
            name: "NoteSet",
            image: NoteSet1,
            image2: NoteSet2,
            description: NoteSet_description,
            id: 2,
            tileStyle: TileStyles.NoteSet
        }, {
            name: "Stable Matching Visualizer",
            image: SMP1,
            image2: null,
            id: 3,
            description: SMP_description,
            tileStyle: TileStyles.SMPVis
        }]
    }

    projectRef = React.createRef()
    aboutRef = React.createRef();
    homeRef = React.createRef();

    componentDidMount() {
        firebase.initializeApp(firebaseConfig);
        firebase.analytics();
    }

    projectClickedHandler = id => {
        let clickedProj = this.state.projects[id];
        this.setState({
            clickedProject: clickedProj,
            showingModal: true
        });
        firebase.analytics().logEvent("clicked_" + clickedProj.name);
    }

    modalClosedHandler = () => {
        this.setState({showingModal: false});
    }

    render() {
        return (
            <>
                <NavBar projectRef={this.projectRef} aboutRef={this.aboutRef} homeRef={this.homeRef}/>
                <BackDrop particle sectionRef={this.homeRef}>
                    <NameText/>
                </BackDrop>
                <BackDrop sectionRef={this.aboutRef}>
                    <AboutContent desc={this.state.aboutDescription}/>
                </BackDrop>
                <BackDrop sectionRef={this.projectRef}>
                    <SectionHeader>Projects</SectionHeader>
                    <ProjectModal show={this.state.showingModal}
                                  closed={this.modalClosedHandler}
                                  toDisplay={this.state.clickedProject}/>
                    <ProjectCarousel projects={this.state.projects}
                                     projectClick={this.projectClickedHandler}/>
                </BackDrop>
            </>
        )
    }
}

export default App;
