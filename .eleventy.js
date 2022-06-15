module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("./styles");
  eleventyConfig.addPassthroughCopy("./assets");
  eleventyConfig.addPassthroughCopy("./scripts");
  eleventyConfig.addPassthroughCopy("./fonts");

  return {
    passthroughFileCopy: true,
  };
};
