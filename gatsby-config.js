module.exports = {
    plugins: [
        'gatsby-plugin-image',
        'gatsby-plugin-sharp',
        'gatsby-transformer-sharp',
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'images',
                path: './src/images/'
            },
            __key: 'images'
        },
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: 'Hursh Arora',
                short_name: 'Hursh',
                start_url: '/',
                display: 'standalone',
                icon: 'src/images/logo.png'
            }
        }
    ]
};
