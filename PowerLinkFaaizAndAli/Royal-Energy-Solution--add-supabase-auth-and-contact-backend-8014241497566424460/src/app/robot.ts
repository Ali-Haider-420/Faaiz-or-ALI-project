// In app/robots.ts

import { MetadataRoute } from 'next'
 
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/', // You can add private pages here
    },
    sitemap: 'https://www.respk.com/sitemap.xml',
  }
}