// @ts-check

import { calculateNonTarmacGrip } from './calculateGrip';

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
 * @param {number} tyreWidthFront
 * @param {number} tyreWidthRear
 * @param {number} tyreCompound
 */
function calculateTarmac2Grip(tyreWidthFront, tyreWidthRear, tyreCompound) {
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
 * @param {number} tyreWidthFront
 * @param {number} tyreWidthRear
 * @param {number} tyreCompound
 * @param {boolean} isHistoric
 */
function calculateTarmacGrip(tyreWidthFront, tyreWidthRear, tyreCompound, isHistoric) {
  let tarmac;
  let tarmac2;

  tarmac2 = calculateTarmac2Grip(tyreWidthFront, tyreWidthRear, tyreCompound);

  // Now we can find gripTarmac1.
  if (tyreCompound < 6) {
    // if TC type less than 6, tarmac2 - 0.1
    tarmac = tarmac2 - 0.1;
  } else {
    // if TC type more than 5, tarmac2 - 0.2
    tarmac = tarmac2 - 0.2;
  }

  if (isHistoric) {
    tarmac = historicPenalty(tarmac);
    tarmac2 = historicPenalty(tarmac2);
  }

  return { tarmac, tarmac2 };
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
  tyreCompound,
  drivetrain,
  isHistoric,
  weight,
}) {
  const topSpeedScaled = topSpeed * 0.277;
  const weightScaled = weight * 0.6;
  const sliding = 0;

  console.log(tyreWidthFront, tyreWidthRear);

  const balance = getBalance(tyreWidthFront, tyreWidthRear, weight);

  const tarmacGrip = calculateTarmacGrip(tyreWidthFront, tyreWidthRear, tyreCompound, isHistoric);

  /** @type {CalculationResult} */
  const result = {
    performance: {
      sliding,
      balance,
      airResistance: airResistance,
      downforce: downforce,
      power: power,
      topSpeed: topSpeedScaled,
      weight: weightScaled,
    },
    grip: {
      ...tarmacGrip,
      ...calculateNonTarmacGrip(tyreCompound, drivetrain),
      kerb: calculateKerbGrip(tarmacGrip.tarmac),
      kerb2: calculateKerbGrip(tarmacGrip.tarmac2),
    },
    slowdown: {
      oil: 0.1,
      tarmac: 0.01,
      tarmac2: 0.01,
      grass: 0.5,
      mud: 0.5,
      gravel: 0.2,
      gravel2: 0.1,
      sand: 2,
      sand2: 1.5,
      snow: 1.5,
      snow2: 1.5,
      ice: 0.1,
      kerb: 0,
      kerb2: 0.1,
      looseGravel: 0.3,
    },
  };

  return result;
}
