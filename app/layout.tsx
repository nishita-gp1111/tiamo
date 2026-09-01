import type { Metadata, Viewport } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'Snack Ti Amo｜足立区舎人のアットホームなスナック',
    template: '%s｜Snack Ti Amo',
  },
  description: '昼はカラオケ歌い放題、夜は2時間飲み放題・歌い放題。足立区舎人のスナック Ti Amo。貸切もご予約いただけます。',
  keywords: ['スナック', '舎人', '足立区', 'カラオケ', '昼カラオケ', 'Ti Amo', '見沼代親水公園'],
  icons: { icon: '/favicon.svg' },
  openGraph: {
    type: 'website',
    locale: 'ja_JP',
    siteName: 'Snack Ti Amo',
    title: 'Snack Ti Amo｜足立区舎人のアットホームなスナック',
    description: '歌って、笑って、また会いたくなる。昼も夜も楽しめる舎人のスナック Ti Amo。',
    images: [{ url: '/og.png', width: 1200, height: 628, alt: 'Snack Ti Amo' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Snack Ti Amo',
    description: '足立区舎人のアットホームなスナック',
    images: ['/og.png'],
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
  return (
    <html lang="ja">
      <body>
        {children}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }} />
      </body>
    </html>
  );
}
