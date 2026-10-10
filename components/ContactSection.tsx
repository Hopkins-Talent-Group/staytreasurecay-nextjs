import TitleLines from "@/components/TitleLines";
import { site } from "@/data/site";

const { contact } = site;

export default function ContactSection() {
  return (
    <section className="contact" id="contact">
      <div className="section-container">
        <p className="eyebrow">{contact.eyebrow}</p>

        <h2>
          <TitleLines lines={contact.titleLines} />
        </h2>

        <p>{contact.description}</p>

        <a href={`mailto:${contact.email}`} className="contact-link">
          {contact.email} →
        </a>
      </div>
    </section>
  );
}
