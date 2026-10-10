import { booking } from "@/data/site";

type BookButtonsProps = {
  variant: "hero" | "card" | "cta";
  airbnbHref: string;
  showVrbo?: boolean;
  showNumber?: boolean;
  showPhoneIcon?: boolean;
};

const classes = {
  hero: { a: "btn btn-primary", v: "btn btn-outline", d: "btn btn-direct" },
  card: {
    a: "booking-btn airbnb",
    v: "booking-btn vrbo",
    d: "booking-btn direct",
  },
  cta: { a: "big-book airbnb", v: "big-book vrbo", d: "big-book direct" },
};

export default function BookButtons({
  variant,
  airbnbHref,
  showVrbo = true,
  showNumber = false,
  showPhoneIcon = true,
}: BookButtonsProps) {
  const cls = classes[variant];

  return (
    <>
      <a
        href={airbnbHref}
        target="_blank"
        rel="noopener noreferrer"
        className={cls.a}
      >
        <span>⌂</span>
        {booking.airbnb.label}
      </a>

      {showVrbo && (
        <a
          href={booking.vrbo.href}
          target="_blank"
          rel="noopener noreferrer"
          className={cls.v}
        >
          <span>V</span>
          {booking.vrbo.label}
        </a>
      )}

      <a href={booking.direct.href} className={cls.d}>
        {showPhoneIcon && <span>☎</span>}
        {showNumber ? booking.direct.withNumber : booking.direct.label}
      </a>
    </>
  );
}
