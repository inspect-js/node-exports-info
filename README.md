# node-exports-info <sup>[![Version Badge][npm-version-svg]][package-url]</sup>

[![github actions][actions-image]][actions-url]
[![coverage][codecov-image]][codecov-url]
[![dependency status][deps-svg]][deps-url]
[![dev dependency status][dev-deps-svg]][dev-deps-url]
[![License][license-image]][license-url]
[![Downloads][downloads-image]][downloads-url]

[![npm badge][npm-badge-png]][package-url]

Info about node `exports` field support: version ranges, categories, etc.

## Categories
 - `pre-exports`: versions before node supported `exports` in any way (`< 12.17`)
 - `broken`: versions that have a broken `exports` implementation. These only support the string form, and array fallbacks. (`13.0 - 13.2`)
 - `experimental`: versions where `exports` support was experimental. These only support the "default" condition in the object form. (`13.3 - 13.6`)
 - `conditions`: the first versions where `exports` support was unflagged. (`12.17 - 12.19 || ^13.7 || 14.0 - 14.12`)
 - `patterns`: support for "patterns" was added in these versions. (`^12.20 || 14.13 - 14.18 || 15.x || 16.0 - 16.8`)
 - `pattern-trailers`: support for "pattern trailers" was added in these versions (`^14.19 || >= 16.9`)

## Entry points
 - `node-exports-info/getCategoriesForRange`: takes a node semver version range; returns an array of categories that overlap it
 - `node-exports-info/getCategory`: takes an optional node semver version (defaults to the current node version); returns the category that matches it
 - `node-exports-info/getConditionsForCategory`: takes a category; returns an array of `exports` "conditions" that is supported, or `null` if `exports` itself is not supported
 - `node-exports-info/getRange`: takes a category; returns the node semver version range that matches it
 - `node-exports-info/getRangePairs`: returns an array of entries - each a tuple of "semver range" and "category"

## Related packages
 - [`has-package-exports`](https://www.npmjs.com/package/has-package-exports): feature-detect your node version’s `exports` support

## Tests
Simply clone the repo, `npm install`, and run `npm test`

[package-url]: https://npmjs.org/package/node-exports-info
[npm-version-svg]: https://versionbadg.es/inspect-js/node-exports-info.svg
[deps-svg]: https://david-dm.org/inspect-js/node-exports-info.svg
[deps-url]: https://david-dm.org/inspect-js/node-exports-info
[dev-deps-svg]: https://david-dm.org/inspect-js/node-exports-info/dev-status.svg
[dev-deps-url]: https://david-dm.org/inspect-js/node-exports-info#info=devDependencies
[npm-badge-png]: https://nodei.co/npm/node-exports-info.png?downloads=true&stars=true
[license-image]: https://img.shields.io/npm/l/node-exports-info.svg
[license-url]: LICENSE
[downloads-image]: https://img.shields.io/npm/dm/node-exports-info.svg
[downloads-url]: https://npm-stat.com/charts.html?package=node-exports-info
[codecov-image]: https://codecov.io/gh/inspect-js/node-exports-info/branch/main/graphs/badge.svg
[codecov-url]: https://app.codecov.io/gh/inspect-js/node-exports-info/
[actions-image]: https://img.shields.io/endpoint?url=https://github-actions-badge-u3jn4tfpocch.runkit.sh/inspect-js/node-exports-info
[actions-url]: https://github.com/inspect-js/node-exports-info/actions
