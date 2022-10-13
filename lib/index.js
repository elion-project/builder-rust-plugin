module.exports = (params) => ({
    webpackOptions: {
        config: {
            module: {
                rules: [
                    {
                        test: /\.rs$/,
                        exclude: /node_modules/,
                        use: [
                            params.defaultJsLoader,
                            {
                                // eslint-disable-next-line global-require
                                loader: require("rust-wasmpack-loader"),
                                options: {
                                    logLevel: "quiet",
                                },
                            },
                        ],
                    },
                ],
            },
        },
    },
});
