<!-- TITLE/ -->

# version-range

<!-- /TITLE -->

<!-- BADGES/ -->

<span class="badge-githubworkflow"><a href="https://github.com/bevry/version-range/actions?query=workflow%3Abevry" title="View the status of this project's GitHub Workflow: bevry"><img src="https://github.com/bevry/version-range/workflows/bevry/badge.svg" alt="Status of the GitHub Workflow: bevry" /></a></span>
<span class="badge-npmversion"><a href="https://npmjs.org/package/version-range" title="View this project on NPM"><img src="https://img.shields.io/npm/v/version-range.svg" alt="NPM version" /></a></span>
<span class="badge-npmdownloads"><a href="https://npmjs.org/package/version-range" title="View this project on NPM"><img src="https://img.shields.io/npm/dm/version-range.svg" alt="NPM downloads" /></a></span>
<br class="badge-separator" />
<span class="badge-githubsponsors"><a href="https://github.com/sponsors/balupton" title="Donate to this project using GitHub Sponsors"><img src="https://img.shields.io/badge/github-donate-yellow.svg" alt="GitHub Sponsors donate button" /></a></span>
<span class="badge-thanksdev"><a href="https://thanks.dev/u/gh/bevry" title="Donate to this project using ThanksDev"><img src="https://img.shields.io/badge/thanksdev-donate-yellow.svg" alt="ThanksDev donate button" /></a></span>
<span class="badge-liberapay"><a href="https://liberapay.com/bevry" title="Donate to this project using Liberapay"><img src="https://img.shields.io/badge/liberapay-donate-yellow.svg" alt="Liberapay donate button" /></a></span>
<span class="badge-buymeacoffee"><a href="https://buymeacoffee.com/balupton" title="Donate to this project using Buy Me A Coffee"><img src="https://img.shields.io/badge/buy%20me%20a%20coffee-donate-yellow.svg" alt="Buy Me A Coffee donate button" /></a></span>
<span class="badge-opencollective"><a href="https://opencollective.com/bevry" title="Donate to this project using Open Collective"><img src="https://img.shields.io/badge/open%20collective-donate-yellow.svg" alt="Open Collective donate button" /></a></span>
<span class="badge-crypto"><a href="https://bevry.me/crypto" title="Donate to this project using Cryptocurrency"><img src="https://img.shields.io/badge/crypto-donate-yellow.svg" alt="crypto donate button" /></a></span>
<span class="badge-paypal"><a href="https://bevry.me/paypal" title="Donate to this project using Paypal"><img src="https://img.shields.io/badge/paypal-donate-yellow.svg" alt="PayPal donate button" /></a></span>
<br class="badge-separator" />
<span class="badge-discord"><a href="https://discord.gg/nQuXddV7VP" title="Join this project's community on Discord"><img src="https://img.shields.io/discord/1147436445783560193?logo=discord&amp;label=discord" alt="Discord server badge" /></a></span>
<span class="badge-twitch"><a href="https://www.twitch.tv/balupton" title="Join this project's community on Twitch"><img src="https://img.shields.io/twitch/status/balupton?logo=twitch" alt="Twitch community badge" /></a></span>

<!-- /BADGES -->

<!-- DESCRIPTION/ -->

Check version ranges like `>=N` and `X || Y || Z` with support for Node.js, Web Browsers, Deno, and TypeScript.

<!-- /DESCRIPTION -->


## Usage

[Complete API Documentation.](http://master.version-range.bevry.surge.sh/docs/)

Range comparison of versions for the most common use cases. Fast with broad ecosystem support.

```typescript
import satisfies from 'version-range'
console.log(satisfies('1.0', '>=1.0')) // true
console.log(satisfies('1.0', '1')) // true
console.log(satisfies('1.0', '1 || 2')) // true
console.log(satisfies('1.1.0', '^1.1')) // true
console.log(satisfies('1.1.0', '~1.1')) // true
console.log(satisfies('1.0.0', '5 || <=2')) // true

console.log(satisfies('1', '<=2')) // true
console.log(satisfies('1.0', '<=2')) // true
console.log(satisfies('1.0.0', '<=2')) // true

console.log(satisfies('2', '>1')) // true
console.log(satisfies('2', '>=1')) // true
console.log(satisfies('1', '>=1')) // true
console.log(satisfies('1.0', '>=1')) // true
console.log(satisfies('1.0.0', '>=1')) // true
console.log(satisfies('1', '>=1.0.0')) // true
console.log(satisfies('1.0', '>=1.0.0')) // true
console.log(satisfies('1.0.0', '>=1.0.0')) // true

console.log(satisfies('1', '^1')) // true
console.log(satisfies('1', '~1')) // false, not all 1.x versions (1.1, 1.2, etc) match 1.0.x
console.log(satisfies('1', '^1.1')) // false, not all 1.x versions (1.0) match >=1.1<2
console.log(satisfies('1', '~1.1')) // false, not all 1.x versions (1.0) match 1.1.x
console.log(satisfies('1.0.0', '^1')) // true
console.log(satisfies('1.0.0', '~1')) // true
```

The above results are expected, but not what the [`semver` package](https://www.npmjs.com/package/semver) returns. The semver package has two different behaviours based on whether the version is coerced or not, alternating between expected and unexpected results. This package differs to match our actual expectations, as you can see above.

Doesn't do special handling for `-releaseTag` and `0.x` versions.

## Related

This package comprises this suite of related packages:

-   [version-clean](https://github.com/bevry/version-clean)
-   [version-compare](https://github.com/bevry/version-compare)
-   [version-range](https://github.com/bevry/version-range)

And if you are specifically interested in Node.js and ECMAScript versions:

-   [ecmascript-versions](https://github.com/bevry/ecmascript-versions)
-   [nodejs-ecmascript-compatibility](https://github.com/bevry/nodejs-ecmascript-compatibility)
-   [nodejs-releases](https://github.com/bevry/nodejs-releases)
-   [nodejs-schedule](https://github.com/bevry/nodejs-schedule)
-   [nodejs-versions](https://github.com/bevry/nodejs-versions)

<!-- INSTALL/ -->

## Install

### [npm](https://npmjs.com "npm is a package manager for javascript")

-   Install: `npm install --save version-range`
-   Import: `import pkg from ('version-range')`
-   Require: `const pkg = require('version-range').default`

### [Deno](https://deno.land "Deno is a secure runtime for JavaScript and TypeScript, it is an alternative for Node.js")

``` typescript
import pkg from 'https://unpkg.com/version-range@^4.15.0/edition-deno/index.ts'
```
### [Skypack](https://www.skypack.dev "Skypack is a JavaScript Delivery Network for modern web apps")

``` html
<script type="module">
    import pkg from '//cdn.skypack.dev/version-range@^4.15.0'
</script>
```
### [unpkg](https://unpkg.com "unpkg is a fast, global content delivery network for everything on npm")

``` html
<script type="module">
    import pkg from '//unpkg.com/version-range@^4.15.0'
</script>
```
### [jspm](https://jspm.io "Native ES Modules CDN")

``` html
<script type="module">
    import pkg from '//dev.jspm.io/version-range@4.15.0'
</script>
```
### [Editions](https://editions.bevry.me "Editions are the best way to produce and consume packages you care about.")

This package is published with the following editions:
-   `version-range/source/index.ts` is [TypeScript](https://www.typescriptlang.org/ "TypeScript is a typed superset of JavaScript that compiles to plain JavaScript.") source code with [Import](https://babeljs.io/docs/learn-es2015/#modules "ECMAScript Modules") for modules
-   `version-range/edition-browsers/index.js` is [TypeScript](https://www.typescriptlang.org/ "TypeScript is a typed superset of JavaScript that compiles to plain JavaScript.") compiled against [ES2024](https://en.wikipedia.org/wiki/ES2024 "ECMAScript 2024") for web browsers with [Import](https://babeljs.io/docs/learn-es2015/#modules "ECMAScript Modules") for modules
-   `version-range` aliases `version-range/edition-es5/index.js`
-   `version-range/edition-es5/index.js` is [TypeScript](https://www.typescriptlang.org/ "TypeScript is a typed superset of JavaScript that compiles to plain JavaScript.") compiled against ES5 for [Node.js](https://nodejs.org "Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine") 4 || 6 || 8 || 10 || 12 || 14 || 16 || 18 || 20 || 22 || 24 with [Require](https://nodejs.org/dist/latest-v5.x/docs/api/modules.html "Node/CJS Modules") for modules
-   `version-range/edition-es2024-esm/index.js` is [TypeScript](https://www.typescriptlang.org/ "TypeScript is a typed superset of JavaScript that compiles to plain JavaScript.") compiled against [ES2024](https://en.wikipedia.org/wiki/ES2024 "ECMAScript 2024") for [Node.js](https://nodejs.org "Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine") 12 || 14 || 16 || 18 || 20 || 22 || 24 with [Import](https://babeljs.io/docs/learn-es2015/#modules "ECMAScript Modules") for modules
-   `version-range/edition-types/index.d.ts` is [TypeScript](https://www.typescriptlang.org/ "TypeScript is a typed superset of JavaScript that compiles to plain JavaScript.") compiled Types with [Import](https://babeljs.io/docs/learn-es2015/#modules "ECMAScript Modules") for modules
-   `version-range/edition-deno/index.ts` is [TypeScript](https://www.typescriptlang.org/ "TypeScript is a typed superset of JavaScript that compiles to plain JavaScript.") source code made to be compatible with [Deno](https://deno.land "Deno is a secure runtime for JavaScript and TypeScript, it is an alternative to Node.js")

<!-- /INSTALL -->

<!-- HISTORY/ -->

## History

[Discover the release history by heading on over to the `HISTORY.md` file.](https://github.com/bevry/version-range/blob/HEAD/HISTORY.md#files)

<!-- /HISTORY -->

<!-- BACKERS/ -->

## Backers

### Code

[Discover how to contribute via the `CONTRIBUTING.md` file.](https://github.com/bevry/version-range/blob/HEAD/CONTRIBUTING.md#files)

#### Authors

-   [Benjamin Lupton](https://balupton.com) — Accelerating collaborative wisdom.

#### Maintainers

-   [Benjamin Lupton](https://balupton.com) — Accelerating collaborative wisdom.

#### Contributors

-   [Benjamin Lupton](https://github.com/balupton) — [view contributions](https://github.com/bevry/version-range/commits?author=balupton "View the GitHub contributions of Benjamin Lupton on repository bevry/version-range")

### Finances

<span class="badge-githubsponsors"><a href="https://github.com/sponsors/balupton" title="Donate to this project using GitHub Sponsors"><img src="https://img.shields.io/badge/github-donate-yellow.svg" alt="GitHub Sponsors donate button" /></a></span>
<span class="badge-thanksdev"><a href="https://thanks.dev/u/gh/bevry" title="Donate to this project using ThanksDev"><img src="https://img.shields.io/badge/thanksdev-donate-yellow.svg" alt="ThanksDev donate button" /></a></span>
<span class="badge-liberapay"><a href="https://liberapay.com/bevry" title="Donate to this project using Liberapay"><img src="https://img.shields.io/badge/liberapay-donate-yellow.svg" alt="Liberapay donate button" /></a></span>
<span class="badge-buymeacoffee"><a href="https://buymeacoffee.com/balupton" title="Donate to this project using Buy Me A Coffee"><img src="https://img.shields.io/badge/buy%20me%20a%20coffee-donate-yellow.svg" alt="Buy Me A Coffee donate button" /></a></span>
<span class="badge-opencollective"><a href="https://opencollective.com/bevry" title="Donate to this project using Open Collective"><img src="https://img.shields.io/badge/open%20collective-donate-yellow.svg" alt="Open Collective donate button" /></a></span>
<span class="badge-crypto"><a href="https://bevry.me/crypto" title="Donate to this project using Cryptocurrency"><img src="https://img.shields.io/badge/crypto-donate-yellow.svg" alt="crypto donate button" /></a></span>
<span class="badge-paypal"><a href="https://bevry.me/paypal" title="Donate to this project using Paypal"><img src="https://img.shields.io/badge/paypal-donate-yellow.svg" alt="PayPal donate button" /></a></span>

#### Sponsors

-   [Andrew Nesbitt](https://nesbitt.io) — Working on mapping the world of open source software @ecosyste-ms  and empowering developers with @octobox
-   [Divinci ™](https://divinci.ai) — A more comfortable AI conversation experience, with friends! 🤖🖤
-   [Mr. Henry](https://mrhenry.be)
-   [Poonacha Medappa](https://poonachamedappa.com)
-   [Roboflow](https://roboflow.com)
-   [Square](https://github.com/square)

#### Donors

-   [Andrew Nesbitt](https://nesbitt.io)
-   [Ángel González](https://univunix.com)
-   [Arjun Aditya](https://arjunaditya.xyz)
-   [Armen Mkrtchian](https://mogoni.dev)
-   [Balsa](https://balsa.com)
-   [Canonical](https://canonical.com)
-   [Chad](https://opencollective.com/chad8)
-   [Codecov](https://codecov.io)
-   [Divinci ™](https://divinci.ai)
-   [dr.dimitru](https://veliovgroup.com)
-   [Elliott Ditman](https://elliottditman.com)
-   [entroniq](https://gitlab.com/entroniq)
-   [Frontend Masters](https://FrontendMasters.com)
-   [GitHub](https://github.com/about)
-   [Hunter Beast](https://cryptoquick.com)
-   [Jean-Luc Geering](https://github.com/jlgeering)
-   [Lee Driscoll](https://leedriscoll.me)
-   [Michael Duane Mooring](https://divinci.app)
-   [Michael Harry Scepaniak](https://michaelscepaniak.com)
-   [Mohammed Shah](https://github.com/smashah)
-   [Mr. Henry](https://mrhenry.be)
-   [Pleo](https://pleo.io)
-   [Poonacha Medappa](https://poonachamedappa.com)
-   [Robert de Forest](https://github.com/rdeforest)
-   [Rob Morris](https://linktr.ee/recipromancer)
-   [Roboflow](https://roboflow.com)
-   [Scott Kempson](https://github.com/scokem)
-   [Sentry](https://sentry.io)
-   [ServieJS](https://github.com/serviejs)
-   [Skunk Team](https://skunk.team)
-   [Square](https://github.com/square)
-   [Syntax](https://syntax.fm)
-   [WriterJohnBuck](https://github.com/WriterJohnBuck)

<!-- /BACKERS -->

<!-- LICENSE/ -->

## License

Unless stated otherwise all works are:

-   Copyright &copy; [Benjamin Lupton](https://balupton.com)

and licensed under:

-   [Artistic License 2.0](http://spdx.org/licenses/Artistic-2.0.html)

<!-- /LICENSE -->
