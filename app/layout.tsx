import type { Metadata, Viewport } from 'next';
import type { CSSProperties } from 'react';
import { LuxuryMotion } from './components/LuxuryMotion';
import { publicAsset } from './lib/publicAsset';
import './globals.css';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://nishita-gp1111.github.io/tiamo';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Snack Ti Amo｜足立区舎人のアットホームなスナック',
    template: '%s｜Snack Ti Amo',
  },
  description: '昼はカラオケ歌い放題、夜は2時間飲み放題・歌い放題。足立区舎人のスナック Ti Amo。貸切もご予約いただけます。',
  keywords: ['スナック', '舎人', '足立区', 'カラオケ', '昼カラオケ', 'Ti Amo', '見沼代親水公園'],
  alternates: { canonical: `${siteUrl}/` },
  icons: { icon: `${siteUrl}/favicon.svg` },
  openGraph: {
    type: 'website',
    locale: 'ja_JP',
    siteName: 'Snack Ti Amo',
    title: 'Snack Ti Amo｜足立区舎人のアットホームなスナック',
    description: '歌って、笑って、また会いたくなる。昼も夜も楽しめる舎人のスナック Ti Amo。',
    images: [{ url: `${siteUrl}/og.png`, width: 1200, height: 628, alt: 'Snack Ti Amo' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Snack Ti Amo',
    description: '足立区舎人のアットホームなスナック',
    images: [`${siteUrl}/og.png`],
  },
};

export const viewport: Viewport = {
  themeColor: '#771d35',
  colorScheme: 'light',
};

const localBusiness = {
  '@context': 'https://schema.org',
  '@type': 'BarOrPub',
  name: 'Snack Ti Amo',
  url: `${siteUrl}/`,
  image: `${siteUrl}/og.png`,
  alternateName: 'スナック ティアモ',
  telephone: '+81-3-5647-6867',
  address: {
    '@type': 'PostalAddress',
    postalCode: '121-0831',
    addressRegion: '東京都',
    addressLocality: '足立区',
    streetAddress: '舎人2丁目19-7 パークヒル舎人102',
    addressCountry: 'JP',
  },
  sameAs: ['https://www.instagram.com/snack.ti_amo/'],
  priceRange: '¥¥',
  servesCuisine: ['軽食', 'カラオケスナック'],
  aggregateRating: { '@type': 'AggregateRating', ratingValue: '4.8', reviewCount: '5' },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const imageVariables = {
    '--hero-photo': `url('${publicAsset('/images/optimized/tiamo-24.webp')}')`,
    '--scene-day-photo': `url('${publicAsset('/images/generated/day-food.webp')}')`,
    '--scene-night-photo': `url('${publicAsset('/images/optimized/tiamo-29.webp')}')`,
    '--reserve-photo': `url('${publicAsset('/images/optimized/tiamo-23.webp')}')`,
    '--day-quote-photo': `url('${publicAsset('/images/optimized/tiamo-5-enhanced.webp')}')`,
    '--private-photo': `url('${publicAsset('/images/optimized/tiamo-30-enhanced.webp')}')`,
    '--season-photo': `url('${publicAsset('/images/optimized/tiamo-14-enhanced.webp')}')`,
    '--access-photo': `url('${publicAsset('/images/optimized/tiamo-33.webp')}')`,
  } as CSSProperties;

  return (
    <html lang="ja">
      <body style={imageVariables}>
        <LuxuryMotion />
        {children}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }} />
      </body>
    </html>
  );
}
