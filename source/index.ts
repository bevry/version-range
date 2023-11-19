export type Version = string | number
export type Range = Version | Version[]

const orRegex = /\s*\|\|\s*/
const rangeRegex = /^\s*([<>=~^]*)\s*([\d.]+?)[.x]*(-.+)?\s*$/

/**
 * Check if the version is within the range
 * @param subject The version to check against the range
 * @param range The range to check the version against
 */
export default function withinVersionRange(
	subject: Version,
	range: Range
): boolean {
	// prepare and verify subject
	subject = String(subject)
	const [subjectMajor = null, subjectMinor = null, subjectPatch = null] =
		subject.split('.')
	if (subjectMajor === null)
		throw new Error(`subject was invalid: ${JSON.stringify(subject)}`)
	const subjectMajorNumber = Number(subjectMajor || 0)
	const subjectMinorNumber = Number(subjectMinor || 0)
	const subjectPatchNumber = Number(subjectPatch || 0)

	// cycle through the conditions
	let combinedResult: boolean = false
	if (!Array.isArray(range)) range = String(range).split(orRegex)
	for (const condition of range) {
		// process range
		const [_, comparator, target, prerelease] =
			String(condition).match(rangeRegex) || []

		// prepare and verify target
		const [targetMajor = null, targetMinor = null, targetPatch = null] = (
			target || ''
		).split('.')
		if (!target || targetMajor == null || prerelease)
			throw new Error(
				`range condition was invalid: ${JSON.stringify(condition)}`
			)
		const targetMajorNumber = Number(targetMajor || 0)
		const targetMinorNumber = Number(targetMinor || 0)
		const targetPatchNumber = Number(targetPatch || 0)

		// handle comparator
		const pass: boolean = false
		switch (comparator) {
			case '^':
				if (subjectMajorNumber === targetMajorNumber) {
					if (subjectMinorNumber === targetMinorNumber) {
						if (subjectPatchNumber >= targetPatchNumber) {
							combinedResult = true
						}
					} else if (subjectMinorNumber >= targetMinorNumber) {
						combinedResult = true
					}
				}
				break
			case '~':
				if (subjectMajorNumber === targetMajorNumber) {
					if (
						subjectMinor !== null &&
						subjectMinorNumber === targetMinorNumber
					) {
						if (subjectPatchNumber >= targetPatchNumber) {
							combinedResult = true
						}
					}
				}
				break
			case '>=':
				if (subjectMajorNumber === targetMajorNumber) {
					if (subjectMinorNumber === targetMinorNumber) {
						if (subjectPatchNumber >= targetPatchNumber) {
							combinedResult = true
						}
					} else if (subjectMinorNumber >= targetMinorNumber) {
						combinedResult = true
					}
				} else if (subjectMajorNumber >= targetMajorNumber) {
					combinedResult = true
				}
				break
			case '>':
				if (subjectMajorNumber === targetMajorNumber) {
					if (targetMinor === null) {
						// x > x = false
						// x.y > x = false
					} else if (subjectMinorNumber === targetMinorNumber) {
						if (targetPatch === null) {
							// x.y > x.y = false
							// x.y.z > x.y = false
						} else if (subjectPatchNumber > targetPatchNumber) {
							combinedResult = true
						}
					} else if (subjectMinorNumber > targetMinorNumber) {
						combinedResult = true
					}
				} else if (subjectMajorNumber > targetMajorNumber) {
					combinedResult = true
				}
				break
			case '<':
				if (subjectMajorNumber === targetMajorNumber) {
					if (subjectMinor === null) {
						// x < x = false
						// x < x.y = false
					} else if (subjectMinorNumber === targetMinorNumber) {
						if (subjectPatch === null) {
							// x.y < x.y = false
							// x.y < x.y.z = false
						} else if (subjectPatchNumber < targetPatchNumber) {
							combinedResult = true
						}
					} else if (subjectMinorNumber < targetMinorNumber) {
						combinedResult = true
					}
				} else if (subjectMajorNumber < targetMajorNumber) {
					combinedResult = true
				}
				break
			case '<=':
				if (subjectMajorNumber === targetMajorNumber) {
					if (subjectMinor === null) {
						if (targetMinor === null) {
							// x <= x = true
							combinedResult = true
						}
						// x <= x.y = false
					} else if (targetMinor === null) {
						// x.y <= x = true
						combinedResult = true
					} else if (subjectMinorNumber === targetMinorNumber) {
						if (subjectPatch === null) {
							if (targetPatch === null) {
								// x.y <= x.y = true
								combinedResult = true
							}
							// x.y <= x.y.z = false
						} else if (targetPatch === null) {
							// x.y.z <= x.y = true
							combinedResult = true
						} else if (subjectPatchNumber <= targetPatchNumber) {
							// x.y.z <= x.y.z = true
							combinedResult = true
						}
					} else if (subjectMinorNumber <= targetMinorNumber) {
						combinedResult = true
					}
				} else if (subjectMajorNumber <= targetMajorNumber) {
					combinedResult = true
				}
				break
			case '=':
			case '':
				if (subjectMajor === targetMajor) {
					if (targetMinor === null) {
						combinedResult = true
					} else if (subjectMinor === targetMinor) {
						if (targetPatch === null || subjectPatch === targetPatch) {
							combinedResult = true
						}
					}
				}
				break
			default:
				throw new Error(
					`range comparator was invalid: ${JSON.stringify(condition)}`
				)
		}
		if (pass) combinedResult = true
	}
	return combinedResult
}
