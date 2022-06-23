const CleanCSS = require("clean-css");
const { DateTime } = require("luxon");
const gitlog = require("gitlog").default;
let markdownIt = require("markdown-it");
const markdownItAttrs = require('markdown-it-attrs');
const markdownItAnchor = require('markdown-it-anchor');
const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");
const pluginTOC = require('eleventy-plugin-toc');

const markdownItOptions = {
  html: true,
  breaks: true,
  linkify: true
}

// To be able to use CSS class names in markdown
// and generate IDs on headings
const markdownLib = markdownIt(markdownItOptions).use(markdownItAttrs).use(markdownItAnchor);

module.exports = function(eleventyConfig) {
  // Use assets
  eleventyConfig.addPassthroughCopy("fonts");

  // Watch for changes
  eleventyConfig.addWatchTarget("css");

  // Minify CSS
  eleventyConfig.addFilter("cssmin", function(code) {
    return new CleanCSS({}).minify(code).styles;
  });

  // Changelog shortcode, from https://timothymiller.dev/posts/2020/adding-a-changelog-to-my-11ty-blog/
  // Setting up the changelog shortcode
  eleventyConfig.addNunjucksShortcode("changelog", ({filePath}) => {
    // First we remove "./" from filePath
    // This leaves us with the format "posts/2020/file.md"
    var relPath = filePath.slice(2);
    // Limit logs to 20, only fetch commit message and date
    const options = {
        repo: __dirname,
        number: 20,
        fields: ["subject", "authorDate", "hash", "abbrevHash"],
        file: relPath
    };

    // Here's where the magic happens!
    // We pass our params into gitlog, and it handles the rest
    var commits = gitlog(options);
    // Now we need to loop through the commits, and create our HTML.
    // I use a list and a <details> element here,
    // but you could use whatever markup you want!
    var html = "<details><summary>Changelog</summary><ul>";
    for (var i=0; i < commits.length; i++) {
      // Convert the git date to ISO
      var isoDate = commits[i].authorDate.slice(0,10);
      var hash = commits[i].hash;
      var abbrevHash = commits[i].abbrevHash;
        // Convert ISO to readable date e.g. "May 05 2020"
        var readableDate = DateTime.fromISO(isoDate).toFormat('yyyy-mm-dd');
      html += `<li>
          <time datetime="${isoDate}">${readableDate}</time>: ${commits[i].subject}
          <a href="https://github.com/barnardos/platforms-and-standards/commit/${hash}">${abbrevHash}</a>
        </li>`;
    }
    html += "</ul></details>";
    return html;
  });

  // Markdown-it
  eleventyConfig.setLibrary('md', markdownLib);

  // Eleventy Navigation plugin for breadcrumb
  eleventyConfig.addPlugin(eleventyNavigationPlugin);

  // Table of contents filter
  eleventyConfig.addPlugin(pluginTOC, {
    wrapper: 'div',
    wrapperClass: ''
  });

};


