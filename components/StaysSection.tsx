import BookButtons from "@/components/BookButtons";
import SectionHeading from "@/components/SectionHeading";
import SmartImage from "@/components/SmartImage";
import { site } from "@/data/site";

const { stays } = site;

export default function StaysSection() {
  return (
    <section className="stays section" id="stays">
      <div className="section-container">
        <SectionHeading
          eyebrow={stays.eyebrow}
          title={stays.title}
          description={stays.description}
        />

        <div className="property-grid">
          {stays.properties.map((property) => (
            <article className="property-card" key={property.title}>
              <div className="property-image">
                <SmartImage src={property.image.src} alt={property.image.alt} />
                <span className="property-tag">{property.tag}</span>
              </div>

              <div className="property-content">
                <p className="property-location">{property.location}</p>

                <h3>{property.title}</h3>

                <p>{property.description}</p>

                <div className="property-buttons">
                  <BookButtons
                    variant="card"
                    airbnbHref={property.buttons[0].href}
                    showVrbo={property.buttons.some(
                      (button) => button.variant === "vrbo",
                    )}
                  />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
