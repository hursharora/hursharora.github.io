import React from "react";
import classes from "./ProjectModal.module.css"

class ProjectModal extends React.Component {
    state = {
        show: false
    }

    render() {
        return (
            <>
                <div className={classes.ModalBackdrop} style={{
                    display: this.props.show ? null : 'none'
                }} onClick={this.props.closed}/>
                <div className={classes.Modal} style={{
                    display: this.props.show ? null : 'none'
                }}>
                    <h1>TESTTESTTEST</h1>
                    <button onClick={this.props.closed}>Close</button>
                    <div>IMAGE GOES HERE</div>
                    <div>DESCRIPTION GOES HERE</div>
                </div>
            </>

        )
    }
}

export default ProjectModal;