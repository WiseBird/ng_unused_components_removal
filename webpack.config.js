const path = require('path');
const ngToolsWebpack = require('@ngtools/webpack');

module.exports = {
    mode: "production",
    entry: './src/index.ts',
    module: {
        rules: [
            {
                test: /(?:\.ngfactory\.js|\.ngstyle\.js|\.ts)$/,
                use: ['@ngtools/webpack']
            },
            {
                test: /\.html$/,
                use: [
                    'html-loader',
                ],
            },
        ]
    },
    output: {
        path: path.resolve(__dirname, 'bundle'),
        filename: './bundle.[name].js',
    },
    plugins: [
        new ngToolsWebpack.AngularCompilerPlugin({
            tsConfigPath: './tsconfig.json',
            entryModule: 'src/app/app.module#AppModule',
        }),
    ],
    optimization: {
        namedModules: true,
        concatenateModules: false,
        splitChunks: {
            cacheGroups: {
                commons: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendor',
                    chunks: 'all',
                },
            },
        },
        minimizer: [],
    },
    resolve: {
        extensions: [
            '.ts',
            '.js',
            '.html',
        ],
    }
};