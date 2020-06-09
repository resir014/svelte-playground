<script>
  export let name;
  export let label;
  export let checked = false;
</script>

<div class="mb-2">
  <label for={name}>
    <input type="checkbox" value={name} bind:checked={checked} id={name} name={name} />
    <span class="text-sm mb-2 text-gray-600">{label}</span>
  </label>
</div>
