<script>
  let isReferenceTableVisible = false;

  function handleClick() {
    isReferenceTableVisible = !isReferenceTableVisible;
  }
</script>

<style>
  .wrapper {
    margin: 1rem 0;
  }

  .is-hidden {
    display: none;
  }
</style>

<div class="wrapper">
  <button on:click={handleClick}>{isReferenceTableVisible ? 'Hide' : 'Show'} reference table</button>

  <table class="table {!isReferenceTableVisible ? 'is-hidden' : ''}">
    <thead>
      <tr>
        <th>Downforce</th>
        <th>Type of car</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>&gt;30</td>
        <td>Most mass-produced production cars, also most historic race cars without wings.</td>
      </tr>
      <tr>
        <td>25 - 100</td>
        <td>Low tech touring and GT race or tuned cars.</td>
      </tr>
      <tr>
        <td>100 - 190</td>
        <td>Low tech open-wheel cars or medium tech touring or GT cars.</td>
      </tr>
      <tr>
        <td>180 - 250</td>
        <td>High tech GT and touring cars or medium tech open-wheel cars.</td>
      </tr>
      <tr>
        <td>250+</td>
        <td>
          Le Mans Prototypes are at the lower end. Most of the very fast open-wheel cars (anything roughly equal to or
          faster than a Formula Renault 3.5) are probably good for 300+. Consider 400 the upper limit for anything.
        </td>
      </tr>
    </tbody>
  </table>
</div>
