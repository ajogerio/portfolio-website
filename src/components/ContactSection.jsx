import SectionHeader from "./SectionHeader";
import SocialMediaBoxes from "./SocialMediaBoxes";
import ContactForm from "./ContactForm";

export default function ContactSection() {
  return (
    <section>
      <SectionHeader title="Contact me" />
      <SocialMediaBoxes />
      <ContactForm />
    </section>
  );
}
