<script>
import AppHeader from "./components/AppHeader.vue";
import AppMain from "./components/AppMain.vue";
import { store } from "./store";

export default {
  data() {
    return {
      store,
    }
  },
  components: {
    AppHeader,
    AppMain
  },
  created() {
    // Funzioni inmediate
  },
  methods: {
    // Metods
  }
}

</script>


<template>
  <header>
    <AppHeader />
  </header>

  <main>
    <AppMain />
  </main>

  <footer>

  </footer>
</template>


<style lang="scss">
@use "./styles/general.scss" as *;
@use "./styles/partials/variables" as *;
</style>