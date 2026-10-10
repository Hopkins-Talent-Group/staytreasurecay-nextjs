import Brand from "@/components/Brand";
import { site } from "@/data/site";

const { footer } = site;

function isExternal(href: string) {
  return /^https?:\/\//.test(href);
}

export default function SiteFooter() {
  return (
    <footer>
      <div className="footer-main">
        <div className="footer-brand">
          <Brand className="footer-logo" />
          <p>{footer.tagline}</p>
        </div>

        {footer.columns.map((column) => (
          <div className="footer-column" key={column.title}>
            <h4>{column.title}</h4>

            {column.links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                {...(isExternal(link.href)
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
              >
                {link.label}
              </a>
            ))}

            {column.lines?.map((line) => (
              <span key={line}>{line}</span>
            ))}
          </div>
        ))}
      </div>

      <div className="footer-bottom">
        <span>{footer.bottom[0]}</span>
        <span>{footer.bottom[1]}</span>
      </div>
    </footer>
  );
}
