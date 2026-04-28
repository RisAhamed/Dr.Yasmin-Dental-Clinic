/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://dr-yasmin-dental-clinic.vercel.app',
  generateRobotsTxt: true,
  generateIndexSitemap: false,   // ← DISABLE index, output one sitemap.xml only
  outDir: 'public',
  changefreq: 'weekly',
  priority: 0.8,
  sitemapSize: 5000,
}