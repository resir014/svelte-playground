<script>
  export let name;
  export let label;
  export let value;
</script>

<style>
  .form-block {
    margin-bottom: 0.5rem;
  }
</style>

<div class="form-block">
  <label for={name}>{label}</label>
  <input type="number" bind:value={value} id={name} name={name} />
</div>
