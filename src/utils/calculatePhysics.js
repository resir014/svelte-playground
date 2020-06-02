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

/**
 * @param {number} tyreWidthFront
 * @param {number} tyreWidthRear
 * @param {number} weight
 */
function getBalance(tyreWidthFront, tyreWidthRear, weight) {
  return (tyreWidthFront / tyreWidthRear) * 1.4 - weight * 0.0005;
}

/**
 * Calculates tarmac2 grip.
 *
 * Required parameters:
 * 1. Front tyre's width (twf)
 * 2. Rear tyre's width (twr)
 * 3. Compound from 1 to 7... (tc)
 *
 * The formula comes out like this:
 *
 * ```js
 * ((twf+twr) * (1+(tc*0.1))) * 0.006
 * ```
 *
 * @param {number} tyreCompound
 * @param {number} tyreWidthFront
 * @param {number} tyreWidthRear
 */
function calculateTarmac2Grip(tyreCompound, tyreWidthFront, tyreWidthRear) {
  return (tyreWidthFront + tyreWidthRear) * (1 + tyreCompound * 0.1) * 0.006;
}

/**
 * Kerbs have a respective tarmac grip - 1.
 * @param {number} tarmacGrip
 */
function calculateKerbGrip(tarmacGrip) {
  return tarmacGrip - 1;
}

/**
 * Historic cars get a 15% grip penalty
 * @param {number} grip
 */
function historicPenalty(grip) {
  return grip - 0.15 * grip;
}

/**
 * @param {number} tyreCompound
 * @param {number} tyreWidthFront
 * @param {number} tyreWidthRear
 * @param {boolean} isHistoric
 */
function calculateTarmacGrip(tyreCompound, tyreWidthFront, tyreWidthRear, isHistoric) {
  let gripTarmac;
  let gripTarmac2;

  gripTarmac2 = calculateTarmac2Grip(tyreCompound, tyreWidthFront, tyreWidthRear);

  // Now we can find gripTarmac1.
  if (tyreCompound < 6) {
    // if TC type less than 6, tarmac2 - 0.1
    gripTarmac = gripTarmac2 - 0.1;
  } else {
    // if TC type more than 5, tarmac2 - 0.2
    gripTarmac = gripTarmac2 - 0.2;
  }

  if (isHistoric) {
    gripTarmac = historicPenalty(gripTarmac);
    gripTarmac2 = historicPenalty(gripTarmac2);
  }
}

/**
 * @param {RealCarData} carData
 * @returns {CalculationResult}
 */
export default function calculatePhysics({
  topSpeed,
  airResistance,
  downforce,
  power,
  tyreWidthFront,
  tyreWidthRear,
  weight,
}) {
  const topSpeedScaled = topSpeed * 0.277;
  const weightScaled = weight * 0.6;
  const sliding = 0;

  const balance = getBalance(tyreWidthFront, tyreWidthRear, weight);

  /** @type {CalculationResult} */
  const result = {
    performance: {
      airResistance,
      downforce,
      power,
      sliding,
      balance,
      topSpeed: topSpeedScaled,
      weight: weightScaled,
    },
  };

  return result;
}
