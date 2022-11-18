<script>
export default {
    name: "AppMainTop",
    data() {

    },
}
</script>


<template>
    <!-- SECTION 1 -->
    <section>
        <div class="ms_general-container">
            <div class="container">

                <div class="section-1">
                    <img class="shape-turn" src="../../assets/img/artist-shape-01-turn.png" alt="">
                    <img class="max-coach-shape" src="../../assets/img/maxcoach-shape-14.png" alt="">
                    <img class="max-coach-shape-13" src="../../assets/img/maxcoach-shape-13.png" alt="">

                    <div class="row section-1-text d-flex justify-content-center">
                        <div class="text-center col-6">
                            <h3>Artist Coaching</h3>
                            <h2>I understand what it takes to create. I can help you with</h2>
                        </div>
                    </div>


                    <div class="row mt-5">
                        <div class="col-sm-6 col-md-3">
                            <div class="ms_card-img mb-3">
                                <img src="../../assets/img/artist-box-image-01.png" alt="">
                            </div>
                            <div class="ms_card-text">
                                <h4>Online Coures</h4>
                                <p>Online art coaching now offers you a very powerfull way to redesign your artist mind
                                </p>
                            </div>
                        </div>
                        <div class="col-sm-6 col-md-3">
                            <div class="ms_card-img mb-3">
                                <img src="../../assets/img/artist-box-image-02.png" alt="">
                            </div>
                            <div class="ms_card-text">
                                <h4>One to one</h4>
                                <p>Getting the necessary clarity about the current state to help you improve your
                                    ability
                                </p>
                            </div>
                        </div>
                        <div class="col-sm-6 col-md-3">
                            <div class="ms_card-img mb-3">
                                <img src="../../assets/img/artist-box-image-03.png" alt="">
                            </div>
                            <div class="ms_card-text">
                                <h4>Anywhere</h4>
                                <p>Access to valuable and portable program wich allow you to set up and live anywhere
                                    you
                                    want
                                </p>
                            </div>
                        </div>
                        <div class="col-sm-6 col-md-3">
                            <div class="ms_card-img mb-3">
                                <img src="../../assets/img/artist-box-image-04.png" alt="">
                            </div>
                            <div class="ms_card-text">
                                <h4>On time</h4>
                                <p>Punctuality is our top priority because is an essential criteria to asses a program
                                    quality
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>
    <!-- /SECTION 1 -->


    <!-- SECTION 2 -->
    <section>
        <div class="container">
            <div class="row">
                <div class="col-12 col-md-5 text-center">
                    <img class="quote mb-2" src="../../assets/img/artist-quote-icon.png" alt="">
                    <h2 class="text-center">I coach and mentor visual artists, like you, to Create Like You Mean It
                    </h2>
                    <h4 class="ms_blue">Martin Garrix</h4>
                </div>
                <div class="col-12 col-md-7">
                    <p>As a coach and mentor, my ultimate goal is to motivate visual artists towards inspired action. I
                        help you get you back on track to being the productive, creative, meaningfull and authentic
                        artist you truly want to be. I support artists in craffting and living a creative life as well
                        as feeling good about themselves and their art. </p>
                    <p>As an artist and an educator for nearly 30 years, i understand what it takes to create.</p>
                    <button class="btn btn-primary"> Get started today </button>
                </div>
            </div>
        </div>
    </section>

</template>


<style lang="scss" scoped>
section {
    margin: 6rem 0;
}

// SECTION 1 --------------------------
.ms_general-container {
    position: relative;
    max-width: 1500px;
    margin: auto;
    overflow: hidden;
}

.section-1 {
    max-width: 1500px;

    .shape-turn {
        position: absolute;
        width: 20rem;
        top: 5%;
        left: 1%;
    }

    .max-coach-shape {
        width: 100%;
        position: absolute;
        top: 5%;
        left: 0;

    }

    .max-coach-shape-13 {
        position: absolute;
        width: 10rem;
        top: 20%;
        right: 0;
    }
}


.container {
    overflow: hidden;
}

.section-1-text {
    margin: 3rem auto;
    margin-bottom: 5rem;
    overflow: hidden;

    h3 {
        font-family: 'imperial-script', 'sans-serif';
        font-size: 1rem;
        color: #69c5f1;
    }

    h2 {
        font-size: 1.2rem;
    }
}

.row {
    img {
        height: 5rem;
    }

    h4 {
        font-size: 1rem;
        font-weight: 300;
    }

    p {
        font-size: .9rem;
    }
}

// //SECTION 1---------------------------

// SECTION 2-------------------
.btn {
    font-size: .8rem;
    padding: .5rem 1.5rem;
}

.row .quote {
    height: 1.8rem;
}

.ms_blue {
    font-family: 'imperial-script', 'sans-serif';
    font-size: 1rem;
    color: #69c5f1;
}
</style>