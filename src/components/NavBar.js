import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import linkedin from "../assets/images/linkedin.svg"
import github from "../assets/images/github.svg"
import { HashLink } from 'react-router-hash-link';
import "@fontsource/pacifico";
import resume from "../assets/Resume(2023).pdf"
import {
  BrowserRouter as Router
} from "react-router-dom";

export const NavBar = () => {

  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  return (
    <Router>
      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand href="/">
           <p id="logoName">TL</p>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
            <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
             <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
             <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
             <Nav.Link href={resume} target="_blank" className={activeLink === 'resume' ? 'active navbar-link' : 'navbar-link'} >Resume</Nav.Link>
            </Nav>
            <span className="navbar-text">
              <div className="social-icon">
                <a href="https://github.com/Trinal0821">
                 <img src={github} alt="github"/>
                 </a>
                 <a href="https://www.linkedin.com/in/trina-luong-471489183/">
                   <img src={linkedin} alt="linkedin"/>
                 </a>
              </div>
              <HashLink to='#connect'>
                <button className="vvd"><span>Let’s Connect</span></button>
              </HashLink>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  )
}



// // import Container from 'react-bootstrap/Container';
// // import Nav from 'react-bootstrap/Nav';
// // import Navbar from 'react-bootstrap/Navbar';
// // import NavDropdown from 'react-bootstrap/NavDropdown';

// import {Navbar, Container, Nav} from "react-bootstrap";
// import { useState, useEffect } from "react";
// import linkedin from "../assets/images/linkedin.svg"
// import github from "../assets/images/github.svg"
// import "@fontsource/pacifico";
// import { HashLink } from 'react-router-hash-link';

// export const NavBar = () => {
//     const [activeLink, setActiveLink] = useState('home');
//     const [scrolled, setScrolled] = useState(false);

//     useEffect(() => {
//       const onScroll = () => {
//           if(window.scrollY > 50) {
//             setScrolled = true;
//           }
//           else {
//             setScrolled = false;
//           }
//       }

//       window.addEventListener("scroll", onScroll);

//       return () => window.removeEventListener("scroll", onScroll);
//     }, [])

//     const onUpdateActiveLink = (value) => {
//       setActiveLink(value);
//     }

//   return (
//     <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
//       <Container>
//         <Navbar.Brand href="#home">
//            <p id="logoName">TL</p>
//         </Navbar.Brand>
//         <Navbar.Toggle aria-controls="basic-navbar-nav">
//             <span className="navbar-toggler-icon"></span>
//         </Navbar.Toggle>
//         <Navbar.Collapse id="basic-navbar-nav">
//           <Nav className="me-auto">
//             <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
//             <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
//             <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
//             <Nav.Link href="#resume" className={activeLink === 'resume' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('resume')}>Resume</Nav.Link>
//           </Nav>
//           <span className="navbar-text">
//             <div className="social-icon">  
//                 <a href="https://github.com/Trinal0821">
//                 <img src={github} alt="github"/>
//                 </a>
//                 <a href="https://www.linkedin.com/in/trina-luong-471489183/">
//                   <img src={linkedin} alt="linkedin"/>
//                 </a>
//             </div>
//             <HashLink to='#connect'>
//                 <button className="vvd"><span>Let’s Connect</span></button>
//             </HashLink>
//           </span>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// }