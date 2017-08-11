module.exports = {
    navigateFallback: '/index.html',
    stripPrefix: 'dist/',
    root: 'dist/',
    staticFileGlobs: [
        'dist/index.html',
        'dist/**.js',
        'dist/**.css',
        'dist/**.ttf',
        'dist/assets/**'
    ],
    runtimeCaching: [
        {
            urlPattern: /^https?:\/\/cleantothecore\.com/,
            handler: 'networkFirst',
            options: {
                cache: {
                    maxEntries: 10,
                    name: 'api-cache'
                }
            }
        }
    ]
};
