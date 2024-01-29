import React from 'react';
import Container from "react-bootstrap/Container";
import {Col, Row} from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Tab from 'react-bootstrap/Tab';
import TrackVisibility from 'react-on-screen';
import ProjectCard from "./ProjectCard";
import 'animate.css';
import projImg1 from '../assets/img/projImg1.png';
import projImg2 from '../assets/img/projImg2.png';
import projImg3 from '../assets/img/projImg3.png';
import projImg4 from '../assets/img/projImg4.png';
const Projects = () => {
    const projects = [
        {
            title:"MapTask",
            description:"A program that allows you to place markers on the map and records their location in the database.",
            imgUrl: projImg1,
            githubUrl:"https://andriyvegera.github.io/MapTask/"
        },
        {
            title:"Pokemon",
            description:"A site for choosing Pokémon where you can see the characteristics of Pokémon, their elements and much more.",
            imgUrl: projImg2,
            githubUrl:"https://github.com/AndriyVegera/Pokemon"
        },
        {
            title:"ResumeCreator",
            description:"ResumeCreator -  is a site for creating your resume based on a ready-made template.",
            imgUrl: projImg4,
            githubUrl:"https://andriyvegera.github.io"
        },
        {
            title:"CineMagic",
            description:"CineMagic - is a site for finding movies, cartoons, series and more.",
            imgUrl: projImg3,
            githubUrl:"https://github.com/AndriyVegera/CineMagic"
        }
    ]
    return (
        <section className="project" id="projects">
            <Container>
                <Row>
                    <Col size={12}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                                    <h2>Projects</h2>
                                    <p>All my projects will be here, so far all the projects are in React, but in the future they may be in other programming languages </p>
                                    <Tab.Container id="projects-tabs" defaultActiveKey="first">
                                        <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                            <Nav.Item>
                                                <Nav.Link eventKey="first">React</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="second">Tab 2</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="third">Tab 3</Nav.Link>
                                            </Nav.Item>
                                        </Nav>
                                        <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                                            <Tab.Pane eventKey="first">
                                                <Row>
                                                    {
                                                        projects.map((project, index) => {
                                                            return (
                                                                <ProjectCard
                                                                    key={index}
                                                                    {...project}
                                                                />
                                                            )
                                                        })
                                                    }
                                                </Row>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="second">
                                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="third">
                                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                                            </Tab.Pane>
                                        </Tab.Content>
                                    </Tab.Container>
                                </div>}
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Projects;