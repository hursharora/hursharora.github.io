import React, { createRef, useEffect, useState } from 'react';
import '../index.css';
import NavBar from '../components/NavBar/NavBar';
import ProjectCarousel from '../components/ProjectCarousel/ProjectCarousel';
import BackDrop from '../components/BackDrop/BackDrop';
import NameText from '../components/NameText/NameText';
import SectionHeader from '../components/SectionHeader/SectionHeader';
import AboutContent from '../components/AboutContent/AboutContent';
import ProjectModal from '../components/Modal/ProjectModal';
import TileStyles from '../TileStyles.module.css';

import {
    About_Description,
    DoorID_Description,
    FirebaseConfig,
    NoteSet_Description,
    SMP_Description,
    TVShow_Description
} from '../constants';
import { useStaticImages } from '../hooks';

const App = () => {
    const [clickedProject, setClickedProject] = useState(null);
    const [showingModal, setShowingModal] = useState(false);

    const images = useStaticImages();

    const getImageFluid = (imageName) => {
        const image = images.find((node) => node.name === imageName);
        return image.childImageSharp.fluid;
    };

    const projects = [
        {
            name: 'TVShow Tracker',
            image: getImageFluid('TVShowTrackerImg'),
            image2: null,
            description: TVShow_Description,
            id: 0,
            tileStyle: TileStyles.TVShowTracker
        },
        {
            name: 'DoorID',
            image: getImageFluid('DoorIDThumb'),
            image2: null,
            description: DoorID_Description,
            id: 1,
            tileStyle: TileStyles.DoorID
        },
        {
            name: 'NoteSet',
            image: getImageFluid('NoteSet1'),
            image2: getImageFluid('NoteSet2'),
            description: NoteSet_Description,
            id: 2,
            tileStyle: TileStyles.NoteSet
        },
        {
            name: 'SMPVis',
            image: getImageFluid('smpvis1'),
            image2: getImageFluid('smpvis2'),
            id: 3,
            description: SMP_Description,
            tileStyle: TileStyles.SMPVis
        }
    ];

    const projectRef = createRef();
    const aboutRef = createRef();
    const homeRef = createRef();

    useEffect(() => {
        import('firebase/app').then((firebase) => {
            firebase.initializeApp(FirebaseConfig);
            firebase.analytics();
        });
    }, []);

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
                    imgData={getImageFluid('headshot')}
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
