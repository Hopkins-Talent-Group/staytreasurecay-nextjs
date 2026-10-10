import SmartImage from "@/components/SmartImage";
import TitleLines from "@/components/TitleLines";
import { site } from "@/data/site";

const { destination } = site;

export default function DestinationSection() {
  return (
    <section className="destination" id="destination">
      <div className="destination-image">
        <SmartImage src={destination.image.src} alt={destination.image.alt} />
      </div>

      <div className="destination-copy">
        <p className="eyebrow">{destination.eyebrow}</p>

        <h2>
          <TitleLines lines={destination.titleLines} />
        </h2>

        {destination.paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}

        <a href={destination.cta.href} className="text-button">
          {destination.cta.label}
          <span>{destination.cta.icon}</span>
        </a>
      </div>
    </section>
  );
}
