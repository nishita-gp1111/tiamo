import type { Metadata } from 'next';
import { PageHero } from '../components/PageHero';
import { ReserveBand, SiteFooter, SiteHeader } from '../components/SiteChrome';

export const metadata: Metadata = {
  title: '昼カラオケ・お食事｜Snack Ti Amo',
  description: '11時から16時まで、1,500円でカラオケ歌い放題・ソフトドリンク飲み放題。軽食メニューもご用意しています。',
};

const meals = [
  ['焼きおにぎり', '300円'],
  ['カレーライス', '500円'],
  ['焼きそば', '500円'],
  ['焼きうどん', '500円'],
  ['餃子', '350円'],
  ['かけそば', '500円'],
  ['かけうどん', '500円'],
  ['冷やし中華', '700円'],
];

const snacks = [
  ['フィッシュボール', '500円'],
  ['フライドポテト', '500円'],
  ['チーズサラミ', '500円'],
  ['チョコ', '500円'],
  ['フィリピンのポテトチップス', '500円'],
];

export default function DayPage() {
  return (
    <main>
      <SiteHeader />
      <PageHero eyebrow="DAY TIME · KARAOKE & LUNCH" title="昼のTi Amo" lead="歌って、話して、のんびり過ごす。昼のTi Amoは気軽なカラオケ喫茶です。" image="/images/generated/day-food.webp" />

      <section className="plan-section content-section">
        <div className="plan-heading">
          <p className="section-kicker">DAY PLAN</p>
          <h2>11:00 — 16:00</h2>
          <p>昼の定休日：日曜日・月曜日</p>
        </div>
        <div className="featured-plan day-plan">
          <div><span>おひとり</span><strong>1,500<small>円</small></strong></div>
          <ul>
            <li>カラオケ歌い放題</li>
            <li>お茶・ウーロン茶 飲み放題</li>
            <li>ホットコーヒーもご用意</li>
          </ul>
          <p className="plan-note">※アルコール・お食事は別料金です。</p>
        </div>
      </section>

      <section className="menu-section">
        <div className="menu-intro">
          <p className="section-kicker">FOOD MENU</p>
          <h2>歌の合間に、<br />ほっとする一皿を。</h2>
          <p>どこか懐かしく、気軽に楽しめる定番メニューをご用意しています。</p>
        </div>
        <div className="menu-columns">
          <div className="menu-card">
            <h3>お食事</h3>
            <dl>{meals.map(([name, price]) => <div key={name}><dt>{name}</dt><dd>{price}</dd></div>)}</dl>
          </div>
          <div className="menu-card menu-card-dark">
            <h3>おつまみ</h3>
            <dl>{snacks.map(([name, price]) => <div key={name}><dt>{name}</dt><dd>{price}</dd></div>)}</dl>
          </div>
        </div>
      </section>

      <section className="photo-quote day-photo-quote">
        <blockquote>昼から歌える。<br />それだけで、今日はいい日。</blockquote>
      </section>

      <ReserveBand />
      <SiteFooter />
    </main>
  );
}
