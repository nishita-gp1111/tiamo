import type { Metadata } from 'next';
import { PageHero } from '../components/PageHero';
import { ReserveBand, SiteFooter, SiteHeader } from '../components/SiteChrome';

export const metadata: Metadata = {
  title: '夜の料金・ドリンク｜Snack Ti Amo',
  description: '19時から24時まで。2時間3,000円で飲み放題・カラオケ歌い放題。各種アルコール、ソフトドリンク、おつまみをご用意しています。',
};

const alcohol = [
  ['酎ハイ', '500円'], ['芋焼酎', '600円'], ['角ハイボール', '800円'],
  ['梅酒', '800円'], ['カクテル', '800円'], ['ワイン', '1,000円'],
  ['金宮・JINRO ボトル', '4,000円'], ['シャンパン ボトル', '6,000円'],
];

const softDrinks = [
  ['コーラ', '500円'], ['マンゴージュース', '500円'],
  ['カルピス', '500円'], ['炭酸水', '300円'], ['氷', '無料'],
];

const snacks = [
  ['フィッシュボール', '500円'], ['フライドポテト', '500円'],
  ['チーズサラミ', '500円'], ['チョコ', '500円'],
  ['フィリピンのポテトチップス', '500円'],
];

export default function NightPage() {
  return (
    <main>
      <SiteHeader />
      <PageHero eyebrow="NIGHT TIME · DRINKS & KARAOKE" title="夜のTi Amo" lead="グラスを合わせて、好きな歌を。気取らない大人の夜をお楽しみください。" image="/images/optimized/tiamo-29.webp" />

      <section className="plan-section content-section">
        <div className="plan-heading">
          <p className="section-kicker">NIGHT PLAN</p>
          <h2>19:00 — 24:00</h2>
          <p>夜の定休日：日曜日</p>
        </div>
        <div className="featured-plan night-plan">
          <div><span>2時間</span><strong>3,000<small>円</small></strong></div>
          <ul>
            <li>飲み放題・カラオケ歌い放題</li>
            <li>お茶・ウーロン茶・ミネラルウォーター</li>
            <li>酎ハイ用の割りものも飲み放題</li>
          </ul>
          <p className="plan-note">※アルコール・フードは別料金です。</p>
        </div>
      </section>

      <section className="night-menu-wrap">
        <div className="night-menu-title">
          <p className="section-kicker">DRINK & SNACK MENU</p>
          <h2>今夜の一杯を、<br />ゆっくり選ぶ。</h2>
        </div>
        <div className="night-menu-grid">
          <MenuList title="Alcohol" items={alcohol} />
          <MenuList title="Soft Drink" items={softDrinks} />
          <MenuList title="Snack" items={snacks} />
        </div>
      </section>

      <section className="private-section">
        <div className="private-photo" />
        <div className="private-copy">
          <p className="section-kicker">PRIVATE PARTY</p>
          <h2>貸切も、<br />ご相談ください。</h2>
          <p>仲間だけで楽しみたい夜、誕生日やちょっとした集まりにも。貸切は予約必須です。人数や内容をお電話でご相談ください。</p>
          <a className="button button-primary" href="tel:0356476867">貸切を相談する</a>
        </div>
      </section>

      <ReserveBand />
      <SiteFooter />
    </main>
  );
}

function MenuList({ title, items }: { title: string; items: string[][] }) {
  return (
    <div className="night-menu-card">
      <h3>{title}</h3>
      <dl>{items.map(([name, price]) => <div key={name}><dt>{name}</dt><dd>{price}</dd></div>)}</dl>
    </div>
  );
}
