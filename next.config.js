const slug = require('rehype-slug');
const emoji = require('remark-emoji');
const externalLinks = require('remark-external-links');
const withPlugins = require('next-compose-plugins');
const withMdxEnhanced = require('next-mdx-enhanced');

const mdxConfig = {
  remarkPlugins: [emoji, externalLinks],
  rehypePlugins: [slug]
};

module.exports = withPlugins([[withMdxEnhanced, mdxConfig]]);
