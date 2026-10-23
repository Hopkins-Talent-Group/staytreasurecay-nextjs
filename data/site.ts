/**
 * All editable copy, links and imagery for the site lives here.
 * Update this file to change content without touching components.
 *
 * Heading/description strings may wrap emphasis in `*single asterisks*`
 * (<em>) or `**double asterisks**` (<strong>) — see components/TitleLines.tsx
 * and components/RichText.tsx.
 */

const links = {
  airbnbIslandEscape: "https://www.airbnb.com/rooms/636299636587811540",
  airbnbLittleShack: "https://www.airbnb.com/rooms/677430876779495640",
  vrbo: "https://www.vrbo.com/2767178?dateless=true",
  vrbo2: "https://www.vrbo.com/2667506?dateless=true",
  email: "mailto:stay@staytreasurecay.com",
};

export const contact = {
  email: "stay@staytreasurecay.com",
  phone: {
    display: "+1 (321) 276-1159",
    href: "tel:+13212761159",
    label: "Book Direct",
    withNumber: "Book Direct · +1 (321) 276-1159",
  },
} as const;

export const booking = {
  airbnb: { label: "Book on Airbnb", href: links.airbnbLittleShack },
  vrbo: { label: "Book on Vrbo", href: links.vrbo },
  vrbo2: { label: "Book on Vrbo", href: links.vrbo2 },
  airbnb2: { label: "Book on Airbnb", href: links.airbnbIslandEscape },
  direct: {
    href: contact.phone.href,
    label: contact.phone.label,
    withNumber: contact.phone.withNumber,
  },
} as const;

export type FooterColumn = {
  title: string;
  links: { label: string; href: string }[];
  lines?: string[];
};

export const site = {
  links,

  brand: {
    top: "STAY",
    main: "TREASURE CAY",
    location: "ABACO, BAHAMAS",
  },

  bookCta: { label: "Book Your Stay", href: "#booking" },

  navLinks: [
    { label: "Stays", href: "#stays" },
    { label: "Experience", href: "#experience" },
    { label: "Destination", href: "#destination" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ],

  hero: {
    video: "/media/Little-Shack-Of-Treasure.mp4",
    kicker: "TREASURE CAY · ABACO · BAHAMAS",
    titleLines: ["Your little piece", "of *paradise.*"],
    description:
      "Escape to turquoise waters, soft white sand and unforgettable island days in Treasure Cay.",
    primaryCta: { label: "Explore Our Stays", href: "#stays" },
    highlights: [
      {
        number: "01",
        title: "PRISTINE BEACHES",
        detail: "Miles of powder-soft white sand",
      },
      {
        number: "02",
        title: "CRYSTAL WATERS",
        detail: "Turquoise water as far as you can see",
      },
      {
        number: "03",
        title: "ISLAND LIFE",
        detail: "Slow days and local charm",
      },
      {
        number: "04",
        title: "UNFORGETTABLE",
        detail: "Memories that last a lifetime",
      },
    ],
  },

  about: {
    label: "ABOUT TREASURE CAY",
    titleLines: ["Slow down.", "Breathe deeper.", "*Stay awhile.*"],
    largeCopy: "Treasure Cay is more than a destination. It is a feeling.",
    paragraphs: [
      "Warm Caribbean water, powder-soft beaches, beautiful sunsets and peaceful island days make Treasure Cay the perfect place to step away from everyday life.",
      "Stay Treasure Cay gives you a comfortable place to call home while you experience everything that makes this corner of The Bahamas special.",
    ],
  },

  stays: {
    eyebrow: "WHERE YOU'LL STAY",
    title: "A place to call your own.",
    description:
      "Comfortable island accommodations designed for relaxing, reconnecting and enjoying Treasure Cay at your own pace.",
    properties: [
      
      {
        tag: "FEATURED STAY",
        location: "TREASURE CAY · BAHAMAS",
        title: "Little Shack of Treasure",
        description:
          "Wake up surrounded by sunshine, tropical breezes and the beauty of The Bahamas right outside your door.",
        image: {
          src: "/media/Little-Shack-Of-Treasure.mp4",
          alt: "Treasure Cay island getaway",
        },
        buttons: [
          {
            label: "Book on Airbnb",
            icon: "⌂",
            href: links.airbnbLittleShack,
            variant: "airbnb",
          },
          {
            label: "Book on Vrbo",
            icon: "V",
            href: links.vrbo,
            variant: "vrbo",
          },
        ],
      },
      {
        tag: "ISLAND GETAWAY",
        location: "TREASURE CAY · ABACO",
        title: "Sunday Morning",
        description:
          "Your cozy island retreat, made for easy mornings, beach days and evenings beneath the Caribbean sky.",
        image: {
          src: "/media/Sunday-Morning.mp4",
          alt: "Sunday Morning Treasure Cay",
        },
        buttons: [
          {
            label: "Book on Airbnb",
            icon: "⌂",
            href: links.airbnbIslandEscape,
            variant: "airbnb",
          },
          {
            label: "Book on Vrbo",
            icon: "V",
            href: links.vrbo2,
            variant: "vrbo2",
          },
        ],
      },
    ],
  },

  islandLife: {
    image: {
      src: "/images/95566d9e-fc61-4eb4-9433-89f25072944e.webp",
      alt: "Treasure Cay Bahamas",
    },
    kicker: "ISLAND LIFE",
    titleLines: ["This is what", "Sunday morning", "looks like here."],
  },

  experience: {
    eyebrow: "THE TREASURE CAY EXPERIENCE",
    title: "Make the island your itinerary.",
    description:
      "Some days are for exploring. Some are for doing absolutely nothing. In Treasure Cay, both are the right choice.",
    cards: [
      {
        number: "01",
        title: "Turquoise Waters",
        text: "Spend your days surrounded by some of the clearest water in the Caribbean.",
        image: {
          src: "/images/Turquoise-Waters.png",
          alt: "Turquoise waters in Treasure Cay",
        },
      },
      {
        number: "02",
        title: "Slow Beach Days",
        text: "White sand, warm sunshine and nowhere you need to be.",
        image: {
          src: "/images/Slow-beach-days.png",
          alt: "Treasure Cay beach",
        },
      },
      {
        number: "03",
        title: "Island Living",
        text: "Discover the relaxed pace and natural beauty of the Abacos.",
        image: {
          src: "/images/Island-Living.png",
          alt: "Island living in Treasure Cay",
        },
      },
      {
        number: "04",
        title: "Unforgettable Sunsets",
        text: "End each day with breathtaking colors across the Caribbean sky.",
        image: {
          src: "/images/Unforgettable-Sunsets.jpeg",
          alt: "Treasure Cay sunset",
        },
      },
    ],
  },

  destination: {
    image: {
      src: "/images/photo-1544551763-46a013bb70d5-1.avif",
      alt: "Treasure Cay Bahamas",
    },
    eyebrow: "THE DESTINATION",
    titleLines: ["Welcome to", "Treasure Cay."],
    paragraphs: [
      "A little corner of The Bahamas where the days feel longer, the water looks brighter and life moves a little slower.",
      "Whether you're planning a romantic escape, a family vacation or simply need a few days away from everything, Treasure Cay makes it easy to disconnect and enjoy the moment.",
    ],
    cta: { label: "PLAN YOUR ESCAPE", icon: "→", href: "#booking" },
  },

  booking: {
    eyebrow: "READY TO ESCAPE?",
    title: "Book your island getaway.",
    description:
      "Choose your preferred booking platform and start planning your Treasure Cay adventure.",
    directCta: "Call Benny Directly",
  },

  contact: {
    eyebrow: "QUESTIONS?",
    titleLines: ["Let's get you", "to the island."],
    description:
      "Have questions about a stay or planning your trip? Reach out and we'll help point you in the right direction.",
    email: "stay@staytreasurecay.com",
  },

  footer: {
    tagline: "Your little piece of paradise in Treasure Cay, Bahamas.",
    columns: [
      {
        title: "EXPLORE",
        links: [
          { label: "Stays", href: "#stays" },
          { label: "Experience", href: "#experience" },
          { label: "Destination", href: "#destination" },
          { label: "About", href: "#about" },
        ],
      },
      {
        title: "BOOKING",
        links: [
          { label: "Airbnb", href: links.airbnbLittleShack },
          { label: "Vrbo", href: links.vrbo },
          { label: booking.direct.withNumber, href: booking.direct.href },
        ],
      },
      {
        title: "CONTACT",
        links: [{ label: "stay@staytreasurecay.com", href: links.email }],
        lines: ["Treasure Cay, Abaco", "The Bahamas"],
      },
    ] satisfies FooterColumn[],
    bottom: ["© 2026 Stay Treasure Cay", "All Rights Reserved"],
  },
};

export type Site = typeof site;
