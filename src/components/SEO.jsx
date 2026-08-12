import { useEffect } from "react";

const SITE_NAME = "TEDx VETIAS";
const SITE_URL = "https://tedx.vetias.ac.in";
const DEFAULT_DESCRIPTION =
  "TEDx VETIAS brings ideas worth spreading to the VETIAS community through inspiring talks, bold stories, and meaningful conversations.";
const DEFAULT_IMAGE =
  "https://vetias.ac.in/wp-content/uploads/2022/03/favicon-vet.png";

const SEO = ({
  title,
  description,
  keywords,
  image = DEFAULT_IMAGE,
  canonicalUrl,
  type = "website",
}) => {
  useEffect(() => {
    const pageTitle = title ? `${title} | ${SITE_NAME}` : SITE_NAME;
    document.title = pageTitle;

    const setMeta = (selector, attributes, tagName = "meta") => {
      let element = document.head.querySelector(selector);
      if (!element) {
        element = document.createElement(tagName);
        Object.entries(attributes).forEach(([key, value]) => {
          if (value) element.setAttribute(key, value);
        });
        document.head.appendChild(element);
      } else {
        Object.entries(attributes).forEach(([key, value]) => {
          if (value) element.setAttribute(key, value);
        });
      }
      return element;
    };

    const currentPath = window.location.pathname;
    const canonicalHref =
      canonicalUrl || `${SITE_URL}${currentPath === "/" ? "" : currentPath}`;

    const metaDescription = setMeta('meta[name="description"]', {
      name: "description",
      content: description || DEFAULT_DESCRIPTION,
    });
    metaDescription.content = description || DEFAULT_DESCRIPTION;

    if (keywords) {
      setMeta('meta[name="keywords"]', {
        name: "keywords",
        content: keywords,
      });
    } else {
      const existingKeywords = document.head.querySelector(
        'meta[name="keywords"]',
      );
      if (existingKeywords) existingKeywords.remove();
    }

    setMeta('meta[property="og:title"]', {
      property: "og:title",
      content: pageTitle,
    });
    setMeta('meta[property="og:description"]', {
      property: "og:description",
      content: description || DEFAULT_DESCRIPTION,
    });
    setMeta('meta[property="og:type"]', { property: "og:type", content: type });
    setMeta('meta[property="og:url"]', {
      property: "og:url",
      content: canonicalHref,
    });
    setMeta('meta[property="og:image"]', {
      property: "og:image",
      content: image,
    });
    setMeta('meta[property="og:site_name"]', {
      property: "og:site_name",
      content: SITE_NAME,
    });

    setMeta('meta[name="twitter:card"]', {
      name: "twitter:card",
      content: "summary_large_image",
    });
    setMeta('meta[name="twitter:title"]', {
      name: "twitter:title",
      content: pageTitle,
    });
    setMeta('meta[name="twitter:description"]', {
      name: "twitter:description",
      content: description || DEFAULT_DESCRIPTION,
    });
    setMeta('meta[name="twitter:image"]', {
      name: "twitter:image",
      content: image,
    });

    setMeta('meta[name="robots"]', {
      name: "robots",
      content:
        "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
    });

    const canonicalLink =
      document.head.querySelector('link[rel="canonical"]') ||
      document.createElement("link");
    canonicalLink.rel = "canonical";
    canonicalLink.href = canonicalHref;
    if (!document.head.querySelector('link[rel="canonical"]')) {
      document.head.appendChild(canonicalLink);
    }
  }, [title, description, keywords, image, canonicalUrl, type]);

  return null;
};

export default SEO;
