export default function setSEO({ title, description, url, image }) {
  // ✅ Title
  if (title) document.title = title;

  // ✅ Meta description
  let metaDesc = document.querySelector("meta[name='description']");
  if (!metaDesc) {
    metaDesc = document.createElement("meta");
    metaDesc.name = "description";
    document.head.appendChild(metaDesc);
  }
  if (description) metaDesc.setAttribute("content", description);

  // ✅ Canonical
  let link = document.querySelector("link[rel='canonical']");
  if (!link) {
    link = document.createElement("link");
    link.rel = "canonical";
    document.head.appendChild(link);
  }
  if (url) link.href = url;

  // ✅ Open Graph dynamic
  const setOG = (property, content) => {
    if (!content) return;
    let ogTag = document.querySelector(`meta[property='${property}']`);
    if (!ogTag) {
      ogTag = document.createElement("meta");
      ogTag.setAttribute("property", property);
      document.head.appendChild(ogTag);
    }
    ogTag.setAttribute("content", content);
  };

  setOG("og:title", title);
  setOG("og:description", description);
  setOG("og:url", url);
  setOG("og:type", "website");
  setOG("og:image", image || "https://izzatillo.uz/for_meta.jpg");

  // ✅ Schema.org Person (with your social links)
  const existingLD = document.getElementById("json-ld-person");
  if (existingLD) existingLD.remove();

  const ld = document.createElement("script");
  ld.type = "application/ld+json";
  ld.id = "json-ld-person";
  ld.innerHTML = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Izzatillo Davlatov",
    url: "https://izzatillo.uz",
    image: image || "https://izzatillo.uz/for_meta.jpg",
    jobTitle: "Frontend Developer",
    sameAs: [
      "https://t.me/izzatillod",      
      "https://instagram.com/davlatovizzatillo7",
      "https://github.com/frontdevuz",
      "https://www.facebook.com/profile.php?id=100068075402404"
    ],
    worksFor: {
      "@type": "Organization",
      name: "Freelance Developer"
    }
  });
  document.head.appendChild(ld);
}
