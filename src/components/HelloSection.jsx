import Greeting from "./Greeting"
import ProfilePicture from "./profilePicture"
import './HelloSection.css'

export default function HelloSection() {
  return (
    <>
      <section className="mainContainer">
        <Greeting />
        <ProfilePicture />
      </section>
    </>
  )
}