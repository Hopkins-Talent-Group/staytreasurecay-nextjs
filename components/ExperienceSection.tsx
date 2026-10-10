import SectionHeading from "@/components/SectionHeading";
import SmartImage from "@/components/SmartImage";
import { site } from "@/data/site";

const { experience } = site;

export default function ExperienceSection() {
  return (
    <section className="experience section" id="experience">
      <div className="section-container">
        <SectionHeading
          eyebrow={experience.eyebrow}
          title={experience.title}
          description={experience.description}
        />

        <div className="experience-grid">
          {experience.cards.map((card) => (
            <article className="experience-card" key={card.number}>
              <div className="experience-image">
                <SmartImage src={card.image.src} alt={card.image.alt} />
              </div>

              <div className="experience-content">
                <span>{card.number}</span>
                <h3>{card.title}</h3>
                <p>{card.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
