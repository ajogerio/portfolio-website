import "./Greeting.css";

export default function Greeting() {
  return (
    <>
      <div className="greetingContainer">
        <h1 className="hi">Hi, I'm Angelo!</h1>
        <p className="bio">
          I am a website developer. Welcome to my Portfolio!
        </p>
        <button className="heroButton">See My Projects</button>
      </div>
    </>
  );
}
