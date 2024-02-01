import React from 'react';
import {Col} from "react-bootstrap";

const ProjectCard = ({title, description, imgUrl, githubUrl}) => {
    return (
        <Col sm={6} md={4}>
            <div className="proj-imgbx">
                <img src={imgUrl} alt=""/>
                <div className="proj-txtx">
                    <a href={githubUrl} className="project-link" target="_blank" rel="noreferrer"><h4>{title}</h4></a>
                    <span>{description}</span>
                </div>
            </div>
        </Col>
    );
};

export default ProjectCard;