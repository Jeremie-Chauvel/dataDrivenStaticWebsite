// First we import the contentful node module
const contentful = require('contentful')

// Those are set via `env` property in nuxt.config.js
const config = {
  space: process.env.NUXT_ENV_CONTENTFUL_SPACE,
  accessToken: process.env.NUXT_ENV_CONTENTFUL_ACCESS_TOKEN
}

// Create a client to setup fetching content
const client = contentful.createClient(config)

// Our first method to fetch all section content type
client.getSectionContent = () =>
  client
    .getEntries('', {
      content_type: 'section'
    }) // map the interesting properties from section
    .then(({ items }) => {
      return items.map((section) => {
        return {
          title: section.fields.title,
          paragraph: section.fields.paragraph
        }
      })
    })

export default ({ app }) => {
  // Add the function directly to the context.app object
  app.contentfulClient = client
}
