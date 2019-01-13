// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---src-pages-404-js": () => import("/Users/macbook_pro/Documents/www/self/stefirkp.github.io/src/pages/404.js" /* webpackChunkName: "component---src-pages-404-js" */),
  "component---src-pages-index-js": () => import("/Users/macbook_pro/Documents/www/self/stefirkp.github.io/src/pages/index.js" /* webpackChunkName: "component---src-pages-index-js" */),
  "component---src-pages-portofolio-detail-jupiter-js": () => import("/Users/macbook_pro/Documents/www/self/stefirkp.github.io/src/pages/PortofolioDetail/jupiter.js" /* webpackChunkName: "component---src-pages-portofolio-detail-jupiter-js" */),
  "component---src-pages-portofolio-detail-portofolio-detail-js": () => import("/Users/macbook_pro/Documents/www/self/stefirkp.github.io/src/pages/PortofolioDetail/PortofolioDetail.js" /* webpackChunkName: "component---src-pages-portofolio-detail-portofolio-detail-js" */)
}

exports.data = () => import("/Users/macbook_pro/Documents/www/self/stefirkp.github.io/.cache/data.json")

