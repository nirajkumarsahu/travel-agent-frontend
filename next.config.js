const path = require("path");

const withBundleAnalyzer = require("@zeit/next-bundle-analyzer");
const withCSS = require('@zeit/next-css')

const isProd = process.env.NODE_ENV === 'production';

module.exports = withCSS(withBundleAnalyzer({
  assetPrefix: isProd ? "https://static.fabhotels.com/webassets_test" : "",
  analyzeServer: ["server", "both"].includes(process.env.BUNDLE_ANALYZE),
  analyzeBrowser: ["browser", "both"].includes(process.env.BUNDLE_ANALYZE),
  bundleAnalyzerConfig: {
    server: {
      analyzerMode: "static",
      reportFilename: "../../bundles/server.html"
    },
    browser: {
      analyzerMode: "static",
      reportFilename: "../bundles/client.html"
    }
  },
  publicRuntimeConfig: {
    'ENV': process.env.ENV
  },
  webpack: config => {
    const { alias } = config.resolve;
    config.resolve.alias = {
      ...alias,
      components: path.join(__dirname, "app/components"),
      lib: path.join(__dirname, "app/lib"),
      global: path.join(__dirname, "app/global"),
      styles: path.join(__dirname, "app/styles"),
      static: path.join(__dirname, "static")
    };
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"]
    });

    return config;
  }
}));
