<script>
import AppHeaderTop from "./HeaderFolder/AppHeaderTop.vue";
import { store } from "../store";

export default {
    name: "AppHeader",
    data() {
        return {
            store
        }
    },
    components: {
        AppHeaderTop,
    }
}

</script>


<template>
    <AppHeaderTop />
</template>


<style lang="scss" scoped>

</style>