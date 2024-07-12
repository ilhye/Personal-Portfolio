import IntroductionCard from "../components/card/IntroductionCard";
import Gallery from "../components/card/GalleryCard";
import EducationCard from "../components/card/EducationCard";
import "../styles/About.css"

export default function About() {
  return (
    <>
      <IntroductionCard />
      <div className="row">
        <div className="col-md-2 gallery-container">
          <Gallery />
          <Gallery />
          <Gallery />
        </div>
        <div className="col-md-10">
          <h3>Education</h3>
          <div className="row">
            <EducationCard />
            <EducationCard />
          </div>

          <div className="row">
            <div className="col-md-8">
              <h3>About</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
            <div className="col-md-2">
                <h3>Skills</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
