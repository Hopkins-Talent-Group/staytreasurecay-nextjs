import SmartImage from "@/components/SmartImage";
import TitleLines from "@/components/TitleLines";
import { site } from "@/data/site";

const { islandLife } = site;

export default function IslandLifeSection() {
  return (
    <section className="island-video">
      <SmartImage src={islandLife.image.src} alt={islandLife.image.alt} />

      <div className="island-video-overlay">
        <p>{islandLife.kicker}</p>

        <h2>
          <TitleLines lines={islandLife.titleLines} />
        </h2>
      </div>
    </section>
  );
}
