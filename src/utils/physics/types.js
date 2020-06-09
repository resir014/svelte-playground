/**
 * @typedef {Object} SurfaceProperties
 * @property {number} oil
 * @property {number} tarmac
 * @property {number} tarmac2
 * @property {number} grass
 * @property {number} mud
 * @property {number} gravel
 * @property {number} gravel2
 * @property {number} sand
 * @property {number} sand2
 * @property {number} snow
 * @property {number} snow2
 * @property {number} ice
 * @property {number} kerb
 * @property {number} kerb2
 * @property {number} looseGravel
 */

/**
 * @typedef {Object} ScaledCarData
 * @property {number} airResistance
 * @property {number} downforce
 * @property {number} power
 * @property {number} topSpeed
 * @property {number} sliding
 * @property {number} weight
 * @property {number} balance
 */

/**
 * @typedef {Object} CalculationResult
 * @property {ScaledCarData} performance
 * @property {SurfaceProperties} grip
 * @property {SurfaceProperties} slowdown
 */

/**
 * @typedef {Object} GripResult
 * @property {number} gripTarmac
 * @property {number} gripTarmac2
 */

/**
 * @typedef {Object} RealCarData
 * @property {number} power
 * @property {number} weight
 * @property {number} topSpeed
 * @property {number} downforce
 * @property {number} airResistance
 * @property {number} tyreWidthFront
 * @property {number} tyreWidthRear
 * @property {number} tyreCompound
 * @property {number} drivetrain
 * @property {boolean} isHistoric
 */

export {};
