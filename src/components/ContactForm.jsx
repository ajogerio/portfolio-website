import "./ContactForm.css";

export default function ContactForm() {
  return (
    <div className="contactFormContainer">
      <h3>Message Form</h3>
      <p>Send me a message! What do you have in mind? (◕‿◕)</p>
      <form className="form">
        <div className="formTop">
          <input className="firstName" placeholder="Your First Name" />
          <input className="email" placeholder="Your Email" />
        </div>
        <input className="subject" placeholder="Subject"/>
        <textarea className="message" placeholder="Message..."/>
        <button className="submitButton" type="submit"><i className="fa-solid fa-paper-plane planeIcon"></i>Send Message</button>
      </form>
    </div>
  );
}
