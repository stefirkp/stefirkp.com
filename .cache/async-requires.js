// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---src-pages-404-js": () => import("/Users/macbook_pro/Documents/www/self/stefirkp.github.io/src/pages/404.js" /* webpackChunkName: "component---src-pages-404-js" */),
  "component---src-pages-index-js": () => import("/Users/macbook_pro/Documents/www/self/stefirkp.github.io/src/pages/index.js" /* webpackChunkName: "component---src-pages-index-js" */)
}

exports.data = () => import("/Users/macbook_pro/Documents/www/self/stefirkp.github.io/.cache/data.json")

