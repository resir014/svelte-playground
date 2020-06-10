<script>
  export let isDrawerOpen = false;
</script>

<style>
  .content-root {
    display: flex;
    flex-direction: row;
    flex: 1 1 auto;
  }

  .main {
    display: flex;
    flex-direction: column;
    flex: 1 1 auto;
    transition: all 500ms cubic-bezier(0.15, 1, 0.3, 1);
  }

  .drawer {
    position: relative;
    width: 270px;
    margin-left: -270px;
    transition: all 500ms cubic-bezier(0.15, 1, 0.3, 1);
  }

  .drawer.is-drawer-open {
    margin-left: 0;
  }

  .main.is-drawer-open {
    margin-right: -270px;
  }

  @media (min-width: 992px) {
    .main.is-drawer-open {
      margin-right: 0;
    }
  }
</style>

<div class="content-root">
  <nav class="drawer bg-white px-6" class:is-drawer-open={!!isDrawerOpen}>drawer</nav>
  <main class="main" class:is-drawer-open={!!isDrawerOpen}>
    <slot />
  </main>
</div>
