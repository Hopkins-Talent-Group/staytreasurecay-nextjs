"use client";

import { useState } from "react";

type CallBennyButtonProps = {
  phoneNumber?: string;
  phoneHref?: string;
  label?: string;
  variant?: "stays" | "booking";
  className?: string;
};

export default function CallBennyButton({
  phoneNumber = "+1 (321) 276-1159",
  phoneHref = "tel:+13212761159",
  label = "Call Benny Directly",
  variant = "stays",
  className = "",
}: CallBennyButtonProps) {
  const [showNumber, setShowNumber] = useState(false);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!showNumber) {
      e.preventDefault();
      setShowNumber(true);
    }
    // Once number is shown, subsequent clicks trigger the tel: dialer action
  };

  return (
    <a
      href={phoneHref}
      onClick={handleClick}
      className={`call-benny-btn call-benny-btn--${variant} ${showNumber ? "is-revealed" : ""} ${className}`.trim()}
      aria-label={showNumber ? `Call Benny directly at ${phoneNumber}` : label}
      title={showNumber ? `Call ${phoneNumber}` : "Click to view phone number"}
    >
      <span className="call-benny-icon" aria-hidden="true">
        ☎
      </span>
      <span className="call-benny-text">
        {showNumber ? phoneNumber : label}
      </span>
      {showNumber ? (
        <span className="call-benny-action">· Call or Text</span>
      ) : (
        <span className="call-benny-arrow">→</span>
      )}
    </a>
  );
}
