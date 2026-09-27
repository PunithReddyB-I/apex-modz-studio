import { HeadContent, Scripts, createRootRoute } from '@tanstack/react-router'
import { WhatsAppButton } from '@/components/WhatsAppButton'

import '../styles.css'

const siteName = 'Apex Modz Studio — Custom Car Accessories & Paint'
const siteDescription =
  'Apex Modz Studio, ITPL Main Road, Hoodi, Bengaluru - 48 — custom car accessories, painting works and custom modifications with genuine parts, competitive pricing and doorstep service across Bengaluru.'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        title: siteName,
      },
      {
        name: 'description',
        content: siteDescription,
      },
      {
        property: 'og:title',
        content: siteName,
      },
      {
        property: 'og:description',
        content: siteDescription,
      },
      {
        property: 'og:type',
        content: 'website',
      },
      {
        name: 'twitter:card',
        content: 'summary_large_image',
      },
    ],
  }),
  shellComponent: RootDocument,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <WhatsAppButton />
        <Scripts />
      </body>
    </html>
  )
}
