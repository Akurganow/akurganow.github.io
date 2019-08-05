/* eslint-disable no-console */
const ghpages = require('gh-pages')

console.info('Start deploy to gh-pages')

ghpages.publish(
  'dist',
  {
    branch: 'master',
    message: 'Updates [ci skip]',
    dotfiles: true,
  },
  (err) => {
    if (err) {
      console.error(err)

      return
    }

    console.info('Deploy finished')
  }
)
