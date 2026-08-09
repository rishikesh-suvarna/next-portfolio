import type { Project } from "@/lib/content";
import { projects } from "@/lib/content";
import { ProductShot } from "./ProductShot";

const featured = projects.filter((project) => project.featured);
const secondary = projects.filter((project) => !project.featured);

function CaseStudyLink({ href }: { href: string }) {
  return (
    <a
      className="inline-block pt-1 font-mono text-[12.5px] text-accent transition-opacity hover:opacity-70"
      href={href}
    >
      case study →
    </a>
  );
}

function FeaturedProject({ project }: { project: Project }) {
  return (
    <article className="grid gap-[11px] border-hairline border-b pt-8 pb-8 first:pt-0 lg:grid-cols-[380px_1fr] lg:items-center lg:gap-10">
      <ProductShot />
      <div className="flex flex-col gap-3">
        <div className="flex items-baseline gap-2.5 lg:gap-3.5">
          <h3 className="font-semibold text-[18px] tracking-[-0.01em] lg:text-[22px]">
            {project.name}
          </h3>
          <span className="font-mono text-[11px] text-label">
            {project.year}
          </span>
        </div>
        <p className="max-w-[58ch] text-pretty text-[14.5px] text-dim leading-[1.7] lg:text-[15.5px] lg:leading-[1.75]">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-x-3.5 font-mono text-[11.5px] text-meta lg:pt-0.5">
          {project.tags.map((tag) => (
            <span key={tag}>
              <span className="text-accent">·</span>
              {tag}
            </span>
          ))}
        </div>
        {project.caseStudyHref ? (
          <CaseStudyLink href={project.caseStudyHref} />
        ) : null}
      </div>
    </article>
  );
}

function SecondaryProject({ project }: { project: Project }) {
  return (
    <article className="flex flex-col gap-3">
      <ProductShot />
      <div className="flex items-baseline gap-3">
        <h3 className="font-semibold text-[18px]">{project.name}</h3>
        <span className="font-mono text-[11px] text-label">{project.year}</span>
      </div>
      <p className="text-pretty text-[14.5px] text-dim leading-[1.7]">
        {project.description}
      </p>
      <div className="font-mono text-[11.5px] text-meta">
        {project.tags.join(" · ")}
      </div>
    </article>
  );
}

export function Work() {
  return (
    <section
      className="flex flex-col gap-6 border-hairline border-b px-5.5 py-9 lg:gap-10 lg:px-16 lg:py-18"
      id="work"
    >
      <div className="flex items-baseline justify-between">
        <h2 className="font-medium text-[26px] tracking-[-0.02em] lg:text-[32px]">
          Selected work
        </h2>
        <span className="font-mono text-[11px] text-label uppercase tracking-[0.16em]">
          {String(projects.length).padStart(2, "0")} projects
        </span>
      </div>

      <div className="flex flex-col">
        {featured.map((project) => (
          <FeaturedProject key={project.name} project={project} />
        ))}

        <div className="grid gap-8 pt-8 lg:grid-cols-2 lg:gap-10">
          {secondary.map((project) => (
            <SecondaryProject key={project.name} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
