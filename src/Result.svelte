<script>
  /** @type {import('./utils/physics/calculatePhysics').CalculationResult} */
  export let result;
</script>

<style>
  .results {
    text-align: right;
  }
</style>

<div class="mt-8">
  <h2 class="text-4xl font-semibold mb-4">Results</h2>

  <h3 class="text-3xl font-semibold mb-4">Performance Values</h3>

  <table>
    <thead>
      <tr>
        <th>Attribute</th>
        <th>Value</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Air Resistance</td>
        <td id="airResistance" class="results">{result ? result.performance.airResistance.toFixed(1) : ''}</td>
      </tr>
      <tr>
        <td>Downforce/Wings</td>
        <td id="downforce" class="results">{result ? result.performance.downforce.toFixed(1) : ''}</td>
      </tr>
      <tr>
        <td>Power</td>
        <td id="power" class="results">{result ? result.performance.power.toFixed(1) : ''}</td>
      </tr>
      <tr>
        <td>Top Speed</td>
        <td id="topSpeed" class="results">{result ? result.performance.topSpeed.toFixed(1) : ''}</td>
      </tr>
      <tr>
        <td>Sliding</td>
        <td id="sliding" class="results">{result ? result.performance.sliding.toFixed(1) : ''}</td>
      </tr>
      <tr>
        <td>Mass</td>
        <td id="weight" class="results">{result ? result.performance.weight.toFixed(1) : ''}</td>
      </tr>
      <tr>
        <td>Balance</td>
        <td id="balance" class="results">{result ? result.performance.balance.toFixed(1) : ''}</td>
      </tr>
    </tbody>
  </table>

  <h3 class="text-3xl font-semibold mb-4">Grip Values</h3>

  <table>
    <thead>
      <tr>
        <th>Surface type</th>
        <th>Value</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Oil</td>
        <td id="gripOil" class="results">{result ? result.grip.oil.toFixed(2) : ''}</td>
      </tr>
      <tr>
        <td>Tarmac</td>
        <td id="gripTarmac1" class="results">{result ? result.grip.tarmac.toFixed(2) : ''}</td>
      </tr>
      <tr>
        <td>Tarmac 2</td>
        <td id="gripTarmac2" class="results">{result ? result.grip.tarmac2.toFixed(2) : ''}</td>
      </tr>
      <tr>
        <td>Grass</td>
        <td id="gripGrass" class="results">{result ? result.grip.grass.toFixed(2) : ''}</td>
      </tr>
      <tr>
        <td>Mud</td>
        <td id="gripMud" class="results">{result ? result.grip.mud.toFixed(2) : ''}</td>
      </tr>
      <tr>
        <td>Gravel</td>
        <td id="gripGravel1" class="results">{result ? result.grip.gravel.toFixed(2) : ''}</td>
      </tr>
      <tr>
        <td>Gravel 2</td>
        <td id="gripGravel2" class="results">{result ? result.grip.gravel2.toFixed(2) : ''}</td>
      </tr>
      <tr>
        <td>Sand</td>
        <td id="gripSand1" class="results">{result ? result.grip.sand.toFixed(2) : ''}</td>
      </tr>
      <tr>
        <td>Sand 2</td>
        <td id="gripSand2" class="results">{result ? result.grip.sand2.toFixed(2) : ''}</td>
      </tr>
      <tr>
        <td>Snow</td>
        <td id="gripSnow" class="results">{result ? result.grip.snow.toFixed(2) : ''}</td>
      </tr>
      <tr>
        <td>Ice</td>
        <td id="gripIce" class="results">{result ? result.grip.ice.toFixed(2) : ''}</td>
      </tr>
      <tr>
        <td>Kerb</td>
        <td id="gripKerb1" class="results">{result ? result.grip.kerb.toFixed(2) : ''}</td>
      </tr>
      <tr>
        <td>Kerb 2</td>
        <td id="gripKerb2" class="results">{result ? result.grip.kerb2.toFixed(2) : ''}</td>
      </tr>
      <tr>
        <td>Loose gravel</td>
        <td id="gripLooseGravel" class="results">{result ? result.grip.looseGravel.toFixed(2) : ''}</td>
      </tr>
    </tbody>
  </table>

  <h3 class="text-3xl font-semibold mb-4">Slowdown Values</h3>

  <table>
    <thead>
      <tr>
        <th>Surface type</th>
        <th>Value</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Oil</td>
        <td id="slowdownOil" class="results">{result ? result.slowdown.oil.toFixed(2) : ''}</td>
      </tr>
      <tr>
        <td>Tarmac</td>
        <td id="slowdownTarmac1" class="results">{result ? result.slowdown.tarmac.toFixed(2) : ''}</td>
      </tr>
      <tr>
        <td>Tarmac 2</td>
        <td id="slowdownTarmac2" class="results">{result ? result.slowdown.tarmac2.toFixed(2) : ''}</td>
      </tr>
      <tr>
        <td>Grass</td>
        <td id="slowdownGrass" class="results">{result ? result.slowdown.grass.toFixed(2) : ''}</td>
      </tr>
      <tr>
        <td>Mud</td>
        <td id="slowdownMud" class="results">{result ? result.slowdown.mud.toFixed(2) : ''}</td>
      </tr>
      <tr>
        <td>Gravel</td>
        <td id="slowdownGravel1" class="results">{result ? result.slowdown.gravel.toFixed(2) : ''}</td>
      </tr>
      <tr>
        <td>Gravel 2</td>
        <td id="slowdownGravel2" class="results">{result ? result.slowdown.gravel2.toFixed(2) : ''}</td>
      </tr>
      <tr>
        <td>Sand</td>
        <td id="slowdownSand1" class="results">{result ? result.slowdown.sand.toFixed(2) : ''}</td>
      </tr>
      <tr>
        <td>Sand 2</td>
        <td id="slowdownSand2" class="results">{result ? result.slowdown.sand2.toFixed(2) : ''}</td>
      </tr>
      <tr>
        <td>Snow</td>
        <td id="slowdownSnow" class="results">{result ? result.slowdown.snow.toFixed(2) : ''}</td>
      </tr>
      <tr>
        <td>Ice</td>
        <td id="slowdownIce" class="results">{result ? result.slowdown.ice.toFixed(2) : ''}</td>
      </tr>
      <tr>
        <td>Kerb</td>
        <td id="slowdownKerb1" class="results">{result ? result.slowdown.kerb.toFixed(2) : ''}</td>
      </tr>
      <tr>
        <td>Kerb 2</td>
        <td id="slowdownKerb2" class="results">{result ? result.slowdown.kerb2.toFixed(2) : ''}</td>
      </tr>
      <tr>
        <td>Loose gravel</td>
        <td id="slowdownLooseGravel" class="results">{result ? result.slowdown.looseGravel.toFixed(2) : ''}</td>
      </tr>
    </tbody>
  </table>
</div>
