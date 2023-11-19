import { deepEqual, equal } from 'assert-helpers'
import kava from 'kava'
import { readJSON, writeJSON } from '@bevry/json'
// import { coerce, satisfies } from 'semver'

import versionRange from './index.js'

type Inputs = Array<[version: string, range: string]>
type Results = Array<
	[
		version: string,
		range: string,
		result: boolean,
		// semver?: boolean,
		// semverCoerced?: boolean,
	]
>

const versions = [
	'1',
	'2',
	'1.0',
	'1.1',
	'1.2',
	'1.0.0',
	'1.0.1',
	'1.0.2',
	'1.1.0',
	'1.1.1',
	'1.1.2',
	'1.2.0',
	'1.2.1',
	'1.2.2',
]
const rangePrefixes = ['', '=', '>', '<', '>=', '<=', '^', '~']
for (const prefix of rangePrefixes.slice()) {
	rangePrefixes.push('5 || ' + prefix)
}
const inputs: Inputs = []
for (const version of versions) {
	for (const otherVersion of versions) {
		for (const prefix of rangePrefixes) {
			inputs.push([version, prefix + otherVersion])
		}
	}
}
const actuals: Results = []
const expectations: Results = []
const readmeResults: Results = [
	['1.0', '>=1.0', true],
	['1.0', '1', true],
	['1.0', '1 || 2', true],
	['1.1.0', '^1.1', true],
	['1.1.0', '~1.1', true],
	['1.0.0', '5 || <=2', true],

	['1', '<=2', true],
	['1.0', '<=2', true],
	['1.0.0', '<=2', true],
	['2', '>1', true],
	['2', '>=1', true],
	['1', '>=1', true],
	['1.0', '>=1', true],
	['1.0.0', '>=1', true],
	['1', '>=1.0.0', true],
	['1.0', '>=1.0.0', true],
	['1.0.0', '>=1.0.0', true],

	['1', '^1', true],
	['1', '~1', false],
	['1.0.0', '^1', true],
	['1.0.0', '~1', true],
]
const indexResults: Results = [
	['1', '^1', true],
	['1.0', '^1', true],
	['1.0', '^1.0', true],
	['1.1', '^1.0', true],
	['1', '^1.1', false],

	['1', '~1', false],
	['1.0', '~1', true],
	['1.0', '~1.0', true],
	['1.1', '~1.0', false],
	['1', '~1.1', false],

	['1', '>2', false],
	['1', '>1', false],
	['1', '>1.0', false],
	['1', '>1.1', false],
	['1.0', '>1', false],
	['1.0', '>1.0', false],
	['1.0', '>1.0.0', false],
	['1.0', '>1.0.1', false],
	['1.0', '>1.1', false],
	['1.1', '>1', false],
	['1.1', '>1.0', true],
	['1.1', '>1.1', false],
	['1.1', '>1.2', false],
	['1.1', '>1.2.0', false],
	['1.1.0', '>1.2.0', false],
	['1.0.0', '>1.0.0', false],
	['1.0.0', '>1.0.1', false],
	['1.0.0', '>1.1', false],
	['1.0.0', '>1.1.0', false],
	['1.1.0', '>1.1', false],
	['1.1.1', '>1.1', false],
	['1.1.1', '>1.1.0', true],
	['1.1.1', '>1.1.1', false],
	['1.1.1', '>1.1.2', false],
	['1.1.0', '>1.2', false],
	['1.1.0', '>1.2.0', false],
	['1.2', '>1.1', true],

	['1', '>=2', false],
	['1', '>=1', true],
	['1', '>=1.0', true],
	['1', '>=1.1', false],
	['1.0', '>=1', true],
	['1.0', '>=1.0', true],
	['1.0', '>=1.0.0', true],
	['1.0', '>=1.0.1', false],
	['1.0', '>=1.1', false],
	['1.1', '>=1', true],
	['1.1', '>=1.0', true],
	['1.1', '>=1.1', true],
	['1.1', '>=1.2', false],
	['1.1', '>=1.2.0', false],
	['1.1.0', '>=1.2.0', false],
	['1.0.0', '>=1.0.0', true],
	['1.0.0', '>=1.0.1', false],
	['1.0.0', '>=1.1', false],
	['1.0.0', '>=1.1.0', false],
	['1.1.0', '>=1.1', true],
	['1.1.1', '>=1.1', true],
	['1.1.1', '>=1.1.0', true],
	['1.1.1', '>=1.1.1', true],
	['1.1.1', '>=1.1.2', false],
	['1.1.0', '>=1.2', false],
	['1.1.0', '>=1.2.0', false],
	['1.2', '>=1.1', true],

	['1', '<2', true],
	['1', '<1', false],
	['1', '<1.0', false],
	['1', '<1.1', false],
	['1.0', '<1', false],
	['1.0', '<1.0', false],
	['1.0', '<1.0.0', false],
	['1.0', '<1.0.1', false],
	['1.0', '<1.1', true],
	['1.1', '<1', false],
	['1.1', '<1.0', false],
	['1.1', '<1.1', false],
	['1.1', '<1.2', true],
	['1.1', '<1.2.0', true],
	['1.1.0', '<1.2.0', true],
	['1.0.0', '<1.0.0', false],
	['1.0.0', '<1.0.1', true],
	['1.0.0', '<1.1', true],
	['1.0.0', '<1.1.0', true],
	['1.1.0', '<1.1', false],
	['1.1.1', '<1.1', false],
	['1.1.1', '<1.1.0', false],
	['1.1.1', '<1.1.1', false],
	['1.1.1', '<1.1.2', true],
	['1.1.0', '<1.2', true],
	['1.1.0', '<1.2.0', true],
	['1.2', '<1.1', false],

	['1', '<=2', true],
	['1', '<=1', true],
	['1', '<=1.0', false],
	['1', '<=1.1', false],
	['1.0', '<=1', true],
	['1.0', '<=1.0', true],
	['1.0', '<=1.0.0', false],
	['1.0', '<=1.0.1', false],
	['1.0', '<=1.1', true],
	['1.1', '<=1', true],
	['1.1', '<=1.0', false],
	['1.1', '<=1.1', true],
	['1.1', '<=1.2', true],
	['1.1', '<=1.2.0', true],
	['1.1.0', '<=1.2.0', true],
	['1.0.0', '<=1.0.0', true],
	['1.0.0', '<=1.0.1', true],
	['1.0.0', '<=1.1', true],
	['1.0.0', '<=1.1.0', true],
	['1.1.0', '<=1.1', true],
	['1.1.1', '<=1.1', true],
	['1.1.1', '<=1.1.0', false],
	['1.1.1', '<=1.1.1', true],
	['1.1.1', '<=1.1.2', true],
	['1.1.0', '<=1.2', true],
	['1.1.0', '<=1.2.0', true],
	['1.2', '<=1.1', false],

	['1', '1', true],
	['1', '2', false],
	['1', '1.0', false],
	['1', '1.0.0', false],
	['1.0', '1.0', true],
	['1.0', '1.0.0', false],
	['1.1', '1', true],
	['1.1.1', '1', true],
	['1.1.1', '1.1.1', true],
	['1.1.1', '1.1.2', false],
]

kava.suite('version-range', function (suite, test) {
	test('index', function () {
		for (const result of indexResults) {
			const [version, range] = result
			deepEqual(
				[
					version,
					range,
					versionRange(version, range),
					// satisfies(version, range),
					// satisfies(coerce(version) as any as string, range),
				],
				result
			)
		}
	})
	test('readme', function () {
		for (const result of readmeResults) {
			const [version, range] = result
			deepEqual(
				[
					version,
					range,
					versionRange(version, range),
					// satisfies(version, range),
					// satisfies(coerce(version) as any as string, range),
				],
				result
			)
		}
	})
	test('load', function (done) {
		readJSON<Results>('test/test-fixtures.json')
			.then((results) => {
				expectations.push(...results)
				done()
			})
			.catch(done)
	})
	test('generate', function () {
		for (const [version, range] of inputs) {
			actuals.push([
				version,
				range,
				versionRange(version, range),
				// satisfies(version, range),
				// satisfies(coerce(version) as any as string, range),
			])
		}
	})
	// test('save changes', function (done) {
	// 	writeJSON('test/test-fixtures.json', actuals)
	// 		.then(() => done())
	// 		.catch(done)
	// })
	test('compare', function () {
		deepEqual(actuals, expectations)
	})
})
