import {useState, useEffect} from "react";
import { Container, Row, Col } from "react-bootstrap";
import {ArrowRightCircle} from "react-bootstrap-icons";
import headerImg from "../assets/images/profilepic.jpg";

export const Banner = () => {
    const[loopNum, setLoopNum] = useState(0);
    const[isDeleting, setIsDeleting] = useState(false);
    const toRotate = ["a Student", "an Intern", "a Software Engineer"];
    const[text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const [index, setIndex] = useState(1);
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta)

        return () => {clearInterval(ticker)};
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updateText = isDeleting ? fullText.substring(0, text.length-1) : fullText.substring(0, text.length + 1)

        setText(updateText)

        if(isDeleting) {
            setDelta(prevDelta => prevDelta/2)
        }

        if(!isDeleting && updateText === fullText) {
            setIsDeleting(true)
            setIndex(prevIndex => prevIndex -1);
            setDelta(period)
        }
        else if(isDeleting && updateText==="") {
            setIsDeleting(false);
            setLoopNum(loopNum+1)
            setIndex(1);
            setDelta(500)
        }
    }

    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <span classname="tagline">Welcome to my Portfolio</span>
                        <h1>{`Hi I'm Trina `}<span className="wrap">{text}</span></h1>
                        <p>I'm a student at the University of Utah majoring in Computer Science. I'm also an QA Engineer Intern at SelectHealth where I write over 200+
                            mobile automation test cases for both Android and IOS using Appium, Espresso and XCUITest. I love all aspects of coding whether it is as a 
                            Software Engineer or QA Engineer. If there's coding and problem solving involved sign me up!
                        </p>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={headerImg} alt="Headder img"/>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}