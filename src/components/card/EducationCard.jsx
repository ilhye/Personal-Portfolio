import "../../styles/EducationCard.css";

export default function Education() {
  return (
    <div className="card education">
      <div className="card-body">
        <div className="row">
          <div className="col-md-4">
            <img src="https://placehold.jp/95x95.png" alt="school-logo" />
          </div>
          <div className="col-md-8">
            <h5 className="card-title">School</h5>
            <p>year</p>
            <p>Description</p>
          </div>
        </div>
      </div>
    </div>
  );
}
