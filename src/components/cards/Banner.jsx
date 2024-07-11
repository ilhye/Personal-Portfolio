import "../../styles/Card.css";

export default function Card() {
  return (
    <>
      <div className="card intro-card">
        <div className="card-body">
          <h1>First Name Last Name</h1>
          <h5>Description</h5>
        </div>
      </div>
      <img
        src="src\assets\powerpuff-prof.png"
        alt="Powerpuff"
        className="intro-image"
      />
    </>
  );
}
