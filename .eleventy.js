const CleanCSS = require("clean-css");

module.exports = function(eleventyConfig) {
  // Use assets
  eleventyConfig.addPassthroughCopy("fonts");

  // Watch for changes
  eleventyConfig.addWatchTarget("css");

  // Minify CSS
  eleventyConfig.addFilter("cssmin", function(code) {
    return new CleanCSS({}).minify(code).styles;
  });
};


