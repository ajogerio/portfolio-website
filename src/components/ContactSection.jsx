import SectionHeader from "./SectionHeader";
import SocialMediaBoxes from "./SocialMediaBoxes";
import ContactForm from "./ContactForm";
import './ContactSection.css'

export default function ContactSection() {
  return (
    <section>
      <SectionHeader title="Contact me" />
      <div className="contactContentContainer">
        <SocialMediaBoxes />
        <ContactForm />
      </div>
    </section>
  );
}
