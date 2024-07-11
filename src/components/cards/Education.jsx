import "../../styles/Education.css";

export default function Education() {
  return (
    <div className="card education-card">
      <div className="card-body">
        <div className="row">
          <div className="col-sm-4">
            <img src="https://placehold.jp/95x95.png" alt="school-logo" />
          </div>
          <div className="col-sm-8">
            <h5 className="card-title">School</h5>
            <p>year</p>
            <p>Description</p>
          </div>
        </div>
      </div>
    </div>
  );
}
