# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [v1.3.1](https://github.com/inspect-js/node-exports-info/compare/v1.3.0...v1.3.1) - 2024-02-26

### Commits

- add types [`c3449ed`](https://github.com/inspect-js/node-exports-info/commit/c3449edd1e3c0e1dd019c3c5ef9f075305577372)
- [actions] skip ls check on node &lt; 10; remove redundant finisher [`8a88b7b`](https://github.com/inspect-js/node-exports-info/commit/8a88b7b82a05787540541bd40dd92c4d73083e19)
- [actions] remove erroneous `none` permission [`9145df6`](https://github.com/inspect-js/node-exports-info/commit/9145df664d6ccbb49a812ccadb35ecad5957a6ba)
- [Dev Deps] update `tape` [`ff1f4de`](https://github.com/inspect-js/node-exports-info/commit/ff1f4ded536ea936a96c1c01f026768abc41ac27)

## [v1.3.0](https://github.com/inspect-js/node-exports-info/compare/v1.2.1...v1.3.0) - 2023-12-15

### Commits

- [New] add `isCategory` [`13b0f5f`](https://github.com/inspect-js/node-exports-info/commit/13b0f5f1ae7db4ddbbcc8a25f4acf671fffaf622)

## [v1.2.1](https://github.com/inspect-js/node-exports-info/compare/v1.2.0...v1.2.1) - 2023-12-15

### Commits

- [meta] use `npmignore` to autogenerate an npmignore file [`e79731c`](https://github.com/inspect-js/node-exports-info/commit/e79731c10ea60ddd06cc5d8ffe0acd2ac5ca051a)
- [actions] update rebase action to use reusable workflow [`20eab87`](https://github.com/inspect-js/node-exports-info/commit/20eab879a247e893c3566f5327a0e1b8978e0ccc)
- [Deps] update `array.prototype.find`, `array.prototype.flatmap`, `object.entries`, `semver` [`7f3bf1b`](https://github.com/inspect-js/node-exports-info/commit/7f3bf1bce617bab72f5091f150549fc344beb0a0)
- [Dev Deps] update `@ljharb/eslint-config`, `aud`, `npmignore`, `tape` [`a30b7b7`](https://github.com/inspect-js/node-exports-info/commit/a30b7b7880de4f2aa2f45537233bb5e30abc3169)
- [Dev Deps] update `@ljharb/eslint-config`, `aud`, `tape` [`1f262ad`](https://github.com/inspect-js/node-exports-info/commit/1f262ad99324825a8fd9b3ce5cf425f4a849a6c4)
- [Deps] update `array.prototype.find`, `array.prototype.flatmap` [`660e637`](https://github.com/inspect-js/node-exports-info/commit/660e637bf7a5cfbdf90e5ad174a437cf381c5c3d)
- [meta] add `safe-publish-latest` [`bcfb161`](https://github.com/inspect-js/node-exports-info/commit/bcfb161a37311a7791147addceda91ca9ef4a006)
- [Robustness] `ranges`: make it a null object [`5a6d476`](https://github.com/inspect-js/node-exports-info/commit/5a6d47631a6491ec7517b8a2ce3a7ba9ccece461)

## [v1.2.0](https://github.com/inspect-js/node-exports-info/compare/v1.1.3...v1.2.0) - 2022-04-08

### Commits

- Revert "[Tests] temporarily use actions instead of composable workflows" [`1d12795`](https://github.com/inspect-js/node-exports-info/commit/1d1279531112e422d1b67cad2bc267684ec0ca81)
- [New] `getConditionsForCategory`: add optional `moduleSystem` argument [`b4164bd`](https://github.com/inspect-js/node-exports-info/commit/b4164bde3658ec66c08319e411f01096939a734a)
- [actions] restrict permissions [`d0f58ef`](https://github.com/inspect-js/node-exports-info/commit/d0f58ef3696498a3030eb378ce0c98d32e8c7bba)
- [Dev Deps] update `tape` [`afaa392`](https://github.com/inspect-js/node-exports-info/commit/afaa3928208f93f308e1045eb9c5e8e50cea4e18)

## [v1.1.3](https://github.com/inspect-js/node-exports-info/compare/v1.1.2...v1.1.3) - 2022-03-24

### Commits

- [Fix] `node v13.13 also has broken dir-slash [`cc9f891`](https://github.com/inspect-js/node-exports-info/commit/cc9f891f8679a1e4b1063d2d91546b72f82be011)
- [meta] add missing `version` config [`6a7f8c6`](https://github.com/inspect-js/node-exports-info/commit/6a7f8c629d9fb41315c3cea2c514d0398c6be2c7)

## [v1.1.2](https://github.com/inspect-js/node-exports-info/compare/v1.1.1...v1.1.2) - 2022-03-22

### Commits

- [Fix] turns out all `patterns` nodes have a broken dir-slash [`3e8310b`](https://github.com/inspect-js/node-exports-info/commit/3e8310b79496de9d177487c3b5d199cd66630d9d)

## [v1.1.1](https://github.com/inspect-js/node-exports-info/compare/v1.1.0...v1.1.1) - 2022-03-21

### Commits

- [Fix] correct category version ranges [`e98260d`](https://github.com/inspect-js/node-exports-info/commit/e98260dc78a7e969c4fa0d868934066865f344e2)

## [v1.1.0](https://github.com/inspect-js/node-exports-info/compare/v1.0.2...v1.1.0) - 2022-03-21

### Commits

- [New] add three new categories: [`a549cb8`](https://github.com/inspect-js/node-exports-info/commit/a549cb884e8d6a990fdcdd5eb9b10e922a24c89c)

## [v1.0.2](https://github.com/inspect-js/node-exports-info/compare/v1.0.1...v1.0.2) - 2022-03-21

### Commits

- [Fix] fix sort ordering of range pairs [`48a6865`](https://github.com/inspect-js/node-exports-info/commit/48a68659e890d4331ede9c971709ca03e5ab3b9a)

## [v1.0.1](https://github.com/inspect-js/node-exports-info/compare/v1.0.0...v1.0.1) - 2022-03-21

### Commits

- [meta] do not publish workflow files [`44a1fe8`](https://github.com/inspect-js/node-exports-info/commit/44a1fe82cffc4453d8bc5171d70284b205db7bcc)
- read me [`99e4edf`](https://github.com/inspect-js/node-exports-info/commit/99e4edf1b245b8c58b8854c7596da5007e3f887e)
- [Test] add tests [`462bd2b`](https://github.com/inspect-js/node-exports-info/commit/462bd2b0a8e0147f308f93885f30e1d255e1746e)

## v1.0.0 - 2022-03-20

### Commits

- initial implementation and tests [`633f2bc`](https://github.com/inspect-js/node-exports-info/commit/633f2bcfc4a939c3095ea1c6cc08d426baa1c726)
- Initial commit [`bef50ef`](https://github.com/inspect-js/node-exports-info/commit/bef50ef02aabd8a50d8841d665106aeb6097248f)
- [Tests] temporarily use actions instead of composable workflows [`436fbbf`](https://github.com/inspect-js/node-exports-info/commit/436fbbf9612f0d661cc66b7a73247015eccbef13)
- `npm init` [`0c85774`](https://github.com/inspect-js/node-exports-info/commit/0c8577490640779d2881dbd02d1a8dca7c9951a5)
- Only apps should have lockfiles [`28d9d61`](https://github.com/inspect-js/node-exports-info/commit/28d9d6160d10855cbf29bb1e4751260b87735d34)
