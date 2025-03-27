module.exports = {
    module: {
        rules: [
            {
                test: /\.html$/,
                use: 'html-loader',
            },
        ],
    },
    resolve: {
        fallback: {
          fs: false, // Ignora el módulo fs
        },
      },
};