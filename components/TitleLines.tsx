import { Fragment } from "react";
import { richNodes } from "@/components/RichText";

/**
 * Renders a multi-line heading from `titleLines: string[]`, inserting <br />
 * between lines. Emphasis markers are handled by RichText.
 */
export default function TitleLines({ lines }: { lines: string[] }) {
  return (
    <>
      {lines.map((line, index) => (
        <Fragment key={index}>
          {index > 0 && <br />}
          {richNodes(line)}
        </Fragment>
      ))}
    </>
  );
}
