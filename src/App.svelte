<script>
  import Content from './components/Layout/Content.svelte';
  import Root from './components/Layout/Root.svelte';
  import Masthead from './components/Layout/Masthead.svelte';
  import PhysicsCalculator from './modules/physics-calculator/PhysicsCalculator.svelte';

  let isDrawerOpen = false;

  /**
   * @param {any} event
   */
  function handleDrawerToggle(event) {
    isDrawerOpen = event.detail.isDrawerOpen
  }
</script>

<style>
  :global(:root) {
    --grid-template: [full-start] minmax(2rem,1fr) [outer-start] 2.5rem [inner-start] minmax(1rem, 1140px) [inner-end] 2.5rem [outer-end]
      minmax(2rem,1fr) [full-end];
  }
</style>

<Root>
  <Masthead on:toggle-drawer={handleDrawerToggle} />
  <Content isDrawerOpen={isDrawerOpen}>
    <PhysicsCalculator />
  </Content>
</Root>
