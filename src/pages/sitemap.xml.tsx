import { GetServerSideProps } from 'next'
import { news } from '../data/news.data'
import { courses } from '../data/popular-course.data'

const generateSiteMap = (posts: any[], courses: any[]) => {
  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     <url>
       <loc>https://igcc-eg.com</loc>
       <changefreq>daily</changefreq>
       <priority>1.0</priority>
     </url>
     ${posts
       .map(({ slug }) => {
         return `
       <url>
           <loc>https://igcc-eg.com/news/${slug}</loc>
           <changefreq>weekly</changefreq>
           <priority>0.8</priority>
       </url>
     `
       })
       .join('')}
     ${courses
       .map(({ id }) => {
         return `
       <url>
           <loc>https://igcc-eg.com/courses/${id}</loc>
           <changefreq>weekly</changefreq>
           <priority>0.8</priority>
       </url>
     `
       })
       .join('')}
   </urlset>
 `
}

function SiteMap() {
  // getServerSideProps will do the heavy lifting
}

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  const sitemap = generateSiteMap(news, courses)

  res.setHeader('Content-Type', 'text/xml')
  res.write(sitemap)
  res.end()

  return {
    props: {},
  }
}

export default SiteMap
