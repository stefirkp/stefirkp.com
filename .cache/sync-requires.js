// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-pages-404-js": preferDefault(require("/Users/macbook_pro/Documents/www/self/stefirkp.github.io/src/pages/404.js")),
  "component---src-pages-index-js": preferDefault(require("/Users/macbook_pro/Documents/www/self/stefirkp.github.io/src/pages/index.js")),
  "component---src-pages-portofolio-detail-jupiter-js": preferDefault(require("/Users/macbook_pro/Documents/www/self/stefirkp.github.io/src/pages/PortofolioDetail/jupiter.js")),
  "component---src-pages-portofolio-detail-portofolio-detail-js": preferDefault(require("/Users/macbook_pro/Documents/www/self/stefirkp.github.io/src/pages/PortofolioDetail/PortofolioDetail.js"))
}

