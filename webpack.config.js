module.exports = {
    module: {
        rules: [
            {
                test: /\.html$/,
                use: 'html-loader',
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                },
            },
        ],
    },
    resolve: {
        fallback: {
          fs: false, // Ignora el módulo fs
        },
        extensions: [".js", ".jsx"],
    },
};