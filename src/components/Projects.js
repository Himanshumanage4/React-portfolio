import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";

import proj_1  from "../assets/img/projects 1.jpg";
import proj_2  from "../assets/img/projects 2.jpg";
import proj_3  from "../assets/img/projects 3.jpg";
import proj_4  from "../assets/img/projects 4.jpg";
import proj_5  from "../assets/img/projects 5.jpg";
import proj_6  from "../assets/img/projects 6.jpg";
import proj_7  from "../assets/img/projects 7.jpg";
import proj_8  from "../assets/img/projects 8.jpg";
import proj_9  from "../assets/img/projects 9.jpg";
import proj_10 from "../assets/img/projects 10.jpg";
import proj_11 from "../assets/img/projects 11.jpg";
import proj_12 from "../assets/img/projects 12.jpg";
import proj_13 from "../assets/img/projects 13.jpg";
import proj_14 from "../assets/img/projects 14.jpg";
import proj_15 from "../assets/img/projects 15.jpg";
import proj_16 from "../assets/img/projects 16.jpg";
import proj_17 from "../assets/img/projects 17.jpg";
import proj_18 from "../assets/img/projects 18.jpg";
import proj_19 from "../assets/img/projects 19.jpg";
import proj_20 from "../assets/img/projects 20.jpg";
import proj_21 from "../assets/img/projects 21.jpg";
import proj_22 from "../assets/img/projects 22.jpg";
import proj_23 from "../assets/img/projects 23.jpg";
import proj_24 from "../assets/img/projects 24.jpg";
import proj_25 from "../assets/img/projects 25.jpg";
import proj_26 from "../assets/img/projects 26.jpg";
import proj_27 from "../assets/img/projects 27.jpg";
import proj_28 from "../assets/img/projects 28.jpg";
import proj_29 from "../assets/img/projects 29.jpg";
import proj_30 from "../assets/img/projects 30.jpg";
import proj_31 from "../assets/img/projects 31.jpg";
import proj_32 from "../assets/img/projects 32.jpg";
import proj_33 from "../assets/img/projects 33.jpg";
import proj_34 from "../assets/img/projects 34.jpg";
import proj_35 from "../assets/img/projects 35.jpg";
import proj_36 from "../assets/img/projects 36.jpg";
import proj_37 from "../assets/img/projects 37.jpg";
import proj_38 from "../assets/img/projects 38.jpg";
import proj_39 from "../assets/img/projects 39.png";
import proj_40 from "../assets/img/projects 40.png";
import proj_41  from "../assets/img/projects 41.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { useState, useEffect } from "react";

export const Projects = () => {
  const [isMobile, setIsMobile] = useState(false);

  // Check screen size and set isMobile state
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize(); // Set the initial state
    window.addEventListener('resize', handleResize);

    // Cleanup event listener on component unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Arrays of projects for each tab
  const projectsTab1 = [
    { title: "Project 1", description: "Design & Development", imgUrl: proj_1 },
    { title: "Project 2", description: "Design & Development", imgUrl: proj_2 },
    { title: "Project 3", description: "Design & Development", imgUrl: proj_3 },
    { title: "Project 4", description: "Design & Development", imgUrl: proj_4 },
    { title: "Project 5", description: "Design & Development", imgUrl: proj_5 },
    { title: "Project 6", description: "Design & Development", imgUrl: proj_6 },
    { title: "Project 7", description: "Design & Development", imgUrl: proj_7 },
    { title: "Project 8", description: "Design & Development", imgUrl: proj_8 },
    { title: "Project 9", description: "Design & Development", imgUrl: proj_9 },
    { title: "Project 10", description: "Design & Development", imgUrl: proj_29 },
    { title: "Project 11", description: "Design & Development", imgUrl: proj_30 },
    { title: "Project 12", description: "Design & Development", imgUrl: proj_31 },
    { title: "Project 13", description: "Design & Development", imgUrl: proj_32 },
    { title: "Project 14", description: "Design & Development", imgUrl: proj_33 },
    { title: "Project 28", description: "Design & Development", imgUrl: proj_38 },
  ];

  const projectsTab2 = [
    { title: "Project 15", description: "Design & Development", imgUrl: proj_10 },
    { title: "Project 16", description: "Design & Development", imgUrl: proj_11 },
    { title: "Project 17", description: "Design & Development", imgUrl: proj_12 },
    { title: "Project 18", description: "Design & Development", imgUrl: proj_13 },
    { title: "Project 19", description: "Design & Development", imgUrl: proj_14 },
    { title: "Project 20", description: "Design & Development", imgUrl: proj_15 },
    { title: "Project 21", description: "Design & Development", imgUrl: proj_16 },
    { title: "Project 22", description: "Design & Development", imgUrl: proj_17 },
    { title: "Project 23", description: "Design & Development", imgUrl: proj_18 },
    { title: "Project 24", description: "Design & Development", imgUrl: proj_34 },
    { title: "Project 25", description: "Design & Development", imgUrl: proj_35 },
    { title: "Project 26", description: "Design & Development", imgUrl: proj_36 },


  ];

  const projectsTab3 = [
    { title: "Project 29", description: "Design & Development", imgUrl: proj_19 },
    { title: "Project 30", description: "Design & Development", imgUrl: proj_20 },
    { title: "Project 31", description: "Design & Development", imgUrl: proj_21 },
    { title: "Project 32", description: "Design & Development", imgUrl: proj_22 },
    { title: "Project 33", description: "Design & Development", imgUrl: proj_23 },
    { title: "Project 34", description: "Design & Development", imgUrl: proj_24 },
    { title: "Project 35", description: "Design & Development", imgUrl: proj_25 },
    { title: "Project 36", description: "Design & Development", imgUrl: proj_26 },
    { title: "Project 37", description: "Design & Development", imgUrl: proj_28 },
    { title: "Project 38", description: "Design & Development", imgUrl: proj_39 },
    { title: "Project 39", description: "Design & Development", imgUrl: proj_40 },
    { title: "Project 40", description: "Design & Development", imgUrl: proj_41 },
  ];

  // Select projects to display based on screen size
  const displayedProjectsTab1 = isMobile ? projectsTab1.slice(0, 6) : projectsTab1;
  const displayedProjectsTab2 = isMobile ? projectsTab2.slice(0, 6) : projectsTab2;
  const displayedProjectsTab3 = isMobile ? projectsTab3.slice(0, 6) : projectsTab3;

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>I have worked on a range of exciting projects that showcase my skills in both front-end and back-end development. My projects include dynamic web applications built with Python and Java, as well as interactive user interfaces using HTML, CSS, and JavaScript. Each project reflects my commitment to creating functional and user-friendly solutions. Explore my portfolio to see how I bring ideas to life through coding.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
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
                        {displayedProjectsTab1.map((project, index) => (
                          <ProjectCard
                            key={index}
                            {...project}
                          />
                        ))}
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <Row>
                        {displayedProjectsTab2.map((project, index) => (
                          <ProjectCard
                            key={index}
                            {...project}
                          />
                        ))}
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <Row>
                        {displayedProjectsTab3.map((project, index) => (
                          <ProjectCard
                            key={index}
                            {...project}
                          />
                        ))}
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="Background"/>
    </section>
  );
}
