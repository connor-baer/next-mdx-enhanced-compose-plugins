// const slug = require('rehype-slug');
// const emoji = require('remark-emoji');
// const externalLinks = require('remark-external-links');
const withPlugins = require('next-compose-plugins');
const withMdxEnhanced = require('next-mdx-enhanced');
const withBundleAnalyzer = require('@next/bundle-analyzer');

const mdxConfig = {
  // remarkPlugins: [emoji, externalLinks],
  // rehypePlugins: [slug]
};

const bundleAnalyzerConfig = {
  enabled: process.env.ANALYZE === 'true'
};

// This doesn't work.
module.exports = withPlugins([
  [withMdxEnhanced, mdxConfig],
]);

// This doesn't work.
// module.exports = withPlugins([
//   [withMdxEnhanced, mdxConfig],
//   [withBundleAnalyzer, bundleAnalyzerConfig]
// ]);

// This works.
// module.exports = withPlugins([
//   withMdxEnhanced(mdxConfig),
//   [withBundleAnalyzer, bundleAnalyzerConfig]
// ]);


// This works.
// module.exports = withMdxEnhanced(mdxConfig)(withBundleAnalyzer(bundleAnalyzerConfig));
