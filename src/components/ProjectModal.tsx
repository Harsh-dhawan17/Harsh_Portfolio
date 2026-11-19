import { useEffect } from 'react';
import { ArrowUpRight, X } from 'lucide-react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import type { ProjectItem } from '../data/portfolioData';
import { ProjectSchematic } from './ProjectSchematic';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (!project) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-labelledby="project-modal-title"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: prefersReducedMotion ? 0 : 0.18 }}
            onClick={onClose}
            className="fixed inset-0 bg-[#111214]/45 backdrop-blur-[2px]"
          />

          <motion.div
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: 8 }}
            transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-lg border border-[#E3E4E8] bg-[#F7F7F5] shadow-2xl"
          >
            <div className="sticky top-0 z-10 flex items-center justify-between gap-4 border-b border-[#E3E4E8] bg-[#F7F7F5]/95 px-6 py-4 backdrop-blur-sm sm:px-8">
              <div className="flex items-center gap-2 text-[12px] font-mono text-[#787D87] tabular-nums">
                <span>Project {project.index}</span>
                <span aria-hidden="true">·</span>
                <span>{project.year}</span>
                <span aria-hidden="true">·</span>
                <span>{project.categoryLabel}</span>
              </div>
              <button
                type="button"
                onClick={onClose}
                aria-label="Close project notes"
                className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-[#E3E4E8] bg-white text-[#111214] transition-colors duration-150 hover:border-[#111214]"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <div className="space-y-8 p-6 sm:p-8">
              <div>
                <h3
                  id="project-modal-title"
                  className="font-display text-3xl font-medium tracking-[-0.02em] text-[#111214] sm:text-4xl"
                >
                  {project.title}{' '}
                  <span className="font-normal italic text-[#4E525B]">— {project.subtitle}</span>
                </h3>
                <p className="mt-4 max-w-[65ch] text-[15px] leading-[1.7] text-[#4E525B]">
                  {project.summary}
                </p>
                <div className="mt-4 flex flex-wrap items-center gap-x-2 gap-y-1 text-[13px] font-mono text-[#4E525B]">
                  {project.stack.map((tech, idx) => (
                    <span key={tech} className="inline-flex items-center gap-2">
                      <span>{tech}</span>
                      {idx < project.stack.length - 1 && (
                        <span aria-hidden="true" className="text-[#B5B9C2]">
                          ·
                        </span>
                      )}
                    </span>
                  ))}
                </div>
              </div>

              <ProjectSchematic projectId={project.id} compact />

              <div className="grid gap-8 border-t border-[#E3E4E8] pt-7 md:grid-cols-2">
                <div>
                  <h4 className="text-[13px] font-semibold tracking-[-0.01em] text-[#111214]">
                    Architecture Breakdown
                  </h4>
                  <dl className="mt-4 space-y-5">
                    {project.architectureNotes.map((note) => (
                      <div key={note.layer}>
                        <dt className="text-[13px] font-medium text-[#111214]">{note.layer}</dt>
                        <dd className="mt-1 text-[14px] leading-[1.6] text-[#4E525B]">
                          {note.detail}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </div>

                <div>
                  <h4 className="text-[13px] font-semibold tracking-[-0.01em] text-[#111214]">
                    Key Implementation Highlights
                  </h4>
                  <ul className="mt-4 space-y-3 text-[14px] leading-[1.6] text-[#4E525B]">
                    {project.highlights.map((item) => (
                      <li key={item} className="flex gap-3">
                        <span
                          aria-hidden="true"
                          className="mt-2.5 h-[1px] w-3 shrink-0 bg-[#9CA3AF]"
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-4 border-t border-[#E3E4E8] pt-6">
                <a
                  href={project.primaryLinkUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-md bg-[#111214] px-5 py-2.5 text-[14px] font-medium text-white whitespace-nowrap shrink-0 transition-colors duration-150 hover:bg-[#1D4ED8]"
                >
                  <span>Open {project.primaryLinkLabel}</span>
                  <ArrowUpRight className="h-4 w-4" />
                </a>
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 text-[14px] font-medium text-[#4E525B] whitespace-nowrap shrink-0 transition-colors duration-150 hover:text-[#111214]"
                >
                  Close Notes
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
