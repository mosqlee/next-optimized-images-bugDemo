const optimizedImages = require('next-optimized-images');
module.exports = optimizedImages({
  webpack: (config) => {
    // Fixes npm packages that depend on `fs` module
    config.node = {
      fs: 'empty'
    }

    return config
  }
});
