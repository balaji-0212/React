const contactLinks = [
  {
    label: 'Email',
    value: 'balaji022212@gmail.com',
    href: 'mailto:balaji022212@gmail.com',
  },
  {
    label: 'Phone',
    value: '+91 9345355312',
    href: 'tel:+919345355312',
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/balaji0212',
    href: 'https://linkedin.com/in/balaji0212',
  },
  {
    label: 'GitHub',
    value: 'github.com/balaji-0212',
    href: 'https://github.com/balaji-0212',
  },
  {
    label: 'Location',
    value: 'Coimbatore, Tamil Nadu',
    href: 'https://www.google.com/maps/search/Coimbatore,+Tamil+Nadu',
  },
];

function Contact() {
  return (
    <section className="page contact-page">
      <div className="section-heading">
        <p className="eyebrow">Contact</p>
        <h1>Let us build reliable software together.</h1>
        <p>
          Reach out for software engineering, data analytics, dashboard, and
          automation-focused opportunities.
        </p>
      </div>

      <div className="contact-grid">
        {contactLinks.map((contact) => (
          <a
            className="contact-card"
            href={contact.href}
            key={contact.label}
            rel="noreferrer"
            target={contact.label === 'Email' || contact.label === 'Phone' ? '_self' : '_blank'}
          >
            <span>{contact.label}</span>
            <strong>{contact.value}</strong>
          </a>
        ))}
      </div>
    </section>
  );
}

export default Contact;
