module.exports = async (params) => {
    console.log(
        (await import("chalk")).default.yellow(
            "[builder-rust-plugin] warn: .rs files support is experimental. Please, report about any problems"
        )
    );
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
