import { useMemo, useState } from 'react';
import { ArrowDown, ArrowUpRight, Check, Copy, Download, FileText } from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';
import { ContactSection } from './components/ContactSection';
import { Header } from './components/Header';
import { ProjectModal } from './components/ProjectModal';
import { ProjectSchematic } from './components/ProjectSchematic';
import { Reveal } from './components/Reveal';
import {
  CERTIFICATIONS,
  EDUCATION,
  EXPERIENCE,
  PROFILE,
  PROJECTS,
  SKILL_GROUPS,
  type ProjectCategory,
  type ProjectItem,
} from './data/portfolioData';

const PROJECT_FILTERS: { id: ProjectCategory; label: string }[] = [
  { id: 'all', label: 'All Projects' },
  { id: 'fullstack', label: 'Full-Stack' },
  { id: 'backend', label: 'Backend & Auth' },
  { id: 'realtime', label: 'Real-Time & AI' },
];

export default function App() {
  const prefersReducedMotion = useReducedMotion();
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('all');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [activeSkillGroupId, setActiveSkillGroupId] = useState<string | null>(null);
  const [heroCopied, setHeroCopied] = useState(false);

  const filteredProjects = useMemo(() => {
    if (activeCategory === 'all') return PROJECTS;
    return PROJECTS.filter((project) => project.category.includes(activeCategory));
  }, [activeCategory]);

  const handleCopyHeroEmail = async () => {
    try {
      await navigator.clipboard.writeText(PROFILE.email);
      setHeroCopied(true);
      window.setTimeout(() => setHeroCopied(false), 1800);
    } catch {
      setHeroCopied(false);
    }
  };

  return (
    <div id="top" className="min-h-screen bg-[#F7F7F5] text-[#111214]">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="pt-12 pb-16 sm:pt-16 lg:pt-20 lg:pb-24">
          <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
            <div className="grid items-stretch gap-10 lg:grid-cols-12 lg:gap-12">
              {/* Left Typographic Column */}
              <motion.div
                initial={prefersReducedMotion ? false : { opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.48, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col justify-between lg:col-span-7"
              >
                <div>
                  <div className="flex flex-wrap items-center gap-2 text-[13px] text-[#4E525B]">
                    <span>{PROFILE.role}</span>
                    <span aria-hidden="true" className="text-[#B5B9C2]">
                      ·
                    </span>
                    <span>{PROFILE.shortLocation}</span>
                  </div>

                  <h1 className="mt-5 font-display text-[clamp(2.35rem,4.5vw,3.75rem)] font-medium leading-[1.08] tracking-[-0.03em] text-[#111214]">
                    {PROFILE.headline}
                  </h1>

                  <p className="mt-6 max-w-[60ch] text-[16px] leading-[1.7] text-[#4E525B]">
                    {PROFILE.summary}
                  </p>
                </div>

                <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-4">
                  <a
                    href="#projects"
                    className="inline-flex min-h-[44px] items-center gap-2 rounded-md bg-[#111214] px-5 py-2.5 text-[14px] font-medium text-white whitespace-nowrap shrink-0 transition-colors duration-150 hover:bg-[#1D4ED8]"
                  >
                    <span>View Selected Work</span>
                    <ArrowDown className="h-4 w-4" />
                  </a>

                  <a
                    href={PROFILE.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-[44px] items-center gap-1.5 text-[14px] font-medium text-[#111214] whitespace-nowrap shrink-0 underline decoration-[#C7CBD4] underline-offset-4 transition-colors duration-150 hover:text-[#1D4ED8] hover:decoration-[#1D4ED8]"
                  >
                    <span>GitHub</span>
                    <ArrowUpRight className="h-4 w-4" />
                  </a>

                  <a
                    href={PROFILE.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-[44px] items-center gap-1.5 text-[14px] font-medium text-[#111214] whitespace-nowrap shrink-0 underline decoration-[#C7CBD4] underline-offset-4 transition-colors duration-150 hover:text-[#1D4ED8] hover:decoration-[#1D4ED8]"
                  >
                    <span>LinkedIn</span>
                    <ArrowUpRight className="h-4 w-4" />
                  </a>

                  <a
                    href={PROFILE.resumePdfUrl}
                    download="Harsh_Dhawan_Resume.pdf"
                    className="inline-flex min-h-[44px] items-center gap-1.5 text-[14px] font-medium text-[#4E525B] whitespace-nowrap shrink-0 transition-colors duration-150 hover:text-[#111214]"
                  >
                    <Download className="h-4 w-4" />
                    <span>Resume PDF</span>
                  </a>
                </div>
              </motion.div>

              {/* Right Editorial Index Folio */}
              <motion.aside
                initial={prefersReducedMotion ? false : { opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
                aria-label="Engineering dossier"
                className="flex flex-col justify-between rounded-lg border border-[#E3E4E8] bg-white p-6 sm:p-8 lg:col-span-5"
              >
                <div>
                  <div className="flex items-center justify-between border-b border-[#ECEEF1] pb-4 text-[12px] font-mono text-[#787D87] tabular-nums">
                    <span>Index</span>
                    <span>2025 — 2026</span>
                  </div>

                  <div className="mt-5">
                    <p className="text-[12px] text-[#787D87]">Current Role</p>
                    <p className="mt-1 text-[15px] font-semibold text-[#111214]">
                      Full Stack Developer Intern, EnviroSusIQ
                    </p>
                    <p className="mt-1 text-[13px] text-[#4E525B]">
                      Dehradun, India · Hybrid · Aug 2026 – Present
                    </p>
                  </div>

                  <div className="mt-6 border-t border-[#ECEEF1] pt-5">
                    <p className="text-[12px] text-[#787D87]">Featured Architecture Notes</p>
                    <ul className="mt-3 divide-y divide-[#ECEEF1]">
                      {PROJECTS.map((project) => (
                        <li key={project.id}>
                          <button
                            type="button"
                            onClick={() => setSelectedProject(project)}
                            className="group flex w-full items-center justify-between gap-4 py-2.5 text-left transition-colors duration-150"
                          >
                            <span className="flex items-baseline gap-3">
                              <span className="font-mono text-[12px] text-[#787D87] tabular-nums">
                                {project.index}
                              </span>
                              <span className="text-[14px] font-medium text-[#111214] transition-colors group-hover:text-[#1D4ED8]">
                                {project.title}
                              </span>
                            </span>
                            <span className="flex items-center gap-2 text-[12px] text-[#787D87] whitespace-nowrap shrink-0">
                              <span className="hidden sm:inline">{project.subtitle}</span>
                              <ArrowUpRight className="h-3.5 w-3.5 text-[#787D87] transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[#1D4ED8]" />
                            </span>
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-6 flex items-center justify-between gap-3 border-t border-[#ECEEF1] pt-4 text-[13px]">
                  <a
                    href={`mailto:${PROFILE.email}`}
                    className="truncate font-mono text-[12px] text-[#4E525B] transition-colors hover:text-[#1D4ED8]"
                  >
                    {PROFILE.email}
                  </a>
                  <button
                    type="button"
                    onClick={handleCopyHeroEmail}
                    className="inline-flex items-center gap-1.5 text-[12px] font-medium text-[#111214] whitespace-nowrap shrink-0 transition-colors hover:text-[#1D4ED8]"
                  >
                    {heroCopied ? (
                      <>
                        <Check className="h-3.5 w-3.5 text-[#1D4ED8]" />
                        <span className="text-[#1D4ED8]">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="h-3.5 w-3.5" />
                        <span>Copy email</span>
                      </>
                    )}
                  </button>
                </div>
              </motion.aside>
            </div>

            {/* Full-Width 4-Column Specification Strip below Hero Split */}
            <div className="mt-14 grid grid-cols-1 divide-y divide-[#E3E4E8] border-y border-[#E3E4E8] sm:grid-cols-2 sm:divide-y-0 lg:grid-cols-4 lg:divide-x">
              <div className="py-5 sm:pr-6 lg:px-6 lg:first:pl-0">
                <p className="text-[12px] text-[#787D87]">Current Position</p>
                <p className="mt-1 text-[14px] font-medium text-[#111214]">
                  EnviroSusIQ · Intern
                </p>
              </div>
              <div className="py-5 sm:border-l sm:border-[#E3E4E8] sm:pl-6 lg:px-6">
                <p className="text-[12px] text-[#787D87]">Education</p>
                <p className="mt-1 text-[14px] font-medium text-[#111214] tabular-nums">
                  B.Tech CSE · 7.26 CGPA
                </p>
              </div>
              <div className="py-5 sm:border-t sm:border-[#E3E4E8] sm:pr-6 lg:border-t-0 lg:px-6">
                <p className="text-[12px] text-[#787D87]">Core Stack</p>
                <p className="mt-1 text-[14px] font-medium text-[#111214]">
                  React · TypeScript · Node.js
                </p>
              </div>
              <div className="py-5 sm:border-t sm:border-l sm:border-[#E3E4E8] sm:pl-6 lg:border-t-0 lg:px-6 lg:last:pr-0">
                <p className="text-[12px] text-[#787D87]">GitHub</p>
                <a
                  href={PROFILE.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 inline-flex items-center gap-1 text-[14px] font-medium text-[#111214] transition-colors hover:text-[#1D4ED8]"
                >
                  <span>Harsh-dhawan17</span>
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Selected Projects Section */}
        <section id="projects" className="border-t border-[#E3E4E8] py-20 lg:py-28">
          <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
            <Reveal>
              <div className="flex flex-col justify-between gap-6 pb-12 lg:flex-row lg:items-end">
                <div>
                  <p className="text-[13px] font-mono text-[#787D87] tabular-nums">
                    01. Selected Work
                  </p>
                  <h2 className="mt-3 font-display text-3xl font-medium tracking-[-0.02em] text-[#111214] sm:text-4xl">
                    Projects engineered end to end.
                  </h2>
                </div>

                {/* Interactive Filter Controls */}
                <div
                  role="tablist"
                  aria-label="Filter projects by engineering focus"
                  className="flex flex-wrap items-center gap-1 rounded-lg border border-[#E3E4E8] bg-white p-1"
                >
                  {PROJECT_FILTERS.map((filter) => {
                    const isActive = activeCategory === filter.id;
                    return (
                      <button
                        key={filter.id}
                        type="button"
                        role="tab"
                        aria-selected={isActive}
                        onClick={() => setActiveCategory(filter.id)}
                        className={`rounded-md px-3.5 py-2 text-[13px] font-medium whitespace-nowrap shrink-0 transition-colors duration-150 ${
                          isActive
                            ? 'bg-[#111214] text-white'
                            : 'text-[#4E525B] hover:text-[#111214]'
                        }`}
                      >
                        {filter.label}
                      </button>
                    );
                  })}
                </div>
              </div>
            </Reveal>

            <div className="divide-y divide-[#E3E4E8] border-t border-[#E3E4E8]">
              {filteredProjects.map((project, index) => (
                <Reveal key={project.id} delay={index * 0.04}>
                  <article className="grid items-start gap-10 py-14 lg:grid-cols-12 lg:gap-12">
                    {/* Project Monograph Text */}
                    <div
                      className={`lg:col-span-6 ${
                        index % 2 === 1 ? 'lg:order-2' : 'lg:order-1'
                      }`}
                    >
                      <div className="flex flex-wrap items-center gap-2 text-[12px] font-mono text-[#787D87] tabular-nums">
                        <span>{project.index}</span>
                        <span aria-hidden="true">·</span>
                        <span>{project.year}</span>
                        <span aria-hidden="true">·</span>
                        <span>{project.categoryLabel}</span>
                      </div>

                      <h3 className="mt-3 font-display text-2xl font-medium tracking-[-0.02em] text-[#111214] sm:text-[32px] sm:leading-[1.15]">
                        {project.title}{' '}
                        <span className="font-normal italic text-[#4E525B]">
                          — {project.subtitle}
                        </span>
                      </h3>

                      <p className="mt-4 max-w-[60ch] text-[15px] leading-[1.68] text-[#4E525B]">
                        {project.summary}
                      </p>

                      {/* Clean unboxed technology list */}
                      <div className="mt-5 flex flex-wrap items-center gap-x-2 gap-y-1 text-[13px] font-mono text-[#111214]">
                        {project.stack.map((tech, techIdx) => (
                          <span key={tech} className="inline-flex items-center gap-2">
                            <span>{tech}</span>
                            {techIdx < project.stack.length - 1 && (
                              <span aria-hidden="true" className="text-[#C7CBD4]">
                                ·
                              </span>
                            )}
                          </span>
                        ))}
                      </div>

                      <ul className="mt-6 space-y-2.5 text-[14px] leading-[1.6] text-[#4E525B]">
                        {project.highlights.map((highlight) => (
                          <li key={highlight} className="flex gap-3">
                            <span
                              aria-hidden="true"
                              className="mt-2.5 h-[1px] w-3 shrink-0 bg-[#9CA3AF]"
                            />
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="mt-8 flex flex-wrap items-center gap-5">
                        <a
                          href={project.primaryLinkUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex min-h-[42px] items-center gap-2 rounded-md bg-[#111214] px-4 py-2 text-[13px] font-medium text-white whitespace-nowrap shrink-0 transition-colors duration-150 hover:bg-[#1D4ED8]"
                        >
                          <span>{project.primaryLinkLabel}</span>
                          <ArrowUpRight className="h-3.5 w-3.5" />
                        </a>

                        <button
                          type="button"
                          onClick={() => setSelectedProject(project)}
                          className="inline-flex min-h-[42px] items-center gap-1.5 text-[13px] font-medium text-[#111214] whitespace-nowrap shrink-0 underline decoration-[#C7CBD4] underline-offset-4 transition-colors duration-150 hover:text-[#1D4ED8] hover:decoration-[#1D4ED8]"
                        >
                          <FileText className="h-3.5 w-3.5" />
                          <span>Architecture Notes</span>
                        </button>
                      </div>
                    </div>

                    {/* Architectural Schematic Plate */}
                    <div
                      className={`lg:col-span-6 ${
                        index % 2 === 1 ? 'lg:order-1' : 'lg:order-2'
                      }`}
                    >
                      <button
                        type="button"
                        onClick={() => setSelectedProject(project)}
                        aria-label={`Inspect ${project.title} architecture notes`}
                        className="group block w-full text-left transition-transform duration-200 hover:-translate-y-0.5 focus-visible:rounded-sm"
                      >
                        <ProjectSchematic projectId={project.id} />
                      </button>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Professional Experience Section */}
        <section id="experience" className="border-t border-[#E3E4E8] py-20 lg:py-28">
          <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
            <Reveal>
              <div className="grid gap-12 lg:grid-cols-12">
                <div className="lg:col-span-4">
                  <div className="lg:sticky lg:top-24">
                    <p className="text-[13px] font-mono text-[#787D87] tabular-nums">
                      02. Experience
                    </p>
                    <h2 className="mt-3 font-display text-3xl font-medium tracking-[-0.02em] text-[#111214] sm:text-4xl">
                      Professional internships.
                    </h2>
                    <p className="mt-4 max-w-[34ch] text-[15px] leading-[1.68] text-[#4E525B]">
                      Hands-on engineering across React, TypeScript, Node.js, PostgreSQL, and
                      MongoDB in both hybrid and remote Agile teams.
                    </p>
                  </div>
                </div>

                <div className="lg:col-span-8">
                  <div className="divide-y divide-[#E3E4E8] border-y border-[#E3E4E8]">
                    {EXPERIENCE.map((item) => (
                      <article key={item.id} className="py-10 first:pt-8 last:pb-8">
                        <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-baseline">
                          <div>
                            <h3 className="font-display text-2xl font-medium tracking-[-0.02em] text-[#111214]">
                              {item.company}
                            </h3>
                            <p className="mt-1 text-[15px] font-medium text-[#4E525B]">
                              {item.role}
                            </p>
                          </div>

                          <div className="text-[13px] font-mono text-[#787D87] tabular-nums sm:text-right">
                            <p className="text-[#111214]">{item.period}</p>
                            <p className="mt-0.5 font-sans text-[13px] text-[#787D87]">
                              {item.location} · {item.workMode}
                            </p>
                          </div>
                        </div>

                        <p className="mt-5 max-w-[65ch] text-[15px] leading-[1.68] text-[#4E525B]">
                          {item.summary}
                        </p>

                        <ul className="mt-5 space-y-2.5 text-[14px] leading-[1.62] text-[#4E525B]">
                          {item.highlights.map((bullet) => (
                            <li key={bullet} className="flex gap-3">
                              <span
                                aria-hidden="true"
                                className="mt-2.5 h-[1px] w-3 shrink-0 bg-[#9CA3AF]"
                              />
                              <span>{bullet}</span>
                            </li>
                          ))}
                        </ul>

                        <div className="mt-6 flex flex-wrap items-center gap-x-2 gap-y-1 text-[12px] font-mono text-[#787D87]">
                          {item.stack.map((tech, idx) => (
                            <span key={tech} className="inline-flex items-center gap-2">
                              <span>{tech}</span>
                              {idx < item.stack.length - 1 && (
                                <span aria-hidden="true" className="text-[#C7CBD4]">
                                  ·
                                </span>
                              )}
                            </span>
                          ))}
                        </div>
                      </article>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Technical Skills Section */}
        <section id="skills" className="border-t border-[#E3E4E8] bg-white py-20 lg:py-28">
          <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
            <Reveal>
              <div className="flex flex-col justify-between gap-4 pb-12 md:flex-row md:items-end">
                <div>
                  <p className="text-[13px] font-mono text-[#787D87] tabular-nums">
                    03. Technical Capabilities
                  </p>
                  <h2 className="mt-3 font-display text-3xl font-medium tracking-[-0.02em] text-[#111214] sm:text-4xl">
                    Tools, languages, and foundations.
                  </h2>
                </div>
                <p className="max-w-[40ch] text-[14px] leading-[1.6] text-[#787D87]">
                  Select any discipline to inspect where those technologies are applied across
                  featured projects.
                </p>
              </div>

              <div className="grid grid-cols-1 border-t border-[#E3E4E8] md:grid-cols-2 lg:grid-cols-3">
                {SKILL_GROUPS.map((group) => {
                  const isExpanded = activeSkillGroupId === group.id;
                  const linkedProjects = PROJECTS.filter((p) =>
                    group.relatedProjects.includes(p.id)
                  );

                  return (
                    <div
                      key={group.id}
                      className="flex flex-col justify-between border-b border-[#E3E4E8] py-8 md:odd:pr-8 md:even:border-l md:even:pl-8 lg:border-l lg:px-8 lg:nth-[3n+1]:border-l-0 lg:nth-[3n+1]:pl-0 lg:nth-[3n]:pr-0"
                    >
                      <div>
                        <div className="flex items-baseline justify-between gap-4">
                          <h3 className="text-[16px] font-semibold tracking-[-0.01em] text-[#111214]">
                            {group.title}
                          </h3>
                          <span className="font-mono text-[12px] text-[#787D87] tabular-nums">
                            {group.index}
                          </span>
                        </div>

                        <ul className="mt-5 space-y-2 text-[15px] text-[#4E525B]">
                          {group.items.map((skill) => (
                            <li key={skill} className="leading-[1.5]">
                              {skill}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="mt-6 pt-4 border-t border-[#F0F1F4]">
                        <button
                          type="button"
                          onClick={() =>
                            setActiveSkillGroupId((prev) => (prev === group.id ? null : group.id))
                          }
                          aria-expanded={isExpanded}
                          className="text-[12px] font-medium text-[#787D87] transition-colors hover:text-[#1D4ED8]"
                        >
                          {isExpanded
                            ? 'Hide related projects'
                            : `Applied in ${linkedProjects.length} ${
                                linkedProjects.length === 1 ? 'project' : 'projects'
                              }`}
                        </button>

                        {isExpanded && (
                          <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-1.5 text-[13px]">
                            {linkedProjects.map((proj) => (
                              <button
                                key={proj.id}
                                type="button"
                                onClick={() => setSelectedProject(proj)}
                                className="inline-flex items-center gap-1 font-medium text-[#1D4ED8] hover:underline underline-offset-4"
                              >
                                <span>{proj.title}</span>
                                <ArrowUpRight className="h-3 w-3" />
                              </button>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </Reveal>
          </div>
        </section>

        {/* Education & Certifications Section */}
        <section id="education" className="border-t border-[#E3E4E8] py-20 lg:py-28">
          <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
            <Reveal>
              <div className="grid gap-14 lg:grid-cols-12 lg:gap-12">
                {/* Academic Education */}
                <div className="lg:col-span-6">
                  <p className="text-[13px] font-mono text-[#787D87] tabular-nums">
                    04. Education
                  </p>
                  <h2 className="mt-3 font-display text-3xl font-medium tracking-[-0.02em] text-[#111214]">
                    Academic background.
                  </h2>

                  <div className="mt-8 divide-y divide-[#E3E4E8] border-y border-[#E3E4E8]">
                    {EDUCATION.map((edu) => (
                      <div key={edu.id} className="py-6">
                        <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-baseline">
                          <h3 className="text-[16px] font-semibold text-[#111214]">
                            {edu.institution}
                          </h3>
                          <span className="font-mono text-[12px] text-[#787D87] tabular-nums whitespace-nowrap shrink-0">
                            {edu.period}
                          </span>
                        </div>
                        <p className="mt-1.5 text-[15px] text-[#4E525B]">{edu.degree}</p>
                        <div className="mt-2 flex flex-wrap items-center gap-2 text-[13px] text-[#787D87] tabular-nums">
                          <span className="font-medium text-[#111214]">{edu.grade}</span>
                          <span aria-hidden="true">·</span>
                          <span>{edu.location}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Verified Certifications */}
                <div className="lg:col-span-6">
                  <p className="text-[13px] font-mono text-[#787D87] tabular-nums">
                    Credentials
                  </p>
                  <h2 className="mt-3 font-display text-3xl font-medium tracking-[-0.02em] text-[#111214]">
                    Verified certifications.
                  </h2>

                  <div className="mt-8 divide-y divide-[#E3E4E8] border-y border-[#E3E4E8]">
                    {CERTIFICATIONS.map((cert) => (
                      <a
                        key={cert.id}
                        href={cert.verifyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-start justify-between gap-6 py-6 transition-colors"
                      >
                        <div>
                          <h3 className="text-[16px] font-semibold text-[#111214] transition-colors group-hover:text-[#1D4ED8]">
                            {cert.title}
                          </h3>
                          <p className="mt-1 text-[14px] text-[#4E525B]">{cert.issuer}</p>
                        </div>
                        <span className="inline-flex items-center gap-1 pt-0.5 text-[13px] font-medium text-[#4E525B] whitespace-nowrap shrink-0 transition-colors group-hover:text-[#1D4ED8]">
                          <span>Verify</span>
                          <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Contact Section */}
        <ContactSection />
      </main>

      {/* Quiet Editorial Footer */}
      <footer className="border-t border-[#E3E4E8] bg-[#F7F7F5] py-10">
        <div className="mx-auto flex max-w-[1200px] flex-col items-start justify-between gap-6 px-6 text-[13px] text-[#787D87] sm:flex-row sm:items-center lg:px-8">
          <div className="flex flex-wrap items-center gap-2">
            <span className="font-medium text-[#111214]">{PROFILE.name}</span>
            <span aria-hidden="true">·</span>
            <span>{PROFILE.role}</span>
            <span aria-hidden="true">·</span>
            <span className="tabular-nums">© 2026</span>
          </div>

          <div className="flex flex-wrap items-center gap-6">
            <a
              href={PROFILE.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-[#111214]"
            >
              GitHub
            </a>
            <a
              href={PROFILE.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-[#111214]"
            >
              LinkedIn
            </a>
            <a
              href={PROFILE.resumePdfUrl}
              download="Harsh_Dhawan_Resume.pdf"
              className="transition-colors hover:text-[#111214]"
            >
              Resume PDF
            </a>
            <a href="#top" className="transition-colors hover:text-[#111214]">
              Back to top
            </a>
          </div>
        </div>
      </footer>

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}
