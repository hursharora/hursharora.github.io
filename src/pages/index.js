import React, { createRef, useState } from 'react';
import * as TileStyles from '../TileStyles.module.css';
import AboutContent from '../components/AboutContent/AboutContent';
import BackDrop from '../components/BackDrop/BackDrop';
import ProjectModal from '../components/Modal/ProjectModal';
import NameText from '../components/NameText/NameText';
import NavBar from '../components/NavBar/NavBar';
import ProjectCarousel from '../components/ProjectCarousel/ProjectCarousel';
import SectionHeader from '../components/SectionHeader/SectionHeader';
import '../index.css';
import { getImage } from 'gatsby-plugin-image';
import {
    About_Description,
    DoorID_Description,
    NoteSet_Description,
    SMP_Description,
    TVShow_Description
} from '../constants';
import { useStaticImages } from '../hooks';

const App = () => {
    const [clickedProject, setClickedProject] = useState(null);
    const [showingModal, setShowingModal] = useState(false);

    const images = useStaticImages();

    const getGatsbyImageData = (imageName) => {
        const image = images.find((node) => node.name === imageName);
        return getImage(image);
    };

    const projects = [
        {
            name: 'TVShow Tracker',
            image: getGatsbyImageData('TVShowTrackerImg'),
            image2: null,
            description: TVShow_Description,
            id: 0,
            tileStyle: TileStyles.TVShowTracker
        },
        {
            name: 'DoorID',
            image: getGatsbyImageData('DoorIDThumb'),
            image2: null,
            description: DoorID_Description,
            id: 1,
            tileStyle: TileStyles.DoorID
        },
        {
            name: 'NoteSet',
            image: getGatsbyImageData('NoteSet1'),
            image2: getGatsbyImageData('NoteSet2'),
            description: NoteSet_Description,
            id: 2,
            tileStyle: TileStyles.NoteSet
        },
        {
            name: 'SMPVis',
            image: getGatsbyImageData('smpvis1'),
            image2: getGatsbyImageData('smpvis2'),
            id: 3,
            description: SMP_Description,
            tileStyle: TileStyles.SMPVis
        }
    ];

    const projectRef = createRef();
    const aboutRef = createRef();
    const homeRef = createRef();

    // useEffect(() => {
    //     import('firebase/app').then((firebase) => {
    //         firebase.initializeApp(FirebaseConfig);
    //         firebase.analytics();
    //     });
    // }, []);

    const projectClickedHandler = (id) => {
        let clickedProj = projects[id];
        setClickedProject(clickedProj);
        setShowingModal(true);
    };

    const modalClosedHandler = () => {
        setShowingModal(false);
    };

    return (
        <>
            <NavBar
                projectRef={projectRef}
                aboutRef={aboutRef}
                homeRef={homeRef}
            />
            <BackDrop particle sectionRef={homeRef}>
                <NameText />
            </BackDrop>
            <BackDrop sectionRef={aboutRef}>
                <SectionHeader>About</SectionHeader>
                <AboutContent
                    desc={About_Description}
                    imgData={getGatsbyImageData('headshot')}
                />
            </BackDrop>
            <BackDrop sectionRef={projectRef}>
                <SectionHeader>Projects</SectionHeader>
                <ProjectModal
                    show={showingModal}
                    closed={modalClosedHandler}
                    toDisplay={clickedProject}
                />
                <ProjectCarousel
                    projects={projects}
                    projectClick={projectClickedHandler}
                />
            </BackDrop>
        </>
    );
};

export default App;
