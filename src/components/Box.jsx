import "./Box.css";

export default function Box(props) {
  const { socialMedia, socialMediaIcon, socialMediaUsername } = props;
  return (
    <div className="boxContainer">
      <div className="circle">
        {socialMediaIcon}
      </div>
      <div className="boxDetailsContainer">
        <h4>{socialMedia}</h4>
        <p>{socialMediaUsername}</p>
      </div>
    </div>
  );
}
