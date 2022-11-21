<script>
import { store } from "../store";

export default {
    name: "AppFooter",
    data() {
        return {
            store
        }
    }
}
</script>


<template>

    <!-- FOOTER TOP -->
    <section class="footer-top">

        <img class="shape-top-left" src="../assets/img/artist-shape-color-paint-top-left.png" alt="">
        <img class="shape-bottom-right" src="../assets/img/artist-shape-color-paint-bottom-right.png" alt="">

        <div class="container d-flex flex-wrap justify-content-end align-items-center">
            <div class="start-text">
                <h3>Newsletter to get in touch</h3>
            </div>
            <div class="end-text d-flex flex-wrap">
                <input type="text" placeholder="Your e-mail">

                <div class="arrow d-flex align-items-center"><i class="fa-solid fa-arrow-right"></i></div>
            </div>
        </div>
    </section>
    <!-- /FOOTER TOP -->

</template>


<style lang="scss" scoped>
// FOOTER TOP-------------------------
.footer-top {
    background-color: #244186;
    color: white;
    overflow: hidden;
    position: relative;

    .shape-top-left {
        height: 100%;
        width: 15%;
        object-fit: cover;
        object-position: right;
        position: absolute;
        top: 0;
        left: 0;
    }

    .shape-bottom-right {
        position: absolute;
        top: 0;
        right: -15%;
    }

    .container {
        padding: 2.5rem 0;
        position: relative;
        z-index: 999;
    }

    .start-text {
        width: 30%;
    }

    .end-text {
        width: 60%;

        input {
            width: 80%;
            border: none;
            border-bottom: 2px solid white;
            background-color: #244186;
            padding: .5rem 0;

            &::placeholder {
                color: white;
            }
        }

        .arrow {

            font-size: .9rem;
            cursor: pointer;
            color: white;
            border-bottom: 2px solid white;
        }
    }

    @media screen and (max-width: 576px) {
        img {
            display: none;
        }

        .start-text {
            width: 100%;
            text-align: center;
        }

        .end-text {
            width: 100%;
            text-align: center;
            justify-content: center;
        }
    }
}

// FOOTER BOTTOM-----------------------------------
</style>