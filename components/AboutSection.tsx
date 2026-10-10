import TitleLines from "@/components/TitleLines";
import { site } from "@/data/site";

const { about } = site;

export default function AboutSection() {
  return (
    <section className="about section" id="about">
      <div className="section-container about-grid">
        <div className="section-label">
          <span>{about.label}</span>
          <div className="label-line"></div>
        </div>

        <div className="about-copy">
          <h2>
            <TitleLines lines={about.titleLines} />
          </h2>

          <p className="large-copy">{about.largeCopy}</p>

          {about.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
