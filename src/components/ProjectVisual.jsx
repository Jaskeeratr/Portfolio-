import { useEffect, useMemo, useState } from "react";

export default function ProjectVisual({ project, className = "", imageClassName = "" }) {
  const sources = useMemo(
    () =>
      [project.storyImage, project.image, "/images/projects/portfolio-website.svg"].filter(
        Boolean
      ),
    [project.image, project.storyImage]
  );
  const [sourceIndex, setSourceIndex] = useState(0);
  const activeSource = sources[sourceIndex] ?? sources[0];

  useEffect(() => {
    setSourceIndex(0);
  }, [project.slug]);

  function handleError() {
    setSourceIndex((index) => Math.min(index + 1, sources.length - 1));
  }

  return (
    <figure className={`project-visual-frame ${className}`.trim()}>
      <img
        className={`project-visual-image ${imageClassName}`.trim()}
        src={activeSource}
        alt={project.storyImageAlt || `${project.name} project visual`}
        loading="lazy"
        decoding="async"
        onError={handleError}
      />
      <span className="project-visual-orbit" aria-hidden="true" />
      <span className="project-visual-glare" aria-hidden="true" />
    </figure>
  );
}
