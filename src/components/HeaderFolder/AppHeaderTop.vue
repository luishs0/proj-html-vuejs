<script>
import { store } from "../../store";

export default {
    name: "AppHeaderTop",
    data() {
        return {
            store
        }
    }
}
</script>


<template>
    <div class="msg d-flex flex-wrap justify-content-center align-items-center">
        <span class="me-4 msg-s">Starts TOMORROW! Our biggest event of the year...</span>
        <span class="time me-4"> <i class="fa-regular fa-clock"></i> 00 : 00 : 00 : 00</span>
        <button class="btn btn-primary">Get Ticket</button>
    </div>
</template>


<style lang="scss" scoped>
@use "../../styles/partials/variables" as *;

.msg {
    background-color: $header-top-bg;

    color: $secondary-gray;

    padding: .3rem 0;
    font-size: .8rem;

    .time {
        font-size: 1rem;
        font-weight: 500;
        color: $primary-gray;
    }

    .btn {
        font-size: .8rem;
        padding: .2rem 1rem;
    }


}
</style>