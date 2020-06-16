<script>
  // @ts-check
  import calculatePhysics from '../../utils/physics/calculatePhysics';

  import Page from '../../components/Layout/Page.svelte';
  import Card from '../../components/Layout/Card.svelte';
  import NumberField from '../../components/Form/NumberField.svelte';
  import CheckboxField from '../../components/Form/CheckboxField.svelte';
  import SelectField from '../../components/Form/SelectField.svelte';

  import Result from './components/Result.svelte';
  import ReferenceTable from './components/ReferenceTable.svelte';

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

  /** @type {number | undefined} */
  let power = undefined;
  /** @type {number | undefined} */
  let weight = undefined;
  /** @type {number | undefined} */
  let topSpeed = undefined;

  /** @type {number | undefined} */
  let downforce = undefined;
  /** @type {number | undefined} */
  let airResistance = undefined;

  /** @type {number | undefined} */
  let tyreWidthFront = undefined;
  /** @type {number | undefined} */
  let tyreWidthRear = undefined;
  /** @type {number | undefined} */
  let tyreCompound = undefined;
  /** @type {number | undefined} */
  let drivetrain = undefined;

  /** @type {boolean} */
  let isHistoric = false;

  let result;

  function handleClick() {
    if (
      power &&
      weight &&
      topSpeed &&
      downforce &&
      airResistance &&
      tyreWidthFront &&
      tyreWidthRear &&
      tyreCompound &&
      drivetrain
    ) {
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
    });
  }
</script>

<style>
  .column {
    width: 100%;
    max-width: 976px;
    margin-left: auto;
    margin-right: auto;
  }

  .form-grid {
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 24px;
    margin-top: 48px;
    margin-bottom: 24px;
  }
</style>

<Page>
  <div class="column">

    <div class="mt-6">
      <h2 class="text-3xl font-semibold">Physics Calculator</h2>
      <p class="text-lg text-gray-600">
        Use this simple tool to generate a realistic, scaled-down attributes for your GeneRally car files.
      </p>
      <p class="text-lg text-gray-600">Inspired by Haruna's Realistic Car Physics.</p>
    </div>

    <div class="form-grid">
      <Card>
        <h2 class="text-2xl font-semibold mt-0 mb-4">Step 1: Car Statistics</h2>

        <NumberField label="Power (in hp/bhp)" name="power" bind:value={power} />
        <NumberField label="Weight (in kg)" name="weight" bind:value={weight} />
        <NumberField label="Top Speed (in km/h)" name="topSpeed" bind:value={topSpeed} />
      </Card>

      <Card>
        <h2 class="text-2xl font-semibold mt-0 mb-4">Step 2: Downforce</h2>

        <NumberField label="Downforce Value" name="downforce" bind:value={downforce} />

        <ReferenceTable />

        <NumberField label="Drag Coefficient (0.27 - 0.5)" name="airResistance" bind:value={airResistance} />
      </Card>

      <Card>
        <h2 class="text-2xl font-semibold mt-0 mb-4">Step 3: Tyres</h2>

        <NumberField label="Front tyre width (mm)" name="tyreWidthFront" bind:value={tyreWidthFront} />
        <NumberField label="Rear tyre width (mm)" name="tyreWidthRear" bind:value={tyreWidthRear} />
        <SelectField name="tyreCompound" label="Drivetrain" bind:value={tyreCompound} options={tyreCompounds} />
        <CheckboxField name="isHistoric" label="Historic tyres" bind:checked={isHistoric} />
        <SelectField name="drivetrain" label="Drivetrain" bind:value={drivetrain} options={drivetrains} />
      </Card>
    </div>

    <button
      class="bg-blue-500 hover:bg-blue-700 text-white font-bold mt-8 py-2 px-4 rounded w-full"
      on:click={handleClick}>
      Calculate
    </button>

    <Result {result} />
  </div>
</Page>
