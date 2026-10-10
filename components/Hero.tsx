import TitleLines from "@/components/TitleLines";
import { booking, site } from "@/data/site";

const { hero, bookCta } = site;

export default function Hero() {
  return (
    <section className="hero">
      <video
        className="hero-video"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
      >
        <source src={hero.video} type="video/mp4" />
      </video>

      <div className="hero-overlay"></div>

      <div className="hero-content">
        <p className="hero-kicker">{hero.kicker}</p>

        <h1>
          <TitleLines lines={hero.titleLines} />
        </h1>

        <p className="hero-description">{hero.description}</p>

        <div className="hero-actions">
          <a href={hero.primaryCta.href} className="btn btn-primary">
            {hero.primaryCta.label}
          </a>

          <a href={bookCta.href} className="btn btn-outline">
            {bookCta.label}
          </a>

          <a href={booking.direct.href} className="btn btn-direct">
            {booking.direct.withNumber}
          </a>
        </div>
      </div>

      <div className="hero-highlights">
        {hero.highlights.map((item) => (
          <div key={item.number}>
            <strong>{item.number}</strong>
            <span>{item.title}</span>
            <small>{item.detail}</small>
          </div>
        ))}
      </div>
    </section>
  );
}
