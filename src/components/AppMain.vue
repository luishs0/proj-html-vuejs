<script>
import AppMainTop from "./MainFolder/AppMainTop.vue";
import AppMainBottom from "./MainFolder/AppMainBottom.vue";
import { store } from "../store";

export default {
    name: "AppMain",
    data() {
        return {
            store
        }
    },
    components: {
        AppMainTop,
        AppMainBottom,
    }
}
</script>


<template>

    <AppMainTop />

    <AppMainBottom />

</template>


<style lang="scss" scoped>

</style>