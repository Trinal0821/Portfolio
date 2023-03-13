import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
//import { ProjectCard } from "./ProjectCard";
// import projImg1 from "../assets/img/project-img1.png";
// import projImg2 from "../assets/img/project-img2.png";
// import projImg3 from "../assets/img/project-img3.png";
import logo from "../assets/images/logo.png";
import colorSharp2 from "../assets/images/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  //   const projects = [
  //     {
  //       title: "Business Startup",
  //       description: "Design & Development",
  //       imgUrl: projImg1,
  //     },
  //     {
  //       title: "Business Startup",
  //       description: "Design & Development",
  //       imgUrl: projImg2,
  //     },
  //     {
  //       title: "Business Startup",
  //       description: "Design & Development",
  //       imgUrl: projImg3,
  //     },
  //     {
  //       title: "Business Startup",
  //       description: "Design & Development",
  //       imgUrl: projImg1,
  //     },
  //     {
  //       title: "Business Startup",
  //       description: "Design & Development",
  //       imgUrl: projImg2,
  //     },
  //     {
  //       title: "Business Startup",
  //       description: "Design & Development",
  //       imgUrl: projImg3,
  //     },
  //   ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projects</h2>
                  <p>
                    Here are some of the school and personal projects that I
                    have worked on in the past.
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="capstone">
                          Capstone Project
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="webscraper">
                          Doordash Webscraper
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="spreadsheet">
                          Multi-User TCP/IP Spreadsheet
                        </Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="capstone">
                        <p>
                          <li>
                            An Outlook Add-In that enumerates through Law
                            Secretaries emails to sort and tag the emails based
                            on the specific words or phrases that the users
                            specify.
                          </li>
                          <li>
                            Developed the backend code using AI and C# to
                            classify the email and return the color of the
                            tagged email.
                          </li>
                          <li>
                            Utilize HTML, CSS, Javascript and Axios on the
                            frontend to tag the emails, set the important words,
                            and more.
                          </li>
                        </p>
                      </Tab.Pane>
                      <Tab.Pane eventKey="webscraper">
                        <p>
                          <li>
                            Implemented a webscraper that scrapes client
                            information for businesses on the Doordash platform
                            using Selenium and C#.
                          </li>
                          <li>
                            Gather user’s input and scrape the data within the
                            specified time frame.
                          </li>
                        </p>
                      </Tab.Pane>
                      <Tab.Pane eventKey="spreadsheet">
                        <p>
                          <li>
                            Developed a Spreadsheet GUI that Displays multiple
                            users input using C#.
                          </li>
                          <li>
                            {" "}
                            Constructed the server back-end using C++ taking in
                            multi-client requests .
                          </li>
                          <li>
                            Utilized Docker to outsource and deploy server and
                            client code.
                          </li>
                        </p>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
};
