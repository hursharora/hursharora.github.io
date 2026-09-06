import React, { useCallback, useRef, useState } from "react";
import * as TileStyles from "./TileStyles.module.css";
import AboutContent from "./components/AboutContent/AboutContent";
import BackDrop from "./components/BackDrop/BackDrop";
import ProjectModal from "./components/Modal/ProjectModal";
import NameText from "./components/NameText/NameText";
import NavBar from "./components/NavBar/NavBar";
import ProjectCarousel from "./components/ProjectCarousel/ProjectCarousel";
import SectionHeader from "./components/SectionHeader/SectionHeader";
import doorIdImage from "./images/DoorIDThumb.PNG";
import noteSetImageOne from "./images/NoteSet1.PNG";
import noteSetImageTwo from "./images/NoteSet2.PNG";
import smpVisImageOne from "./images/smpvis1.PNG";
import smpVisImageTwo from "./images/smpvis2.PNG";
import tvShowTrackerImage from "./images/TVShowTrackerImg.PNG";
import {
  About_Description,
  DoorID_Description,
  NoteSet_Description,
  SMP_Description,
  TVShow_Description,
} from "./constants";

const projects = [
  {
    name: "TVShow Tracker",
    image: tvShowTrackerImage,
    image2: null,
    description: TVShow_Description,
    id: 0,
    tileStyle: TileStyles.TVShowTracker,
  },
  {
    name: "DoorID",
    image: doorIdImage,
    image2: null,
    description: DoorID_Description,
    id: 1,
    tileStyle: TileStyles.DoorID,
  },
  {
    name: "NoteSet",
    image: noteSetImageOne,
    image2: noteSetImageTwo,
    description: NoteSet_Description,
    id: 2,
    tileStyle: TileStyles.NoteSet,
  },
  {
    name: "SMPVis",
    image: smpVisImageOne,
    image2: smpVisImageTwo,
    id: 3,
    description: SMP_Description,
    tileStyle: TileStyles.SMPVis,
  },
];

const App = () => {
  const [clickedProject, setClickedProject] = useState(null);
  const [showingModal, setShowingModal] = useState(false);
  const projectRef = useRef(null);
  const aboutRef = useRef(null);
  const homeRef = useRef(null);

  const projectClickedHandler = useCallback((id) => {
    setClickedProject(projects.find((project) => project.id === id));
    setShowingModal(true);
  }, []);

  const modalClosedHandler = useCallback(() => {
    setShowingModal(false);
  }, []);

  return (
    <>
      <NavBar projectRef={projectRef} aboutRef={aboutRef} homeRef={homeRef} />
      <main>
        <BackDrop particle sectionRef={homeRef}>
          <NameText />
        </BackDrop>
        <BackDrop sectionRef={aboutRef}>
          <SectionHeader>About</SectionHeader>
          <AboutContent desc={About_Description} />
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
      </main>
    </>
  );
};

export default App;
