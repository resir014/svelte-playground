<script>
  import calculatePhysics from './utils/calculatePhysics';

  import Result from './Result.svelte';
  import ReferenceTable from './ReferenceTable.svelte';

  const tyreCompounds = [
    { value: 1, name: 'Economy' },
    { value: 2, name: 'Comfort' },
    { value: 3, name: 'Road' },
    { value: 4, name: 'Sport' },
    { value: 5, name: 'Super' },
    { value: 6, name: 'Semi-Slicks' },
    { value: 7, name: 'Racing Slicks' },
  ];

  const drivetrains = [
    { value: 1, name: 'Front-wheel drive' },
    { value: 2, name: 'Rear-wheel drive' },
    { value: 3, name: '4-wheel drive' },
  ];

  let power = 0;
  let weight = 0;
  let topSpeed = 0;

  let downforce = 0;
  let airResistance = 0;

  let tyreWidthFront = 0;
  let tyreWidthRear = 0;
  let tyreCompound;
  let drivetrain;

  let isHistoric = false;

  let result;

  function handleClick() {
    result = calculatePhysics({
      power,
      weight,
      topSpeed,
      downforce,
      airResistance,
      tyreWidthFront,
      tyreWidthRear,
      tyreCompound,
      drivetrain,
      isHistoric,
    });
  }
</script>

<style>
  .form-block {
    margin-bottom: 0.5rem;
  }
</style>

<h2>Step 1: Car Statistics</h2>

<div class="form-block">
  <label for="power">Power (in hp/bhp)</label>
  <input type="number" bind:value={power} id="power" name="power" />
</div>

<div class="form-block">
  <label for="weight">Weight</label>
  <input type="number" bind:value={weight} id="weight" name="weight" />
</div>

<div class="form-block">
  <label for="topSpeed">Top Speed</label>
  <input type="number" bind:value={topSpeed} id="topSpeed" name="topSpeed" />
</div>

<h2>Step 2: Downforce</h2>

<div class="form-block">
  <label for="downforce">Downforce</label>
  <input type="number" bind:value={downforce} id="downforce" name="downforce" />
</div>

<ReferenceTable />

<div class="form-block">
  <label for="airResistance">Drag Coefficient</label>
  <input type="number" bind:value={airResistance} id="airResistance" name="airResistance" />
</div>

<h2>Step 3: Tyres</h2>

<div class="form-block">
  <label for="tyreWidthFront">Front tyre width (mm)</label>
  <input type="number" bind:value={tyreWidthFront} id="tyreWidthFront" name="tyreWidthFront" />
</div>

<div class="form-block">
  <label for="tyreWidthRear">Front tyre width (mm)</label>
  <input type="number" bind:value={tyreWidthRear} id="tyreWidthRear" name="tyreWidthRear" />
</div>

<div class="form-block">
  <label for="tyreCompound">Tyre Compound</label>
  <select bind:value={tyreCompound} name="tyreCompound" id="tyreCompound">
    {#each tyreCompounds as compound}
      <option value={compound.value}>{compound.name}</option>
    {/each}
  </select>
</div>

<div class="form-block">
  <label for="isHistoric">
    <input type="checkbox" bind:value={isHistoric} id="isHistoric" name="isHistoric" />
    <span>Historic tyres</span>
  </label>
</div>

<div class="form-block">
  <label for="drivetrain">Drivetrain</label>
  <select bind:value={drivetrain} name="drivetrain" id="drivetrain">
    {#each drivetrains as drivetrain}
      <option value={drivetrain.value}>{drivetrain.name}</option>
    {/each}
  </select>
</div>

<button on:click={handleClick}>Calculate</button>

<Result result={result} />
