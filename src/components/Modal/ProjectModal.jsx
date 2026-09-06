import React, { useEffect, useRef } from "react";
import * as classes from "./ProjectModal.module.css";

const ProjectModal = (props) => {
  const closeButtonRef = useRef(null);

  useEffect(() => {
    if (!props.show) {
      return undefined;
    }

    const previousOverflow = document.body.style.overflow;
    const closeOnEscape = (event) => {
      if (event.key === "Escape") {
        props.closed();
      }
    };

    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", closeOnEscape);
    closeButtonRef.current?.focus();

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, [props.closed, props.show]);

  let modalContent = null;
  if (props.toDisplay) {
    modalContent = (
      <div
        className={classes.Modal}
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-modal-title"
      >
        <h1 id="project-modal-title">{props.toDisplay.name}</h1>
        <button
          ref={closeButtonRef}
          type="button"
          onClick={props.closed}
          className={classes.CloseButton}
          aria-label="Close project details"
        />
        <div className={classes.Container}>
          <div className={classes.ImageContainer}>
            <img
              src={props.toDisplay.image}
              alt={`${props.toDisplay.name} screenshot`}
              loading="lazy"
            />
            {props.toDisplay.image2 && (
              <img
                src={props.toDisplay.image2}
                alt={`${props.toDisplay.name} additional screenshot`}
                loading="lazy"
              />
            )}
          </div>
          <div className={classes.TextContainer}>
            {props.toDisplay.description}
          </div>
        </div>
      </div>
    );
  }

  if (!props.show) {
    return null;
  }

  return (
    <>
      <div className={classes.ModalBackdrop} onClick={props.closed} />
      {modalContent}
    </>
  );
};

export default ProjectModal;
