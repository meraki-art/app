module.exports = {
  globDirectory: 'src/',
  globPatterns: ['**/*.{ico,ttf,css,js,html,webmanifest}'],
  swDest: 'src/sw.js',
  ignoreURLParametersMatching: [/^utm_/, /^fbclid$/],
  runtimeCaching: [
    {
      // Match any request that ends with .png, .jpg, .jpeg or .svg.
      urlPattern: /\.(?:png|jpg|jpeg|svg)$/,

      // Apply a cache-first strategy.
      handler: 'CacheFirst',

      options: {
        // Use a custom cache name.
        cacheName: 'images',

        // Only cache 10 images.
        expiration: {
          maxEntries: 50,
        },
      },
    },
  ],
};
