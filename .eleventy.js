export default async function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/img");

  return {
    dir: {
      input: "src", // default value is "."
      output: "_site" // is the default value
    }
  };
};
