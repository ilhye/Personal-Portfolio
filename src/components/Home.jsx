import Button from "./Button";
import Card from "./cards/Banner";
import Projects from "./cards/Projects";
import "../styles/Home.css";
import Education from "./cards/Education";
import Gallery from "./cards/Gallery";

export default function Home() {
  return (
    <>
      <Card />
      <div className="row home-container">
        <div className="col-sm-4 project-container">
          <h3 className="header">Projects</h3>
          <div className="row">
            <div className="col">
              <Projects />
            </div>
            <div className="col">
              <Projects />
            </div>
            <Button />
          </div>
        </div>
        <div className="col-sm-5 education-container">
          <h3 className="header">Education</h3>
          <div className="col">
            <Education />
          </div>
          <div className="col">
            <Education />
          </div>
        </div>
        <div className="col-sm-2 gallery-container">
          <Gallery/>
          <Gallery/>
        </div>
      </div>
    </>
  );
}
