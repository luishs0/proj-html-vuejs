<script>
import { store } from '../../store';

export default {
    name: 'AppHeaderBottom',
    data() {
        return {
            store
        }
    }
}
</script>


<template>
    <div class="ms_container">
        <div class="ms_container-banner d-flex justify-content-center">

            <img class="artist-hero" src="../../assets/img/artist-hero-image-04.jpg" alt="">
            <img class="artist-shape-5" src="../../assets/img/artist-shape-05.png" alt="">
            <img class="artist-shape-1" src="../../assets/img/artist-shape-01.png" alt="">
            <img class="artist-shape-2" src="../../assets/img/artist-shape-02.png" alt="">
            <img class="artist-shape-3" src="../../assets/img/artist-shape-03.png" alt="">
            <img class="artist-hero-1" src="../../assets/img/artist-hero-image-01.jpg" alt="">
            <img class="artist-hero-2" src="../../assets/img/artist-hero-image-02.jpg" alt="">
            <img class="artist-hero-3" src="../../assets/img/artist-hero-image-03.png" alt="">
            <img class="artist-shape-4" src="../../assets/img/artist-shape-04.png" alt="">

            <div class="banner-text text-center">
                <h2>Hello, Im Martin</h2>
                <h1 class="mb-4">Artist Coaching And Mentoring Might Be for You</h1>
                <button class="btn btn-primary">Get started today</button>
            </div>

        </div>
    </div>
</template>



<style lang="scss" scoped>
@use "../../styles/partials/variables" as *;
@use "node_modules/@fontsource/imperial-script/index.css";

.ms_container {
    background-color: $banner-color;
}

.ms_container-banner {
    max-width: 1500px;
    margin: auto;
    position: relative;
    padding: 2rem;
    overflow: hidden;

    max-height: 600px;

    .banner-text {
        width: 30%;
        padding: 12rem 0;


        h2 {
            font-family: 'imperial-script', 'sans-serif';
            font-size: 1.2rem;
            color: #69c5f1;
        }

        h1 {
            font-size: 1.5rem;
        }

        button {
            font-size: .8rem;
            padding: .5rem 1.5rem;
        }
    }
}

.artist-shape-1 {
    width: 45%;

    position: absolute;
    top: -5%;
    left: 53%;
    z-index: 70;
}

.artist-shape-2 {
    width: 50%;

    position: absolute;
    top: 0;
    left: 0;
    z-index: 0;
}

.artist-shape-3 {
    width: 20%;

    position: absolute;
    top: 20%;
    left: 5%;
    z-index: 0;
}

.artist-shape-4 {
    width: 10%;

    position: absolute;
    top: 10%;
    right: 15%;
}

.artist-shape-5 {
    width: 30%;

    position: absolute;
    top: 50%;
    left: 65%;
    z-index: 80;
}

.artist-hero-1 {
    width: 13%;

    position: absolute;
    top: 50%;
    left: 7%;
    z-index: 80;
}

.artist-hero-2 {
    width: 19%;

    position: absolute;
    top: 8%;
    left: 15%;
    z-index: 60;
}

.artist-hero-3 {
    width: 15%;

    position: absolute;
    top: 52%;
    left: 28%;
    z-index: 50;
}

.artist-hero {
    width: 20%;

    position: absolute;
    top: 35%;
    left: 70%;
    z-index: 100;
}

@media screen and (max-width: 768px) {

    .artist-hero,
    .artist-hero-1,
    .artist-hero-2,
    .artist-hero-3,
    .artist-shape-3,
    .artist-shape-5,
    .artist-shape-1,
    .artist-shape-4 {
        display: none;
    }

    .artist-shape-2 {
        width: 100%;
    }

    .ms_container-banner {
        .banner-text {
            width: 100%;
            padding: 8rem 0;
        }
    }
}
</style>