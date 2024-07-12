import Projects from "../components/card/ProjectCard";
import "../styles/Project.css"

export default function Project() {
  return (
    <div className="row project">
      <div className="col">
        <Projects
          panel="projects"
          source="https://placehold.jp/172x231.png"
          size="lg"
          sizeCard="lg"
          altName="first-project"
          title="Bank System"
          description="This projects used CRUD (create, read, update and delete) for the creation. It is uses C programming language."
        />
        <Projects
          panel="projects"
          source="https://placehold.jp/172x231.png"
          altName="first-project"
          size="lg"
          sizeCard="lg"
          title="Inventory System"
          description="This projects used CRUD (create, read, update and delete) for the creation. It is uses C programming language."
        />
      </div>
      <div className="col">
        <Projects
          panel="projects"
          source="https://placehold.jp/172x231.png"
          altName="first-project"
          size="lg"
          sizeCard="lg"
          title="Bank System"
          description="This projects used CRUD (create, read, update and delete) for the creation. It is uses C programming language."
        />
        <Projects
          panel="projects"
          source="https://placehold.jp/172x231.png"
          altName="first-project"
          size="lg"
          sizeCard="lg"
          title="Bank System"
          description="This projects used CRUD (create, read, update and delete) for the creation. It is uses C programming language."
        />
      </div>
    </div>
  );
}
