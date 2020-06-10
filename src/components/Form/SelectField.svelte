<script>
  export let name;
  export let label;
  export let options;
  export let value;
</script>

<div class="mb-2">
  <label class="text-sm mb-2 text-gray-600" for={name}>{label}</label>
  <select
    class="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-md py-2 px-4 block w-full
    leading-normal"
    bind:value
    {name}
    id={name}>
    {#each options as option}
      <option value={option.value}>{option.name}</option>
    {/each}
  </select>
</div>
