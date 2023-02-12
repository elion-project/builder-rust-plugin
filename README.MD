[![MIT License](https://img.shields.io/npm/l/@node-elion/builder-rust-plugin.svg?)](https://www.npmjs.com/package/@node-elion/builder-rust-plugin)
[![View this project on NPM](https://img.shields.io/npm/v/@node-elion/builder-rust-plugin.svg)](https://npmjs.org/package/@node-elion/builder-rust-plugin)
[![View this project on NPM](https://img.shields.io/npm/dm/@node-elion/builder-rust-plugin.svg)](https://npmjs.org/package/@node-elion/builder-rust-plugin)

# @node-elion/builder-rust-plugin

> Rust (WebAssembly) support for projects, that based on `@node-elion/builder`

this package is part of the [Elion project](https://github.com/elion-project).

This package is a plugin and adds the ability to use `.rs` files in a project that is based on [@node-elion/builder](https://github.com/elion-project/builder) library.

## Installation

Install `@node-elion/builder-rust-plugin` with npm

> This package is recommended to be installed as a dev dependency

```shell
npm i --save-dev @node-elion/builder-rust-plugin
```

## Usage

Update `start` and `build` commands to be able to use `@node-elion/builder-rust-plugin` package:

```json5
/* package.json */
{
    /*...*/
    "scripts": {
        "start": "ebi start -p @node-elion/builder-rust-plugin",
        "build": "ebi build -p @node-elion/builder-rust-plugin"
    }
    /*...*/
}
```

## Plugin configuration

|  parameter |   type   | default | description                                             |
|-----------:|:--------:|:-------:|:--------------------------------------------------------|
| `logLevel` | `string` | `quiet` | Log Level (`verbose`, `info`, `warn`, `error`, `quiet`) |

## Contributing

Contributions are always welcome!

See [CONTRIBUTING.md](./CONTRIBUTING.md) for ways to get started.

## Acknowledgements

- [rust-wasmpack-loader](https://github.com/yeskiy/rustwasm-loader)

## License

[MIT](https://choosealicense.com/licenses/mit/)
