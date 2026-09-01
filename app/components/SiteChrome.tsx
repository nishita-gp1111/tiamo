import Link from 'next/link';

const navItems = [
  { href: '/day', label: '昼のTi Amo' },
  { href: '/night', label: '夜のTi Amo' },
  { href: '/gallery', label: '店内・イベント' },
  { href: '/access', label: 'アクセス' },
];

export function SiteHeader({ solid = false }: { solid?: boolean }) {
  return (
    <header className={`site-header${solid ? ' site-header-solid' : ''}`}>
      <Link className="brand" href="/" aria-label="Snack Ti Amo ホーム">
        <span className="brand-script">Ti Amo</span>
        <span className="brand-sub">SNACK · TONERI</span>
      </Link>
      <nav className="desktop-nav" aria-label="メインナビゲーション">
        {navItems.map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}
      </nav>
      <a className="header-call" href="tel:0356476867">ご予約 03-5647-6867</a>
      <details className="mobile-menu">
        <summary>MENU</summary>
        <nav aria-label="モバイルナビゲーション">
          {navItems.map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}
          <a href="tel:0356476867">電話で予約する</a>
        </nav>
      </details>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-brand">
        <span className="brand-script">Ti Amo</span>
        <p>歌って、笑って、また会いたくなる場所。</p>
      </div>
      <div className="footer-links">
        <div>
          <span>ADDRESS</span>
          <p>〒121-0831<br />東京都足立区舎人2-19-7<br />パークヒル舎人102</p>
        </div>
        <div>
          <span>HOURS</span>
          <p>昼 11:00–16:00<br />夜 19:00–24:00</p>
        </div>
        <div>
          <span>FOLLOW</span>
          <a href="https://www.instagram.com/snack.ti_amo/" target="_blank" rel="noreferrer">Instagram @snack.ti_amo</a>
        </div>
      </div>
      <div className="footer-bottom">
        <small>© Snack Ti Amo</small>
        <Link href="/access">アクセス・ご予約</Link>
      </div>
    </footer>
  );
}

export function ReserveBand() {
  return (
    <section className="reserve-band">
      <div>
        <p className="section-kicker">RESERVATION</p>
        <h2>今夜も、Ti Amoで。</h2>
        <p>貸切のご相談も承ります。ご来店前にお気軽にお電話ください。</p>
      </div>
      <a className="button button-light" href="tel:0356476867">03-5647-6867</a>
    </section>
  );
}
