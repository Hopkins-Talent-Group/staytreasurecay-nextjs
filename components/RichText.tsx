import { Fragment } from "react";

/**
 * Splits a string into text nodes, turning `**strong**` into <strong> and
 * `*emphasis*` into <em>. Markers are stripped from the output.
 */
export function richNodes(text: string): React.ReactNode[] {
  return text
    .split(/(\*\*[^*]+\*\*|\*[^*]+\*)/)
    .filter(Boolean)
    .map((part, index) => {
      if (part.startsWith("**") && part.endsWith("**")) {
        return <strong key={index}>{part.slice(2, -2)}</strong>;
      }
      if (part.startsWith("*") && part.endsWith("*")) {
        return <em key={index}>{part.slice(1, -1)}</em>;
      }
      return <Fragment key={index}>{part}</Fragment>;
    });
}

export default function RichText({ text }: { text: string }) {
  return <>{richNodes(text)}</>;
}
