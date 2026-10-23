import BookButtons from "@/components/BookButtons";
import CallBennyButton from "@/components/CallBennyButton";
import { booking as bookingLinks, contact, site } from "@/data/site";

const { booking } = site;

export default function BookingSection() {
  return (
    <section className="booking" id="booking">
      <div className="section-container booking-inner">
        <div>
          <p className="eyebrow">{booking.eyebrow}</p>

          <h2>{booking.title}</h2>

          <p>{booking.description}</p>

          <CallBennyButton
            phoneHref={contact.phone.href}
            phoneNumber={contact.phone.display}
            label={booking.directCta}
            variant="booking"
          />
        </div>

        <div className="booking-buttons">
          <BookButtons
            variant="cta"
            airbnbHref={bookingLinks.airbnb.href}
            showNumber
          />
        </div>
      </div>
    </section>
  );
}
