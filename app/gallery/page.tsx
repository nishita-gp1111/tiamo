import type { Metadata } from 'next';
import Image from 'next/image';
import { PageHero } from '../components/PageHero';
import { ReserveBand, SiteFooter, SiteHeader } from '../components/SiteChrome';

export const metadata: Metadata = {
  title: '店内・イベント｜Snack Ti Amo',
  description: 'カウンター、ボックス席、カラオケ設備を写真でご紹介。ハロウィンやクリスマスには店内イベントも開催しています。',
};

const photos = [
  ['tiamo-24.webp', 'ゆったり座れるカウンター席', 'wide'],
  ['tiamo-15-enhanced.webp', 'カラオケを楽しめるボックス席', 'tall'],
  ['tiamo-7.webp', '花とギターで彩られた店内', ''],
  ['tiamo-18.webp', '笑顔でお迎えします', 'tall'],
  ['tiamo-29.webp', 'グループでもくつろげる広い店内', 'wide'],
  ['tiamo-26.webp', 'カラオケ設備', ''],
  ['tiamo-27.webp', 'ドリンクとスナックも豊富', ''],
  ['tiamo-32.webp', '会話の弾むボックス席', ''],
  ['tiamo-35.webp', 'Ti Amoの看板', 'tall'],
];

export default function GalleryPage() {
  return (
    <main>
      <SiteHeader />
      <PageHero eyebrow="ATMOSPHERE · PEOPLE · EVENTS" title="店内とイベント" lead="少しだけ、Ti Amoの中をのぞいてみてください。" image="/images/optimized/tiamo-15-enhanced.webp" align="center" />

      <section className="gallery-intro content-section">
        <div>
          <p className="section-kicker">OUR PLACE</p>
          <h2>カウンターでも、<br />ボックス席でも。</h2>
        </div>
        <p>おひとりでママとの会話を楽しむならカウンターへ。仲間と歌って盛り上がるなら、ゆったりしたボックス席へ。肩ひじ張らずに過ごせる空間です。</p>
      </section>

      <section className="photo-grid" aria-label="Ti Amo 店内写真">
        {photos.map(([file, alt, size]) => (
          <figure className={size ? `photo-${size}` : ''} key={file}>
            <Image src={`/images/optimized/${file}`} alt={alt} width={1600} height={1200} />
            <figcaption>{alt}</figcaption>
          </figure>
        ))}
      </section>

      <section className="season-section">
        <div>
          <p className="section-kicker">SPECIAL NIGHTS</p>
          <h2>Halloween<br />& Christmas</h2>
        </div>
        <p>ハロウィンとクリスマスは店内イベントを開催しています。開催日や内容はInstagramでお知らせします。</p>
        <a className="button button-light" href="https://www.instagram.com/snack.ti_amo/" target="_blank" rel="noreferrer">Instagramで最新情報</a>
      </section>

      <ReserveBand />
      <SiteFooter />
    </main>
  );
}
