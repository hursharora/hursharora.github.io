import React from "react";
import classes from "./ProjectModal.module.css"

class ProjectModal extends React.Component {
    render() {
        let modalContent = null;
        if (this.props.toDisplay) {
            modalContent = <div className={classes.Modal} style={{
                                display: this.props.show ? null : 'none'
                            }}>
                                <h1>{this.props.toDisplay.name}</h1>
                                <button onClick={this.props.closed} className={classes.CloseButton}/>
                                <div className={classes.Container}>
                                    <div className={classes.ImageContainer}>
                                        <img src={this.props.toDisplay.image} alt="Not available"/>
                                        {this.props.toDisplay.image2 ? <img src={this.props.toDisplay.image2} alt="Not Available"/> : null}
                                    </div>
                                    <div className={classes.TextContainer}>{this.props.toDisplay.description}</div>
                                </div>
                             </div>
        }

        return (
            <>
                <div className={classes.ModalBackdrop} style={{
                    display: this.props.show ? null : 'none'
                }} onClick={this.props.closed}/>

                    {modalContent}

            </>

        )
    }
}

export default ProjectModal;