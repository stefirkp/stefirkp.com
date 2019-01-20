var plugins = [{
      plugin: require('/Users/macbook_pro/Documents/www/self/stefirkp.github.io/node_modules/gatsby-plugin-react-helmet/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      plugin: require('/Users/macbook_pro/Documents/www/self/stefirkp.github.io/node_modules/gatsby-plugin-manifest/gatsby-ssr'),
      options: {"plugins":[],"name":"stefi-personal-website","short_name":"stefirosadi","start_url":"/","background_color":"#663399","theme_color":"#663399","display":"minimal-ui","icon":"src/images/stefi-icon-2.png"},
    },{
      plugin: require('/Users/macbook_pro/Documents/www/self/stefirkp.github.io/node_modules/gatsby-plugin-prefetch-google-fonts/gatsby-ssr'),
      options: {"plugins":[],"fonts":[{"family":"Oswald","subsets":["latin"]},{"family":"Open Sans","variants":["400","700"]},{"family":"Roboto"},{"family":"Playfair Display"},{"family":"Raleway"},{"family":"Rubik","variants":["300","400","500"]},{"family":"IBM Plex Sans","variants":["300","400","500"]},{"family":"Roboto Slab","variants":["300","400","500"]},{"family":"Montserrat","variants":["300","400","500"]}]},
    }]
// During bootstrap, we write requires at top of this file which looks like:
// var plugins = [
//   {
//     plugin: require("/path/to/plugin1/gatsby-ssr.js"),
//     options: { ... },
//   },
//   {
//     plugin: require("/path/to/plugin2/gatsby-ssr.js"),
//     options: { ... },
//   },
// ]

const apis = require(`./api-ssr-docs`)

// Run the specified API in any plugins that have implemented it
module.exports = (api, args, defaultReturn, argTransform) => {
  if (!apis[api]) {
    console.log(`This API doesn't exist`, api)
  }

  // Run each plugin in series.
  // eslint-disable-next-line no-undef
  let results = plugins.map(plugin => {
    if (!plugin.plugin[api]) {
      return undefined
    }
    const result = plugin.plugin[api](args, plugin.options)
    if (result && argTransform) {
      args = argTransform({ args, result })
    }
    return result
  })

  // Filter out undefined results.
  results = results.filter(result => typeof result !== `undefined`)

  if (results.length > 0) {
    return results
  } else {
    return [defaultReturn]
  }
}
