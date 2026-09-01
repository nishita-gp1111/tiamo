export function PageHero({
  eyebrow,
  title,
  lead,
  image,
  align = 'left',
}: {
  eyebrow: string;
  title: string;
  lead: string;
  image: string;
  align?: 'left' | 'center';
}) {
  return (
    <section className={`page-hero page-hero-${align}`} style={{ backgroundImage: `url('${image}')` }}>
      <div className="page-hero-shade" aria-hidden="true" />
      <div className="page-hero-content">
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        <p>{lead}</p>
      </div>
    </section>
  );
}
