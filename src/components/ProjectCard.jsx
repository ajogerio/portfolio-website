import "./ProjectCard.css";

export default function ProjectCard() {
  return (
    <div className="card">
      <img className="picture" src="website-placeholder-image.jpg" />
      <div className="infoContainer">
        <h3>Project Title</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>
    </div>
  );
}
