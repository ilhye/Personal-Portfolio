import "../styles/Card.css"
export default function Card() {
  return (
    <div className="card intro-card">
      <div className="card-body">
        <div className="row">
          <div className="col-sm-8 left-card">
            <h1>First Name Last Name</h1>
            <h5>Description</h5>
          </div>
          <div className="col-sm-4">
            <img src="src\assets\powerpuff-prof.png" alt="Powerpuff" className="intro-image" />
          </div>
        </div>
      </div>
    </div>
  );
}
