<script>
import { store } from "../store";

export default {
    name: "AppFooter",
    data() {
        return {
            store
        }
    },
    props: {
        adress: Array,
        explore: Array,
        information: Array,
        fotoList: Array,
    },
    methods: {
        getImagePath: function (imgPath) {
            return new URL(imgPath, import.meta.url).href;
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

    <!-- FOOTER BOTTOM -->
    <section class="footer-bottom">
        <div class="container d-flex flex-wrap justify-content-around">
            <!-- Adress -->
            <div class="adress-column pe-4">
                <h4 class="mb-2"> Adress </h4>
                <ul class="d-flex flex-wrap justify-content-around">
                    <li v-for="(adressInfo, index) in adress" :key="index"> <a href="">{{ adressInfo }}</a> </li>
                    <li class="icons-footer">
                        <a href=""><i class="fa-brands fa-square-facebook"></i></a>
                        <a href=""><i class="fa-brands fa-twitter"></i></a>
                        <a href=""><i class="fa-brands fa-instagram"></i></a>
                        <a href=""><i class="fa-brands fa-linkedin"></i></a>
                    </li>
                </ul>

            </div>

            <!-- Explore -->
            <div class="explore-column d-flex flex-wrap justify-content-around">
                <h4>Explore</h4>
                <ul class="d-flex flex-wrap justify-content-around">
                    <li v-for="(exploreLink, index) in explore"> <a href="">{{ exploreLink }}</a> </li>
                </ul>
            </div>

            <!-- Information -->
            <div class="info-column d-flex flex-wrap justify-content-around">
                <h4>Information</h4>
                <ul class=" d-flex flex-wrap justify-content-around">
                    <li v-for="(infoLink, index) in information"> <a href="">{{ infoLink }}</a> </li>
                </ul>
            </div>

            <!-- Instagram -->
            <div class="instagram-column">
                <h4>Instagram <span class="orange">@maxcoach</span></h4>
                <div class="insta-imgs d-flex flex-wrap justify-content-between">
                    <div class="insta-img" v-for="(foto, index) in fotoList">
                        <img :src="getImagePath(`../assets/img${foto}`)" alt="">
                    </div>
                </div>

            </div>

        </div>

        <div class="last text-center mt-5">
            <i class="fa-regular fa-copyright"></i>
            2020 Maxcoach. All Rights Reserved
        </div>
    </section>
    <!-- /FOOTER BOTTOM -->

</template>


<style lang="scss" scoped>
// FOOTER TOP-------------------------
ul {
    margin-bottom: 0;
}

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
.footer-bottom {

    padding: 5rem 0 2rem 0;

    li {
        color: gray;
        margin-bottom: .2rem;

        a {
            text-decoration: none;
            color: gray;

            &:hover {
                text-decoration: underline;
            }

            i {
                font-size: 1rem;
                padding-right: 1rem;
                padding-top: .8rem;
            }
        }
    }

    .adress-column {
        width: 35%;

        h4 {
            font-size: .9rem;
            width: 100%;
        }

        li {
            font-size: .7rem;
            width: 100%;
        }
    }

    .info-column,
    .explore-column {
        width: 10%;

        h4 {
            font-size: .9rem;
            width: 100%;
        }

        li {
            font-size: .7rem;
            width: 100%;
        }
    }

    .instagram-column {
        width: 30%;

        h4 {
            font-size: .9rem;
        }

        .orange {
            color: #ef6f31;
            font-weight: 300;
        }
    }

    ul {
        padding: 0;
    }

    li {

        list-style-type: none;
        padding: 0;
    }

    .insta-img {
        width: calc(100% / 3 - .2rem);

        img {
            width: 100%;
        }
    }

    .last {
        color: rgba(155, 155, 155, .8);
        font-size: .6rem;
    }

    @media screen and (max-width: 768px) {
        .adress-column {
            width: 100%;
            margin-bottom: 1.5rem;
        }

        .info-column,
        .explore-column {
            width: 50%;
            margin-bottom: 1.5rem;
        }

        .instagram-column {
            width: 100%;
            margin-bottom: 1.5rem;

        }
    }
}
</style>