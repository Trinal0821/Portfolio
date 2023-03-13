
import { Container, Row, Col } from "react-bootstrap";
import github from "../assets/images/github.svg";
import linkedin from "../assets/images/linkedin.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <p id="logoName">TL</p>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
                <a href="https://github.com/Trinal0821">
                 <img src={github} alt="github"/>
                 </a>
                 <a href="https://www.linkedin.com/in/trina-luong-471489183/">
                   <img src={linkedin} alt="linkedin"/>
                 </a>
            </div>
            <p>Copyright 2023. All Rights Reserved for webdecoded</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}