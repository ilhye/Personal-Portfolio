import Button from "../components/button/Button";
import Card from "../components/card/IntroductionCard";
import Projects from "../components/card/ProjectCard";
import "../styles/Home.css";
import Education from "../components/card/EducationCard";
import Gallery from "../components/card/GalleryCard";

export default function Home() {
  return (
    <>
      <Card />
      <div className="row home-container">
        <div className="col-sm-4 project-container">
          <h3 className="header">Projects</h3>
          <div className="row">
            <div className="col">
              <Projects
                panel="home"
                source="https://placehold.jp/172x231.png"
                altName="first-project"
                title=""
                description="@ilhye"
              />
            </div>
            <div className="col">
              <Projects
                panel="home"
                source="https://placehold.jp/172x231.png"
                altName="second-project"
                title=""
                description="@ilhye"
              />
            </div>
          </div>
          <Button variant="primary">View More</Button>
        </div>
        <div className="col-sm-6 education-container">
          <h3 className="header">Education</h3>
          <div className="col">
            <Education />
          </div>
          <div className="col">
            <Education />
          </div>
        </div>
        <div className="col-sm-2 gallery-container">
          <Gallery />
          <Gallery />
        </div>
      </div>
    </>
  );
}
