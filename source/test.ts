import { equal } from 'assert-helpers'
import kava from 'kava'

import match, { Version, Range } from './index.js'

const fixtures: Array<{
	input: [current: Version, range: Range]
	expected: boolean
}> = [
	{
		input: ['1', '1'],
		expected: true,
	},
	{
		input: ['0', '1'],
		expected: false,
	},
	{
		input: ['1.0', '1.1'],
		expected: false,
	},
	{
		input: ['1', '=1'],
		expected: true,
	},
	{
		input: ['1', '>=1'],
		expected: true,
	},
	{
		input: ['1', '<=1'],
		expected: true,
	},
	{
		input: ['1.0', '1'],
		expected: true,
	},
	{
		input: ['1', '1.0'],
		expected: true,
	},
	{
		input: ['1.0', '1.0'],
		expected: true,
	},
	{
		input: ['1.0', '<=1'],
		expected: true,
	},
	{
		input: ['1.0', '<=1.1'],
		expected: true,
	},
	{
		input: ['1.0', '<1.1'],
		expected: true,
	},
	{
		input: ['1.1', '>1.0'],
		expected: true,
	},
	{
		input: ['1.1', '<1.1'],
		expected: false,
	},
	{
		input: ['1.1', '>1.1'],
		expected: false,
	},
	{
		input: ['1', '>1'],
		expected: false,
	},
	{
		input: ['1', '<1'],
		expected: false,
	},
	{
		input: ['1', '1 || 2'],
		expected: true,
	},
	{
		input: ['1', '>=1 || 2'],
		expected: true,
	},
	{
		input: ['1.0.0', '5 || <=3'],
		expected: true,
	},
]

kava.suite('version-range', function (suite, test) {
	for (const fixture of fixtures) {
		const name = `match(${JSON.stringify(fixture.input[0])}, ${JSON.stringify(
			fixture.input[1]
		)}) = ${JSON.stringify(fixture.expected)}`
		test(name, function () {
			equal(match(...fixture.input), fixture.expected)
		})
	}
})
