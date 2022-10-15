module.exports = (params) => {
    params.webpackOptions.config.module.rules.push({
        test: /\.rs$/,
        exclude: /node_modules/,
        use: [
            params.defaultJsLoader,
            {
                // eslint-disable-next-line global-require
                loader: require.resolve("rust-wasmpack-loader"),
                options: {
                    logLevel: params.config.logLevel || "quiet",
                },
            },
        ],
    });
    return params;
};
