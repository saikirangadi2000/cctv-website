import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const geistSans = Geist({ 
  subsets: ["latin"],
  variable: '--font-geist-sans',
});

const geistMono = Geist_Mono({ 
  subsets: ["latin"],
  variable: '--font-geist-mono',
});

// Comprehensive SEO Metadata for Sarvanetra
export const metadata: Metadata = {
  metadataBase: new URL('https://sarvanetra.com'), // Replace with your actual domain
  title: {
    default: 'Sarvanetra | Best CCTV Installation & Security Systems in Hyderabad',
    template: '%s | Sarvanetra', 
  },
  description: "Sarvanetra provides premier CCTV installation and security solutions in Hyderabad. Experts in STQC-approved IP cameras, HD systems, and solar surveillance for homes and businesses. 'Surveillance Beyond Sight'.",
  keywords: [
    'CCTV installation Hyderabad', 
    'Security cameras Telangana', 
    'Sarvanetra', 
    'STQC approved cameras', 
    'IP camera installation', 
    'Home security systems', 
    'Office surveillance', 
    'AMC services CCTV', 
    'Solar CCTV cameras', 
    'Network security solutions',
    'Video surveillance Hyderabad',
    'Best CCTV dealers Moosapet'
  ],
  authors: [{ name: 'Sarvanetra Technologies' }],
  creator: 'Sarvanetra Technologies',
  publisher: 'Sarvanetra Technologies',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://sarvanetra.com',
    siteName: 'Sarvanetra',
    title: 'Sarvanetra - Surveillance Beyond Sight | Hyderabad Security Experts',
    description: 'Premier provider of integrated security and IT networking solutions in Hyderabad. Expert installation of STQC-approved CCTV systems for residential and commercial properties.',
    images: [
      {
        url: '/og-image.png', // Ensure you add this image to your public folder
        width: 1200,
        height: 630,
        alt: 'Sarvanetra CCTV Security Solutions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sarvanetra - Expert CCTV Installation',
    description: 'Secure your property with STQC-approved surveillance systems in Hyderabad.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      {
        url: '/logo-icon.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/logo-icon-dark.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/logo-icon.png',
        type: 'image/svg+xml',
      },
    ],
    apple: '/logo-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="font-sans antialiased">
        {/* JSON-LD Structured Data for Local Business SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Sarvanetra",
              "image": "https://sarvanetra.com/cctv-logo.png", // Update with actual logo URL
              "description": "Premier provider of integrated security and IT networking solutions in Hyderabad. Specializing in STQC-approved CCTV installation.",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "12-2-124/1, Ambedkar Nagar, BALAJI NAGAR, Moosapet",
                "addressLocality": "Hyderabad",
                "addressRegion": "Telangana",
                "postalCode": "500018",
                "addressCountry": "IN"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 17.4912,
                "longitude": 78.4234
              },
              "url": "https://sarvanetra.com",
              "telephone": "+91-9063835719",
              "priceRange": "$$",
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                "opens": "09:00",
                "closes": "19:00"
              },
              "sameAs": [
                "https://www.facebook.com/sarvanetra", // Add your actual social links
                "https://www.linkedin.com/company/sarvanetra"
              ] 
            }),
          }}
        />
        
        {children}
        
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}