<script>
import { store } from "../../store";

export default {
    name: "AppHeaderTop",
    data() {
        return {
            store
        }
    },
}
</script>


<template>
    <!-- Message up -->
    <div class="msg d-flex flex-wrap justify-content-center align-items-center">
        <span class="me-4 msg-s">Starts TOMORROW! Our biggest event of the year...</span>
        <span class="time me-4"> <i class="fa-regular fa-clock"></i> 00 : 00 : 00 : 00</span>
        <button class="btn btn-primary">Get Ticket</button>
    </div>
    <!-- /Message up -->

    <!-- Navbar -->
    <div class="container">
        <div class="ms_navbar d-flex justify-content-between align-items-center">

            <div class="logo">
                <a href=""><img src="../../assets/img/dark-logo.png" alt=""></a>
            </div>

            <div class="links">
                <ul class="d-flex align-items-center justify-content-center">
                    <li v-for="(link, index) in this.store.headerLinks" :key="index">
                        <a href=""> {{ link }} <i class="fa-solid fa-chevron-down"></i> </a>
                    </li>
                </ul>
            </div>

            <div class="social">
                <a href=""><i class="fa-brands fa-twitter"></i></a>
                <a href=""><i class="fa-brands fa-facebook-f"></i></a>
                <a href=""><i class="fa-brands fa-instagram"></i></a>
                <a href=""><i class="fa-brands fa-linkedin"></i></a>

            </div>

            <div class="menu-hamburguer">
                <i class="fa-solid fa-bars"></i>
            </div>

        </div>
    </div>
    <!-- /Navbar -->
</template>


<style lang="scss" scoped>
@use "../../styles/partials/variables" as *;

.menu-hamburguer {
    display: none;
}

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

.ms_navbar {
    padding: 1.3rem 0;

    .logo {

        img {
            width: 7rem;
        }
    }

    .links {
        display: flex;
        align-items: center;

        vertical-align: middle;

        ul {
            list-style-type: none;
            vertical-align: middle;
            margin: .3rem;

            li {
                a {
                    text-decoration: none;
                    color: $primary-gray;
                    font-size: .8rem;

                    i {
                        font-size: .5rem;
                        vertical-align: middle;
                    }
                }

                &:not(:last-child) {
                    margin-right: 1.5rem;
                }
            }


        }

    }

    .social {
        a {
            text-decoration: none;
            color: $secondary-gray;
        }

        & a:not(:last-child) {
            margin-right: 1rem;
        }
    }
}

@media screen and (max-width: 768px) {

    .ms_navbar {
        .links {
            display: none;
        }

        .social {
            display: none;
        }
    }


    .menu-hamburguer {
        display: block;
    }
}
</style>