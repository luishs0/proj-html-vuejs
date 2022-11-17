<script>
import AppHeaderTop from "./HeaderFolder/AppHeaderTop.vue";
import AppHeaderBottom from "./HeaderFolder/AppHeaderBottom.vue";
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
        AppHeaderBottom,
    },
}

</script>


<template>
    <AppHeaderTop />
    <AppHeaderBottom />
</template>


<style lang="scss" scoped>

</style>