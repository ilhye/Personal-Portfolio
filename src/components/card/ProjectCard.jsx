import "../../styles/ProjectCard.css";

const sizes = {
  md: "img__size__md",
  lg: "img__size__lg",
};

const cardSize = {
  md: "card__size__md",
  lg: "card__size__lg",
};

export default function Projects({
  panel,
  source,
  size,
  sizeCard,
  altName,
  title,
  description,
}) {
  return (
    <div className={`card project-card ${cardSize[sizeCard]}`}>
      <img src={source} className={`card-img img-fluid ${sizes[size]}`} alt={altName} />
      {panel === "home" ? (
        <div className="card-img-overlay">
          <p>{description}</p>
        </div>
      ) : (
        <div className="card-body">
          <div className="card-title">{title}</div>
          <div className="card-text">{description}</div>
        </div>
      )}
    </div>
  );
}
