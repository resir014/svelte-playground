<script>
  /** @type {import('./utils/calculatePhysics').CalculationResult} */
  export let result;
</script>

<style>
.results {
  text-align: right;
}
</style>

<h2>Results</h2>

<h3>Performance Values</h3>

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

<h3>Grip Values</h3>

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
      <td id="gripOil" class="results" />
    </tr>
    <tr>
      <td>Tarmac</td>
      <td id="gripTarmac1" class="results" />
    </tr>
    <tr>
      <td>Tarmac 2</td>
      <td id="gripTarmac2" class="results" />
    </tr>
    <tr>
      <td>Grass</td>
      <td id="gripGrass" class="results" />
    </tr>
    <tr>
      <td>Mud</td>
      <td id="gripMud" class="results" />
    </tr>
    <tr>
      <td>Gravel</td>
      <td id="gripGravel1" class="results" />
    </tr>
    <tr>
      <td>Gravel 2</td>
      <td id="gripGravel2" class="results" />
    </tr>
    <tr>
      <td>Sand</td>
      <td id="gripSand1" class="results" />
    </tr>
    <tr>
      <td>Sand 2</td>
      <td id="gripSand2" class="results" />
    </tr>
    <tr>
      <td>Snow</td>
      <td id="gripSnow" class="results" />
    </tr>
    <tr>
      <td>Ice</td>
      <td id="gripIce" class="results" />
    </tr>
    <tr>
      <td>Kerb</td>
      <td id="gripKerb1" class="results" />
    </tr>
    <tr>
      <td>Kerb 2</td>
      <td id="gripKerb2" class="results" />
    </tr>
    <tr>
      <td>Loose gravel</td>
      <td id="gripLooseGravel" class="results" />
    </tr>
  </tbody>
</table>

<h3>Slowdown Values</h3>

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
      <td id="slowdownOil" class="results" />
    </tr>
    <tr>
      <td>Tarmac</td>
      <td id="slowdownTarmac1" class="results" />
    </tr>
    <tr>
      <td>Tarmac 2</td>
      <td id="slowdownTarmac2" class="results" />
    </tr>
    <tr>
      <td>Grass</td>
      <td id="slowdownGrass" class="results" />
    </tr>
    <tr>
      <td>Mud</td>
      <td id="slowdownMud" class="results" />
    </tr>
    <tr>
      <td>Gravel</td>
      <td id="slowdownGravel1" class="results" />
    </tr>
    <tr>
      <td>Gravel 2</td>
      <td id="slowdownGravel2" class="results" />
    </tr>
    <tr>
      <td>Sand</td>
      <td id="slowdownSand1" class="results" />
    </tr>
    <tr>
      <td>Sand 2</td>
      <td id="slowdownSand2" class="results" />
    </tr>
    <tr>
      <td>Snow</td>
      <td id="slowdownSnow" class="results" />
    </tr>
    <tr>
      <td>Ice</td>
      <td id="slowdownIce" class="results" />
    </tr>
    <tr>
      <td>Kerb</td>
      <td id="slowdownKerb1" class="results" />
    </tr>
    <tr>
      <td>Kerb 2</td>
      <td id="slowdownKerb2" class="results" />
    </tr>
    <tr>
      <td>Loose gravel</td>
      <td id="slowdownLooseGravel" class="results" />
    </tr>
  </tbody>
</table>
