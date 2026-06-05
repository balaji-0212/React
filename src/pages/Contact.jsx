import { useMemo, useState } from 'react';
import { FiCheckCircle, FiMail, FiSend } from 'react-icons/fi';
import PageTransition from '../components/ui/PageTransition.jsx';
import SectionHeading from '../components/ui/SectionHeading.jsx';
import { profile } from '../data/profile.js';

const initialForm = {
  name: '',
  email: '',
  subject: '',
  message: '',
};

function validate(values) {
  const errors = {};
  if (values.name.trim().length < 2) errors.name = 'Enter at least two characters.';
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) errors.email = 'Enter a valid email address.';
  if (values.subject.trim().length < 4) errors.subject = 'Add a clear subject.';
  if (values.message.trim().length < 20) errors.message = 'Write at least 20 characters.';
  return errors;
}

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [touched, setTouched] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const errors = useMemo(() => validate(form), [form]);
  const isValid = Object.keys(errors).length === 0;

  function updateField(event) {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
    setSubmitted(false);
  }

  function handleSubmit(event) {
    event.preventDefault();
    setTouched({ name: true, email: true, subject: true, message: true });
    if (!isValid) return;
    setSubmitted(true);
    setForm(initialForm);
    setTouched({});
  }

  return (
    <PageTransition>
      <section className="container-pad py-14">
        <SectionHeading
          eyebrow="Contact"
          title="Let’s build a useful engineering conversation"
          description="Reach out for software engineering, analytics, data quality, IoT, or full stack collaboration."
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
          <aside className="glass rounded p-6">
            <FiMail className="text-3xl text-ocean dark:text-sky-300" />
            <h3 className="mt-4 font-display text-2xl font-bold">Contact Details</h3>
            <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">
              {profile.name}
              <br />
              {profile.role} at {profile.company}
              <br />
              {profile.location}
            </p>
            <a
              href={`mailto:${profile.email}`}
              className="focus-ring mt-6 inline-flex rounded bg-slate-950 px-4 py-2 text-sm font-bold text-white transition hover:bg-ocean dark:bg-white dark:text-slate-950"
            >
              {profile.email}
            </a>
          </aside>

          <form onSubmit={handleSubmit} className="glass-strong rounded p-6" noValidate>
            {submitted && (
              <div className="mb-5 flex items-center gap-3 rounded border border-emerald-200 bg-emerald-50 p-4 text-sm font-bold text-emerald-700 dark:border-emerald-500/30 dark:bg-emerald-500/10 dark:text-emerald-200">
                <FiCheckCircle /> Message ready to send. Balaji can connect this form to a backend or mail service.
              </div>
            )}
            <div className="grid gap-5 sm:grid-cols-2">
              {[
                { name: 'name', label: 'Name', type: 'text' },
                { name: 'email', label: 'Email', type: 'email' },
              ].map((field) => (
                <label key={field.name} className="block">
                  <span className="text-sm font-bold">{field.label}</span>
                  <input
                    name={field.name}
                    type={field.type}
                    value={form[field.name]}
                    onChange={updateField}
                    onBlur={() => setTouched((current) => ({ ...current, [field.name]: true }))}
                    className="focus-ring mt-2 w-full rounded border border-slate-200 bg-white/80 px-3 py-3 text-slate-900 dark:border-slate-700 dark:bg-slate-900/80 dark:text-white"
                    aria-invalid={Boolean(touched[field.name] && errors[field.name])}
                  />
                  {touched[field.name] && errors[field.name] && (
                    <span className="mt-2 block text-xs font-semibold text-red-600 dark:text-red-300">
                      {errors[field.name]}
                    </span>
                  )}
                </label>
              ))}
            </div>
            <label className="mt-5 block">
              <span className="text-sm font-bold">Subject</span>
              <input
                name="subject"
                value={form.subject}
                onChange={updateField}
                onBlur={() => setTouched((current) => ({ ...current, subject: true }))}
                className="focus-ring mt-2 w-full rounded border border-slate-200 bg-white/80 px-3 py-3 text-slate-900 dark:border-slate-700 dark:bg-slate-900/80 dark:text-white"
                aria-invalid={Boolean(touched.subject && errors.subject)}
              />
              {touched.subject && errors.subject && (
                <span className="mt-2 block text-xs font-semibold text-red-600 dark:text-red-300">{errors.subject}</span>
              )}
            </label>
            <label className="mt-5 block">
              <span className="text-sm font-bold">Message</span>
              <textarea
                name="message"
                value={form.message}
                onChange={updateField}
                onBlur={() => setTouched((current) => ({ ...current, message: true }))}
                rows="6"
                className="focus-ring mt-2 w-full resize-y rounded border border-slate-200 bg-white/80 px-3 py-3 text-slate-900 dark:border-slate-700 dark:bg-slate-900/80 dark:text-white"
                aria-invalid={Boolean(touched.message && errors.message)}
              />
              {touched.message && errors.message && (
                <span className="mt-2 block text-xs font-semibold text-red-600 dark:text-red-300">{errors.message}</span>
              )}
            </label>
            <button
              type="submit"
              className="focus-ring mt-6 inline-flex items-center gap-2 rounded bg-ocean px-5 py-3 font-bold text-white shadow-glow transition hover:bg-sky-700 disabled:cursor-not-allowed disabled:opacity-60"
              disabled={!isValid}
            >
              Send message <FiSend />
            </button>
          </form>
        </div>
      </section>
    </PageTransition>
  );
}
