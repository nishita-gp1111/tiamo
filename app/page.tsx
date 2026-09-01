import Image from 'next/image';
import Link from 'next/link';
import { ReserveBand, SiteFooter, SiteHeader } from './components/SiteChrome';

export default function Home() {
  return (
    <main>
      <SiteHeader />
      <section className="hero">
        <div className="hero-photo" aria-hidden="true" />
        <div className="hero-shade" aria-hidden="true" />
        <div className="hero-content">
          <p className="eyebrow">AT HOME KARAOKE SNACK · TONERI</p>
          <h1>ここに来れば、<br />いつもの笑顔に会える。</h1>
          <p className="hero-lead">昼は気軽にカラオケ、夜はゆっくりお酒と歌を。<br className="desktop-only" />舎人のアットホームなスナック Ti Amoです。</p>
          <div className="hero-actions">
            <Link className="button button-primary" href="/night">夜の料金を見る</Link>
            <Link className="button button-ghost" href="/day">昼カラオケを見る</Link>
          </div>
        </div>
        <div className="hero-hours" aria-label="営業時間案内">
          <div><span>DAY</span><strong>11:00 — 16:00</strong></div>
          <div><span>NIGHT</span><strong>19:00 — 24:00</strong></div>
        </div>
        <div className="scroll-hint" aria-hidden="true"><span /> SCROLL</div>
      </section>

      <section className="welcome-strip">
        <p>Google クチコミ <strong>4.8</strong> ★★★★★</p><span aria-hidden="true" />
        <p>見沼代親水公園駅 西口より徒歩約3分</p><span aria-hidden="true" />
        <p>貸切OK・要予約</p>
      </section>

      <section className="intro content-section">
        <div className="intro-copy">
          <p className="section-kicker">WELCOME TO TI AMO</p>
          <h2>初めてでも、<br />「ただいま」と言える店。</h2>
          <p>ママもスタッフも、フィリピン出身の女の子が中心。気取らず、気軽に、お酒と歌と会話を楽しめる場所です。おひとりさまも、仲間との一杯も大歓迎です。</p>
          <Link className="text-link" href="/gallery">Ti Amoの雰囲気を見る <span>→</span></Link>
        </div>
        <div className="intro-images">
          <Image className="intro-image-main" src="/images/optimized/tiamo-18.webp" alt="Ti Amoのママがカウンターで笑顔を見せる様子" width={1600} height={1200} />
          <Image className="intro-image-sub" src="/images/optimized/tiamo-15-enhanced.webp" alt="Ti Amoのボックス席とカラオケモニター" width={1448} height={1086} />
        </div>
      </section>

      <section className="two-scenes">
        <article className="scene-card scene-day">
          <div className="scene-shade" />
          <div className="scene-copy">
            <p className="section-kicker">DAY TIME · 11:00–16:00</p>
            <h2>昼は、歌ってゆったり。</h2>
            <p><strong>おひとり 1,500円</strong><br />カラオケ歌い放題・ソフトドリンク飲み放題</p>
            <Link className="button button-light" href="/day">昼のメニューへ</Link>
          </div>
        </article>
        <article className="scene-card scene-night">
          <div className="scene-shade" />
          <div className="scene-copy">
            <p className="section-kicker">NIGHT TIME · 19:00–24:00</p>
            <h2>夜は、乾杯して一曲。</h2>
            <p><strong>2時間 3,000円</strong><br />飲み放題・カラオケ歌い放題</p>
            <Link className="button button-light" href="/night">夜の料金へ</Link>
          </div>
        </article>
      </section>

      <section className="event-section content-section">
        <div className="event-visual">
          <Image src="/images/optimized/tiamo-14-enhanced.webp" alt="花とカラフルな装飾が飾られたTi Amo店内" width={1448} height={1086} />
          <span>Seasonal<br />Events</span>
        </div>
        <div className="event-copy">
          <p className="section-kicker">HALLOWEEN & CHRISTMAS</p>
          <h2>季節のイベントも、<br />みんなで楽しく。</h2>
          <p>ハロウィンとクリスマスには店内イベントを開催。いつもの夜が、ちょっと特別な思い出になります。最新情報はInstagramでお知らせします。</p>
          <a className="text-link" href="https://www.instagram.com/snack.ti_amo/" target="_blank" rel="noreferrer">Instagramを見る <span>↗</span></a>
        </div>
      </section>

      <ReserveBand />
      <SiteFooter />
    </main>
  );
}
