import type { Metadata } from 'next';
import { PageHero } from '../components/PageHero';
import { SiteFooter, SiteHeader } from '../components/SiteChrome';

export const metadata: Metadata = {
  title: 'アクセス・ご予約｜Snack Ti Amo',
  description: '〒121-0831 東京都足立区舎人2-19-7 パークヒル舎人102。見沼代親水公園駅西口より徒歩約3分。電話 03-5647-6867。',
};

const mapUrl = 'https://www.google.com/maps/search/?api=1&query=%E3%82%B9%E3%83%8A%E3%83%83%E3%82%AF+Ti+Amo+%E6%9D%B1%E4%BA%AC%E9%83%BD%E8%B6%B3%E7%AB%8B%E5%8C%BA%E8%88%8E%E4%BA%BA2-19-7';

export default function AccessPage() {
  return (
    <main>
      <SiteHeader />
      <PageHero eyebrow="ACCESS & RESERVATION" title="アクセス・ご予約" lead="見沼代親水公園駅から徒歩約3分。今夜も笑顔でお待ちしています。" image="/images/optimized/tiamo-34.webp" />

      <section className="access-section content-section">
        <div className="access-details">
          <p className="section-kicker">INFORMATION</p>
          <h2>Snack Ti Amo</h2>
          <dl>
            <div><dt>住所</dt><dd>〒121-0831<br />東京都足立区舎人2丁目19-7<br />パークヒル舎人102</dd></div>
            <div><dt>アクセス</dt><dd>日暮里・舎人ライナー<br />見沼代親水公園駅 西口より徒歩約3分</dd></div>
            <div><dt>電話</dt><dd><a href="tel:0356476867">03-5647-6867</a></dd></div>
            <div><dt>昼</dt><dd>11:00–16:00<br />定休日：日曜日・月曜日</dd></div>
            <div><dt>夜</dt><dd>19:00–24:00<br />定休日：日曜日</dd></div>
            <div><dt>貸切</dt><dd>可能（予約必須）</dd></div>
          </dl>
          <div className="access-actions">
            <a className="button button-primary" href="tel:0356476867">電話で予約する</a>
            <a className="button button-outline" href={mapUrl} target="_blank" rel="noreferrer">Googleマップを開く</a>
          </div>
        </div>
        <div className="map-frame">
          <iframe
            title="Snack Ti Amo 周辺地図"
            src="https://www.google.com/maps?q=%E6%9D%B1%E4%BA%AC%E9%83%BD%E8%B6%B3%E7%AB%8B%E5%8C%BA%E8%88%8E%E4%BA%BA2%E4%B8%81%E7%9B%AE19-7+%E3%83%91%E3%83%BC%E3%82%AF%E3%83%92%E3%83%AB%E8%88%8E%E4%BA%BA102&output=embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>

      <section className="access-reserve">
        <p className="section-kicker">CALL US</p>
        <h2>貸切・ご予約は<br />お電話で承ります。</h2>
        <a href="tel:0356476867">03-5647-6867</a>
        <p>営業時間中は混み合う場合がございます。貸切をご希望の方は、お早めにご相談ください。</p>
      </section>

      <SiteFooter />
    </main>
  );
}
