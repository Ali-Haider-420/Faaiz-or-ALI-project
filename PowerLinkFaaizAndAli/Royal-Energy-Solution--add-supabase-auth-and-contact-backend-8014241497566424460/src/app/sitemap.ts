// In app/sitemap.ts

import { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://www.respk.com',
      lastModified: new Date(), // This will use today's date
      changeFrequency: 'monthly',
      priority: 1,
    },
    // If you add a blog or other pages, you would add them here
  ]
}