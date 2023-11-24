<!-- TITLE/ -->

<h1>version-range</h1>

<!-- /TITLE -->


<!-- BADGES/ -->

<span class="badge-githubworkflow"><a href="https://github.com/bevry/version-range/actions?query=workflow%3Abevry" title="View the status of this project's GitHub Workflow: bevry"><img src="https://github.com/bevry/version-range/workflows/bevry/badge.svg" alt="Status of the GitHub Workflow: bevry" /></a></span>
<span class="badge-npmversion"><a href="https://npmjs.org/package/version-range" title="View this project on NPM"><img src="https://img.shields.io/npm/v/version-range.svg" alt="NPM version" /></a></span>
<span class="badge-npmdownloads"><a href="https://npmjs.org/package/version-range" title="View this project on NPM"><img src="https://img.shields.io/npm/dm/version-range.svg" alt="NPM downloads" /></a></span>
<br class="badge-separator" />
<span class="badge-githubsponsors"><a href="https://github.com/sponsors/balupton" title="Donate to this project using GitHub Sponsors"><img src="https://img.shields.io/badge/github-donate-yellow.svg" alt="GitHub Sponsors donate button" /></a></span>
<span class="badge-thanksdev"><a href="https://thanks.dev/u/gh/bevry" title="Donate to this project using ThanksDev"><img src="https://img.shields.io/badge/thanksdev-donate-yellow.svg" alt="ThanksDev donate button" /></a></span>
<span class="badge-patreon"><a href="https://patreon.com/bevry" title="Donate to this project using Patreon"><img src="https://img.shields.io/badge/patreon-donate-yellow.svg" alt="Patreon donate button" /></a></span>
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

<!-- INSTALL/ -->

<h2>Install</h2>

<a href="https://npmjs.com" title="npm is a package manager for javascript"><h3>npm</h3></a>
<ul>
<li>Install: <code>npm install --save version-range</code></li>
<li>Import: <code>import pkg from ('version-range')</code></li>
<li>Require: <code>const pkg = require('version-range').default</code></li>
</ul>

<a href="https://deno.land" title="Deno is a secure runtime for JavaScript and TypeScript, it is an alternative for Node.js"><h3>Deno</h3></a>

``` typescript
import pkg from 'https://unpkg.com/version-range@^4.7.0/edition-deno/index.ts'
```

<a href="https://www.skypack.dev" title="Skypack is a JavaScript Delivery Network for modern web apps"><h3>Skypack</h3></a>

``` html
<script type="module">
    import pkg from '//cdn.skypack.dev/version-range@^4.7.0'
</script>
```

<a href="https://unpkg.com" title="unpkg is a fast, global content delivery network for everything on npm"><h3>unpkg</h3></a>

``` html
<script type="module">
    import pkg from '//unpkg.com/version-range@^4.7.0'
</script>
```

<a href="https://jspm.io" title="Native ES Modules CDN"><h3>jspm</h3></a>

``` html
<script type="module">
    import pkg from '//dev.jspm.io/version-range@4.7.0'
</script>
```

<h3><a href="https://editions.bevry.me" title="Editions are the best way to produce and consume packages you care about.">Editions</a></h3>

<p>This package is published with the following editions:</p>

<ul><li><code>version-range/source/index.ts</code> is <a href="https://www.typescriptlang.org/" title="TypeScript is a typed superset of JavaScript that compiles to plain JavaScript. ">TypeScript</a> source code with <a href="https://babeljs.io/docs/learn-es2015/#modules" title="ECMAScript Modules">Import</a> for modules</li>
<li><code>version-range/edition-browsers/index.js</code> is <a href="https://www.typescriptlang.org/" title="TypeScript is a typed superset of JavaScript that compiles to plain JavaScript. ">TypeScript</a> compiled against ES2022 for web browsers with <a href="https://babeljs.io/docs/learn-es2015/#modules" title="ECMAScript Modules">Import</a> for modules</li>
<li><code>version-range</code> aliases <code>version-range/edition-es5/index.js</code></li>
<li><code>version-range/edition-es5/index.js</code> is <a href="https://www.typescriptlang.org/" title="TypeScript is a typed superset of JavaScript that compiles to plain JavaScript. ">TypeScript</a> compiled against ES5 for <a href="https://nodejs.org" title="Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine">Node.js</a> with <a href="https://nodejs.org/dist/latest-v5.x/docs/api/modules.html" title="Node/CJS Modules">Require</a> for modules</li>
<li><code>version-range/edition-es5-esm/index.js</code> is <a href="https://www.typescriptlang.org/" title="TypeScript is a typed superset of JavaScript that compiles to plain JavaScript. ">TypeScript</a> compiled against ES5 for <a href="https://nodejs.org" title="Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine">Node.js</a> with <a href="https://babeljs.io/docs/learn-es2015/#modules" title="ECMAScript Modules">Import</a> for modules</li>
<li><code>version-range/edition-types/index.d.ts</code> is <a href="https://www.typescriptlang.org/" title="TypeScript is a typed superset of JavaScript that compiles to plain JavaScript. ">TypeScript</a> compiled Types with <a href="https://babeljs.io/docs/learn-es2015/#modules" title="ECMAScript Modules">Import</a> for modules</li>
<li><code>version-range/edition-deno/index.ts</code> is <a href="https://www.typescriptlang.org/" title="TypeScript is a typed superset of JavaScript that compiles to plain JavaScript. ">TypeScript</a> source code made to be compatible with <a href="https://deno.land" title="Deno is a secure runtime for JavaScript and TypeScript, it is an alternative to Node.js">Deno</a></li></ul>

<!-- /INSTALL -->


<!-- HISTORY/ -->

<h2>History</h2>

<a href="https://github.com/bevry/version-range/blob/master/HISTORY.md#files">Discover the release history by heading on over to the <code>HISTORY.md</code> file.</a>

<!-- /HISTORY -->


<!-- CONTRIBUTE/ -->

<h2>Contribute</h2>

<a href="https://github.com/bevry/version-range/blob/master/CONTRIBUTING.md#files">Discover how you can contribute by heading on over to the <code>CONTRIBUTING.md</code> file.</a>

<!-- /CONTRIBUTE -->


<!-- BACKERS/ -->

<h2>Backers</h2>

<h3>Maintainers</h3>

These amazing people are maintaining this project:

<ul><li><a href="https://balupton.com">Benjamin Lupton</a> — <a href="https://github.com/bevry/version-range/commits?author=balupton" title="View the GitHub contributions of Benjamin Lupton on repository bevry/version-range">view contributions</a></li></ul>

<h3>Sponsors</h3>

No sponsors yet! Will you be the first?

<span class="badge-githubsponsors"><a href="https://github.com/sponsors/balupton" title="Donate to this project using GitHub Sponsors"><img src="https://img.shields.io/badge/github-donate-yellow.svg" alt="GitHub Sponsors donate button" /></a></span>
<span class="badge-thanksdev"><a href="https://thanks.dev/u/gh/bevry" title="Donate to this project using ThanksDev"><img src="https://img.shields.io/badge/thanksdev-donate-yellow.svg" alt="ThanksDev donate button" /></a></span>
<span class="badge-patreon"><a href="https://patreon.com/bevry" title="Donate to this project using Patreon"><img src="https://img.shields.io/badge/patreon-donate-yellow.svg" alt="Patreon donate button" /></a></span>
<span class="badge-liberapay"><a href="https://liberapay.com/bevry" title="Donate to this project using Liberapay"><img src="https://img.shields.io/badge/liberapay-donate-yellow.svg" alt="Liberapay donate button" /></a></span>
<span class="badge-buymeacoffee"><a href="https://buymeacoffee.com/balupton" title="Donate to this project using Buy Me A Coffee"><img src="https://img.shields.io/badge/buy%20me%20a%20coffee-donate-yellow.svg" alt="Buy Me A Coffee donate button" /></a></span>
<span class="badge-opencollective"><a href="https://opencollective.com/bevry" title="Donate to this project using Open Collective"><img src="https://img.shields.io/badge/open%20collective-donate-yellow.svg" alt="Open Collective donate button" /></a></span>
<span class="badge-crypto"><a href="https://bevry.me/crypto" title="Donate to this project using Cryptocurrency"><img src="https://img.shields.io/badge/crypto-donate-yellow.svg" alt="crypto donate button" /></a></span>
<span class="badge-paypal"><a href="https://bevry.me/paypal" title="Donate to this project using Paypal"><img src="https://img.shields.io/badge/paypal-donate-yellow.svg" alt="PayPal donate button" /></a></span>

<h3>Contributors</h3>

These amazing people have contributed code to this project:

<ul><li><a href="https://balupton.com">Benjamin Lupton</a> — <a href="https://github.com/bevry/version-range/commits?author=balupton" title="View the GitHub contributions of Benjamin Lupton on repository bevry/version-range">view contributions</a></li></ul>

<a href="https://github.com/bevry/version-range/blob/master/CONTRIBUTING.md#files">Discover how you can contribute by heading on over to the <code>CONTRIBUTING.md</code> file.</a>

<!-- /BACKERS -->


<!-- LICENSE/ -->

<h2>License</h2>

Unless stated otherwise all works are:

<ul><li>Copyright &copy; 2020+ <a href="https://balupton.com">Benjamin Lupton</a></li></ul>

and licensed under:

<ul><li><a href="http://spdx.org/licenses/Artistic-2.0.html">Artistic License 2.0</a></li></ul>

<!-- /LICENSE -->
