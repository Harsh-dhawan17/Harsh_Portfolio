import { useState, type FormEvent } from 'react';
import { AlertCircle, ArrowUpRight, Check, Copy, Download, Send } from 'lucide-react';
import { PROFILE } from '../data/portfolioData';
import { Reveal } from './Reveal';

interface FormState {
  name: string;
  email: string;
  topic: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

const TOPICS = [
  'Full-Time Role',
  'Internship / Contract',
  'Project Collaboration',
  'General Inquiry',
];

export function ContactSection() {
  const [form, setForm] = useState<FormState>({
    name: '',
    email: '',
    topic: TOPICS[0],
    message: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submittedPayload, setSubmittedPayload] = useState<FormState | null>(null);
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PROFILE.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  const validate = (data: FormState): FormErrors => {
    const nextErrors: FormErrors = {};
    if (!data.name.trim()) {
      nextErrors.name = 'Please enter your name.';
    }
    if (!data.email.trim()) {
      nextErrors.email = 'Please enter your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email.trim())) {
      nextErrors.email = 'Please enter a valid email address.';
    }
    if (data.message.trim().length < 10) {
      nextErrors.message = 'Please include a short message (at least 10 characters).';
    }
    return nextErrors;
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const validationErrors = validate(form);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setSubmittedPayload({ ...form });
    setForm({
      name: '',
      email: '',
      topic: TOPICS[0],
      message: '',
    });
  };

  const buildMailtoHref = (payload: FormState) => {
    const subject = `[${payload.topic}] Message from ${payload.name}`;
    const body = `Name: ${payload.name}\nEmail: ${payload.email}\nTopic: ${payload.topic}\n\n${payload.message}`;
    return `mailto:${PROFILE.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section id="contact" className="border-t border-[#E3E4E8] py-20 lg:py-28">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
        <Reveal>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-12">
            {/* Left Editorial Column */}
            <div className="lg:col-span-5 flex flex-col justify-between">
              <div>
                <p className="text-[13px] font-mono text-[#787D87] tabular-nums">05. Contact</p>
                <h2 className="mt-3 font-display text-3xl font-medium tracking-[-0.02em] text-[#111214] sm:text-4xl">
                  Let&apos;s build something dependable together.
                </h2>
                <p className="mt-4 max-w-[44ch] text-[15px] leading-[1.68] text-[#4E525B]">
                  Open to full-stack engineering roles, backend API work, and thoughtful product
                  collaborations. Write directly or send a note through the form.
                </p>

                <dl className="mt-10 divide-y divide-[#E3E4E8] border-y border-[#E3E4E8] text-[14px]">
                  <div className="flex items-center justify-between gap-4 py-4">
                    <dt className="text-[#787D87]">Email</dt>
                    <dd className="flex items-center gap-3">
                      <a
                        href={`mailto:${PROFILE.email}`}
                        className="font-medium text-[#111214] transition-colors hover:text-[#1D4ED8]"
                      >
                        {PROFILE.email}
                      </a>
                      <button
                        type="button"
                        onClick={handleCopyEmail}
                        className="inline-flex items-center gap-1.5 rounded border border-[#E3E4E8] bg-white px-2.5 py-1 text-[12px] font-medium text-[#4E525B] whitespace-nowrap shrink-0 transition-colors duration-150 hover:border-[#111214] hover:text-[#111214]"
                      >
                        {copied ? (
                          <>
                            <Check className="h-3.5 w-3.5 text-[#1D4ED8]" />
                            <span>Copied</span>
                          </>
                        ) : (
                          <>
                            <Copy className="h-3.5 w-3.5" />
                            <span>Copy</span>
                          </>
                        )}
                      </button>
                    </dd>
                  </div>

                  <div className="flex items-center justify-between gap-4 py-4">
                    <dt className="text-[#787D87]">Phone</dt>
                    <dd className="font-mono text-[13px] text-[#111214] tabular-nums">
                      <a
                        href={`tel:${PROFILE.phone}`}
                        className="transition-colors hover:text-[#1D4ED8]"
                      >
                        {PROFILE.phone}
                      </a>
                    </dd>
                  </div>

                  <div className="flex items-center justify-between gap-4 py-4">
                    <dt className="text-[#787D87]">Location</dt>
                    <dd className="text-[#111214]">{PROFILE.location}</dd>
                  </div>

                  <div className="flex items-center justify-between gap-4 py-4">
                    <dt className="text-[#787D87]">Profiles</dt>
                    <dd className="flex items-center gap-4">
                      <a
                        href={PROFILE.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 font-medium text-[#111214] transition-colors hover:text-[#1D4ED8]"
                      >
                        <span>GitHub</span>
                        <ArrowUpRight className="h-3.5 w-3.5" />
                      </a>
                      <span aria-hidden="true" className="text-[#C7CBD4]">
                        ·
                      </span>
                      <a
                        href={PROFILE.linkedinUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 font-medium text-[#111214] transition-colors hover:text-[#1D4ED8]"
                      >
                        <span>LinkedIn</span>
                        <ArrowUpRight className="h-3.5 w-3.5" />
                      </a>
                    </dd>
                  </div>
                </dl>

                <div className="mt-6">
                  <a
                    href={PROFILE.resumePdfUrl}
                    download="Harsh_Dhawan_Resume.pdf"
                    className="inline-flex items-center gap-2 text-[14px] font-medium text-[#111214] underline decoration-[#C7CBD4] underline-offset-4 transition-colors duration-150 hover:text-[#1D4ED8] hover:decoration-[#1D4ED8]"
                  >
                    <Download className="h-4 w-4" />
                    <span>Download full resume (PDF)</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Right Form Column */}
            <div className="lg:col-span-7">
              <div className="rounded-lg border border-[#E3E4E8] bg-white p-6 sm:p-8 lg:p-10">
                {submittedPayload ? (
                  <div className="space-y-6 py-4" role="status" aria-live="polite">
                    <div className="flex items-center gap-2.5 text-[14px] font-medium text-[#1D4ED8]">
                      <Check className="h-4 w-4 shrink-0" />
                      <span>Message prepared for Harsh Dhawan</span>
                    </div>

                    <div className="space-y-2">
                      <h3 className="font-display text-2xl font-medium tracking-[-0.02em] text-[#111214]">
                        Thank you, {submittedPayload.name}.
                      </h3>
                      <p className="text-[15px] leading-[1.65] text-[#4E525B]">
                        Your inquiry under <span className="text-[#111214] font-medium">{submittedPayload.topic}</span>{' '}
                        has been formatted below. Launch your email client to send it directly to{' '}
                        <span className="font-mono text-[13px] text-[#111214]">{PROFILE.email}</span>.
                      </p>
                    </div>

                    <div className="border-y border-[#E3E4E8] py-4 text-[14px] text-[#4E525B] space-y-2">
                      <p>
                        <span className="text-[#787D87]">From:</span> {submittedPayload.name} ({submittedPayload.email})
                      </p>
                      <p className="whitespace-pre-line leading-[1.6] text-[#111214]">
                        {submittedPayload.message}
                      </p>
                    </div>

                    <div className="flex flex-wrap items-center gap-4 pt-1">
                      <a
                        href={buildMailtoHref(submittedPayload)}
                        className="inline-flex items-center gap-2 rounded-md bg-[#111214] px-5 py-2.5 text-[14px] font-medium text-white whitespace-nowrap shrink-0 transition-colors duration-150 hover:bg-[#1D4ED8]"
                      >
                        <Send className="h-4 w-4" />
                        <span>Open in Email Client</span>
                      </a>
                      <button
                        type="button"
                        onClick={() => setSubmittedPayload(null)}
                        className="px-4 py-2 text-[14px] font-medium text-[#4E525B] whitespace-nowrap shrink-0 transition-colors hover:text-[#111214]"
                      >
                        Write another message
                      </button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} noValidate className="space-y-6">
                    <div className="grid gap-6 sm:grid-cols-2">
                      <div>
                        <label
                          htmlFor="contact-name"
                          className="block text-[13px] font-medium text-[#111214]"
                        >
                          Name
                        </label>
                        <input
                          id="contact-name"
                          name="name"
                          type="text"
                          autoComplete="name"
                          value={form.name}
                          onChange={(e) => {
                            setForm((prev) => ({ ...prev, name: e.target.value }));
                            if (errors.name) setErrors((prev) => ({ ...prev, name: undefined }));
                          }}
                          placeholder="Your name"
                          aria-invalid={Boolean(errors.name)}
                          aria-describedby={errors.name ? 'contact-name-error' : undefined}
                          className={`mt-2 block w-full rounded-md border bg-[#FAFAFB] px-3.5 py-2.5 text-[15px] text-[#111214] placeholder:text-[#9CA3AF] transition-colors duration-150 focus:bg-white ${
                            errors.name
                              ? 'border-[#B91C1C] focus:border-[#B91C1C]'
                              : 'border-[#E3E4E8] focus:border-[#1D4ED8]'
                          }`}
                        />
                        {errors.name && (
                          <p
                            id="contact-name-error"
                            className="mt-2 flex items-center gap-1.5 text-[12px] text-[#B91C1C]"
                          >
                            <AlertCircle className="h-3.5 w-3.5 shrink-0" />
                            <span>{errors.name}</span>
                          </p>
                        )}
                      </div>

                      <div>
                        <label
                          htmlFor="contact-email"
                          className="block text-[13px] font-medium text-[#111214]"
                        >
                          Email
                        </label>
                        <input
                          id="contact-email"
                          name="email"
                          type="email"
                          autoComplete="email"
                          value={form.email}
                          onChange={(e) => {
                            setForm((prev) => ({ ...prev, email: e.target.value }));
                            if (errors.email) setErrors((prev) => ({ ...prev, email: undefined }));
                          }}
                          placeholder="you@company.com"
                          aria-invalid={Boolean(errors.email)}
                          aria-describedby={errors.email ? 'contact-email-error' : undefined}
                          className={`mt-2 block w-full rounded-md border bg-[#FAFAFB] px-3.5 py-2.5 text-[15px] text-[#111214] placeholder:text-[#9CA3AF] transition-colors duration-150 focus:bg-white ${
                            errors.email
                              ? 'border-[#B91C1C] focus:border-[#B91C1C]'
                              : 'border-[#E3E4E8] focus:border-[#1D4ED8]'
                          }`}
                        />
                        {errors.email && (
                          <p
                            id="contact-email-error"
                            className="mt-2 flex items-center gap-1.5 text-[12px] text-[#B91C1C]"
                          >
                            <AlertCircle className="h-3.5 w-3.5 shrink-0" />
                            <span>{errors.email}</span>
                          </p>
                        )}
                      </div>
                    </div>

                    <div>
                      <span className="block text-[13px] font-medium text-[#111214]">
                        Topic
                      </span>
                      <div
                        role="radiogroup"
                        aria-label="Inquiry topic"
                        className="mt-2 flex flex-wrap gap-2"
                      >
                        {TOPICS.map((topic) => {
                          const active = form.topic === topic;
                          return (
                            <button
                              key={topic}
                              type="button"
                              role="radio"
                              aria-checked={active}
                              onClick={() => setForm((prev) => ({ ...prev, topic }))}
                              className={`rounded-md border px-3.5 py-2 text-[13px] font-medium whitespace-nowrap shrink-0 transition-colors duration-150 ${
                                active
                                  ? 'border-[#111214] bg-[#111214] text-white'
                                  : 'border-[#E3E4E8] bg-[#FAFAFB] text-[#4E525B] hover:border-[#9CA3AF] hover:text-[#111214]'
                              }`}
                            >
                              {topic}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="contact-message"
                        className="block text-[13px] font-medium text-[#111214]"
                      >
                        Message
                      </label>
                      <textarea
                        id="contact-message"
                        name="message"
                        rows={5}
                        value={form.message}
                        onChange={(e) => {
                          setForm((prev) => ({ ...prev, message: e.target.value }));
                          if (errors.message) setErrors((prev) => ({ ...prev, message: undefined }));
                        }}
                        placeholder="Share details about the role, project scope, or timeline."
                        aria-invalid={Boolean(errors.message)}
                        aria-describedby={errors.message ? 'contact-message-error' : undefined}
                        className={`mt-2 block w-full resize-y rounded-md border bg-[#FAFAFB] px-3.5 py-3 text-[15px] leading-[1.6] text-[#111214] placeholder:text-[#9CA3AF] transition-colors duration-150 focus:bg-white ${
                          errors.message
                            ? 'border-[#B91C1C] focus:border-[#B91C1C]'
                            : 'border-[#E3E4E8] focus:border-[#1D4ED8]'
                        }`}
                      />
                      {errors.message && (
                        <p
                          id="contact-message-error"
                          className="mt-2 flex items-center gap-1.5 text-[12px] text-[#B91C1C]"
                        >
                          <AlertCircle className="h-3.5 w-3.5 shrink-0" />
                          <span>{errors.message}</span>
                        </p>
                      )}
                    </div>

                    <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
                      <p className="text-[12px] text-[#787D87]">
                        Direct response to <span className="font-mono text-[#4E525B]">{PROFILE.email}</span>
                      </p>
                      <button
                        type="submit"
                        className="inline-flex min-h-[42px] items-center gap-2 rounded-md bg-[#111214] px-6 py-2.5 text-[14px] font-medium text-white whitespace-nowrap shrink-0 transition-colors duration-150 hover:bg-[#1D4ED8]"
                      >
                        <span>Send Message</span>
                        <Send className="h-3.5 w-3.5" />
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
