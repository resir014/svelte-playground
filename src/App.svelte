<script>
  import calculatePhysics from './utils/physics/calculatePhysics';

  import Result from './Result.svelte';
  import ReferenceTable from './ReferenceTable.svelte';
  import NumberField from './components/NumberField.svelte';
  import CheckboxField from './components/CheckboxField.svelte';
import SelectField from './components/SelectField.svelte';

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
  let calculateCount = 0;

  let result;

  function handleClick() {
    calculateCount += 1;
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

  $: {
    console.log({
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
    })
  }
</script>

<style>
  .root {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    min-height: 100vh;
  }

  .inner {
    display: grid;
    flex: 1 1 auto;
    grid-template-columns:
      [full-start] minmax(2rem, 1fr) [standard-start] 3.75rem [narrow-start] minmax(1rem, 67.5rem) [narrow-end] 3.75rem [standard-end] minmax(
        2rem,
        1fr
      )
      [full-end];
  }

  .column {
    grid-column: narrow;
  }
</style>

<div class="root">
  <div class="inner">

    <div class="column p-4">
      <h2 class="text-4xl font-semibold mt-8 mb-4">Step 1: Car Statistics</h2>

      <NumberField label="Power (in hp/bhp)" name="power" bind:value={power} />
      <NumberField label="Weight (in kg)" name="weight" bind:value={weight} />
      <NumberField label="Top Speed (in km/h)" name="topSpeed" bind:value={topSpeed} />

      <h2 class="text-4xl font-semibold mt-8 mb-4">Step 2: Downforce</h2>

      <NumberField label="Downforce Value" name="downforce" bind:value={downforce} />

      <ReferenceTable />

      <NumberField label="Drag Coefficient (0.27 - 0.5)" name="airResistance" bind:value={airResistance} />

      <h2 class="text-4xl font-semibold mt-8 mb-4">Step 3: Tyres</h2>

      <NumberField label="Front tyre width (mm)" name="tyreWidthFront" bind:value={tyreWidthFront} />
      <NumberField label="Rear tyre width (mm)" name="tyreWidthRear" bind:value={tyreWidthRear} />
      <SelectField name="tyreCompound" label="Drivetrain" bind:value={tyreCompound} options={tyreCompounds} />
      <CheckboxField name="isHistoric" label="Historic tyres" bind:checked={isHistoric} />
      <SelectField name="drivetrain" label="Drivetrain" bind:value={drivetrain} options={drivetrains} />

      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold mt-8 py-2 px-4 rounded w-full" on:click={handleClick}>
        Calculate
      </button>

      <Result {result} />
    </div>
  </div>
</div>
