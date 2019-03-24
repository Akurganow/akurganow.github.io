/* eslint-disable no-console */
const ghpages = require('gh-pages')

console.info('Start deploy to gh-pages')

ghpages.publish(
  'dist',
  {
    branch: 'master',
    message: 'Updates [ci skip]',
  },
  () => {
    console.info('Deploy finished')
  }
)
