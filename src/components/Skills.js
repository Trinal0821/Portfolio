//import Carousel from 'react-multi-carousel';
import Carousel from "react-bootstrap/Carousel";
import "react-multi-carousel/lib/styles.css";
import colorSharp from "../assets/images/color-sharp.png";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <Carousel>
                <Carousel.Item>
                  <h3>Languages</h3>
                  <p>
                  Java<br></br>
                  Python<br></br>
                  C# <br></br>
                  SQL <br></br>
                  Kotlin <br></br>
                  HTML <br></br>
                  CSS <br></br>
                  Javascript <br></br>
                  </p>
                </Carousel.Item>

                <Carousel.Item>
                  <h3>Operating Systems</h3>
                  <p>
                      Window <br></br>
                      Linux <br></br>
                      Apple <br></br>
                      Android <br></br>
                      IOS <br></br>
                  </p>
                </Carousel.Item>
                <Carousel.Item>
                  <h3>Database</h3>
                    <p>
                      SQL Server
                    </p>
                </Carousel.Item>
                <Carousel.Item>
                  <h3>Software and Libraries</h3>
                    <p>
                    Jira <br></br>
                      Spira <br></br>
                      Visual Studio <br></br>
                      Visual Studio Code <br></br>
                      Appium<br></br>
                      Android Studio <br></br>
                      XCode <br></br>
                      Espresso <br></br>
                      XCUITest <br></br>
                    </p>
                </Carousel.Item>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  );
};
