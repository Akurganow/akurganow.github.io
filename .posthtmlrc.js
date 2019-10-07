const shortener = {
  async process(url) {
      if (process.env.NODE_ENV === 'production' && !url.includes('//')) {
          return url.replace(/index\.html/i, '')
      }
      return url
  }
};

module.exports = {
  plugins: {
    'posthtml-shorten': {
      shortener,
      tag: ['a'],
      attribute: ['href'],
    },
  },
}
