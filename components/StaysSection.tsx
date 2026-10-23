import BookButtons from "@/components/BookButtons";
import CallBennyButton from "@/components/CallBennyButton";
import SectionHeading from "@/components/SectionHeading";
import SmartImage from "@/components/SmartImage";
import { contact, site } from "@/data/site";

const { stays, booking } = site;

export default function StaysSection() {
  return (
    <section className="stays section" id="stays">
      <div className="section-container">
        <SectionHeading
          eyebrow={stays.eyebrow}
          title={stays.title}
          description={stays.description}
        />

        <div className="stays-cta-wrap">
          <CallBennyButton
            phoneHref={contact.phone.href}
            phoneNumber={contact.phone.display}
            label={booking.directCta}
            variant="stays"
          />
        </div>

        <div className="property-grid">
          {stays.properties.map((property) => {
            const airbnbBtn = property.buttons.find((button) =>
              button.variant.startsWith("airbnb"),
            );
            const vrboBtn = property.buttons.find((button) =>
              button.variant.startsWith("vrbo"),
            );

            return (
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
                      airbnbHref={airbnbBtn?.href ?? property.buttons[0].href}
                      vrboHref={vrboBtn?.href}
                      showVrbo={Boolean(vrboBtn)}
                    />
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
