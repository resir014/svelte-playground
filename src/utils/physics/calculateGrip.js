// @ts-check

/**
 * @typedef {import('./calculatePhysics').SurfaceProperties} SurfaceProperties
 */

/**
 * @typedef {Omit<SurfaceProperties, 'tarmac' | 'tarmac2' | 'kerb' | 'kerb2'>} NonTarmacSurfaceProperties
 */

/**
 * Calculates grip penalty/bonus based on car's drivetrain
 * @param {number} grip Grip value
 * @param {number} drivetrain Drivetrain value
 * @returns {number}
 */
function gripPenaltyBonus(grip, drivetrain) {
  switch (drivetrain) {
    case 2: {
      // Rear-wheel drive
      return grip - 0.05;
    }
    case 3: {
      // Four-wheel drive
      return grip + 0.05;
    }
    default: {
      // Front-wheel drive
      return grip;
    }
  }
}

/**
 * Calculates non-tarmac grip values
 * @param {number} tyreCompound Tyre compound value
 * @param {number} drivetrain Drivetrain value
 * @returns {NonTarmacSurfaceProperties}
 */
export function calculateNonTarmacGrip(tyreCompound, drivetrain) {
  switch (tyreCompound) {
    case 1: {
      // Economy
      const gripNonTarmac = gripPenaltyBonus(0.6, drivetrain);
      const gripMudSnow = gripPenaltyBonus(0.4, drivetrain);
      const gripOilIce = gripPenaltyBonus(0.35, drivetrain);
      return {
        grass: gripNonTarmac,
        gravel: gripNonTarmac,
        gravel2: gripNonTarmac,
        sand: gripNonTarmac,
        sand2: gripNonTarmac,
        looseGravel: gripNonTarmac,
        oil: gripOilIce,
        ice: gripOilIce,
        mud: gripMudSnow,
        snow: gripMudSnow,
        snow2: gripMudSnow,
      };
    }
    case 2: {
      // Comfort
      const gripNonTarmac = gripPenaltyBonus(0.725, drivetrain);
      const gripMudSnow = gripPenaltyBonus(0.55, drivetrain);
      const gripOilIce = gripPenaltyBonus(0.5, drivetrain);
      return {
        grass: gripNonTarmac,
        gravel: gripNonTarmac,
        gravel2: gripNonTarmac,
        sand: gripNonTarmac,
        sand2: gripNonTarmac,
        looseGravel: gripNonTarmac,
        oil: gripOilIce,
        ice: gripOilIce,
        mud: gripMudSnow,
        snow: gripMudSnow,
        snow2: gripMudSnow,
      };
    }
    case 3: {
      // Road
      const gripNonTarmac = gripPenaltyBonus(0.85, drivetrain);
      const gripMudSnow = gripPenaltyBonus(0.7, drivetrain);
      const gripOilIce = gripPenaltyBonus(0.65, drivetrain);
      return {
        grass: gripNonTarmac,
        gravel: gripNonTarmac,
        gravel2: gripNonTarmac,
        sand: gripNonTarmac,
        sand2: gripNonTarmac,
        looseGravel: gripNonTarmac,
        oil: gripOilIce,
        ice: gripOilIce,
        mud: gripMudSnow,
        snow: gripMudSnow,
        snow2: gripMudSnow,
      };
    }
    case 4: {
      // Sport
      const gripNonTarmac = gripPenaltyBonus(0.725, drivetrain);
      const gripMudSnow = gripPenaltyBonus(0.6, drivetrain);
      const gripOilIce = gripPenaltyBonus(0.55, drivetrain);
      return {
        grass: gripNonTarmac,
        gravel: gripNonTarmac,
        gravel2: gripNonTarmac,
        sand: gripNonTarmac,
        sand2: gripNonTarmac,
        looseGravel: gripNonTarmac,
        oil: gripOilIce,
        ice: gripOilIce,
        mud: gripMudSnow,
        snow: gripMudSnow,
        snow2: gripMudSnow,
      };
    }
    case 5: {
      // Super
      const gripNonTarmac = gripPenaltyBonus(0.65, drivetrain);
      const gripMudSnow = gripPenaltyBonus(0.6, drivetrain);
      const gripOilIce = gripPenaltyBonus(0.55, drivetrain);
      return {
        grass: gripNonTarmac,
        gravel: gripNonTarmac,
        gravel2: gripNonTarmac,
        sand: gripNonTarmac,
        sand2: gripNonTarmac,
        looseGravel: gripNonTarmac,
        oil: gripOilIce,
        ice: gripOilIce,
        mud: gripMudSnow,
        snow: gripMudSnow,
        snow2: gripMudSnow,
      };
    }
    default: {
      // Semi-slicks + Racing Slicks
      const gripNonTarmac = gripPenaltyBonus(0.5, drivetrain);
      return {
        oil: gripNonTarmac,
        grass: gripNonTarmac,
        gravel: gripNonTarmac,
        gravel2: gripNonTarmac,
        sand: gripNonTarmac,
        sand2: gripNonTarmac,
        snow: gripNonTarmac,
        snow2: gripNonTarmac,
        ice: gripNonTarmac,
        looseGravel: gripNonTarmac,
        mud: gripNonTarmac,
      };
    }
  }
}
