<script>
import { store } from "../../store";

export default {
    name: "AppMainBottom",
    data() {
        return {
            store
        }
    },
    methods: {
        getImagePath: function (imgPath) {
            return new URL(imgPath, import.meta.url).href
        }
    }
}
</script>


<template>
    <!-- SECTION 5 -->
    <section class="section-5">

        <img class="artist-shape" src="../../assets/img/artist-shape-01-turn.png" alt="">

        <div class="ms_container mt-5 mb-5">

            <h3 class="text-center ms_blue mt-5">Artist Coaching</h3>
            <h2 class="text-center mb-5">Latest Online Courses</h2>

            <div class="row mb-5 g-3">
                <div v-for="(course, index) in this.store.coursesArray" :key="index"
                    class="col-12 col-sm-6 col-md-3 d-flex align-items-stretch mb-2">
                    <div class="ms_courses-card d-flex flex-column justify-content-between">
                        <div class="courses-card-img">
                            <img :src="getImagePath(`../../assets/img${course.img}`)" alt="">
                        </div>

                        <div class="course-price">
                            ${{ course.price }}.00
                        </div>
                        <div class="course-name">
                            {{ course.courseName }}
                        </div>
                        <div class="lessons-students">
                            <span class="me-3"> <i class="fa-regular fa-file-zipper"></i> {{ course.lessons }} Lessons
                            </span>
                            <span> <i class="fa-regular fa-user"></i> {{ course.students }} Students</span>
                        </div>
                    </div>
                </div>
            </div>

            <div class="button-courses text-center">
                <button class="btn btn-primary">View all courses <i class="fa-solid fa-arrow-right"></i></button>
            </div>


        </div>
    </section>

    <!-- /SECTION 5 -->


    <!-- SECTION 6 -->
    <section class="section-6">

        <img class="bg-1" src="../../assets/img/maxcoach-shape-03.png" alt="">
        <div class="bg-2"><i class="fa-regular fa-circle"></i></div>
        <img class="bg-3" src="../../assets/img/maxcoach-shape-05.png" alt="">

        <div class="container">

            <h3 class="ms_blue text-center pt-5">Articles and Tips</h3>
            <h2 class="text-center pb-5">Latest from the blog</h2>

            <div class="cards-6 d-flex flex-wrap justify-content-around align-items-center">
                <div class="ms_card-1">
                    <div class="card-1-img mb-3">
                        <img src="../../assets/img/120084500_197897808368764_8114555493043279565_n.jpg" alt="">
                    </div>
                    <div class="card-1-text">
                        <div class="section-6-roll mb-1">
                            ARTIST
                        </div>
                        <div class="title-6 mb-1">
                            Brush Strokes Energize Trees in Paintings
                        </div>
                        <div class="date-views">
                            <span class="me-1"> <i class="fa-regular fa-calendar"></i> May 15, 2020
                            </span>
                            <span> <i class="fa-solid fa-eye"></i> 688 Views</span>
                        </div>
                    </div>
                </div>
                <div class="ms_card-2 mb-5">
                    <div class="card-2-img">
                        <div class="black"></div>
                        <img src="../../assets/img/artist-blog-02-500x680.jpg" alt="">
                    </div>
                    <div class="card-2-text">
                        <div class="section-6-roll special">
                            ARTIST
                        </div>
                        <div class="title-6 special">
                            Connection Between Self-Portraits and Identity
                        </div>
                        <div class="date-views special">
                            <span class="me-1"> <i class="fa-regular fa-calendar"></i> May 15, 2020
                            </span>
                            <span> <i class="fa-solid fa-eye"></i> 397 Views</span>
                        </div>
                    </div>
                </div>
                <div class="ms_card-3">
                    <div class="card-1-img mb-3">
                        <img src="../../assets/img/artist-blog-01-480x356.jpg" alt="">
                    </div>
                    <div class="card-3-text">
                        <div class="section-6-roll mb-1">
                            ARTIST
                        </div>
                        <div class="title-6 mb-1">
                            Pocket-Sized Notebooks Hold Miniature Paintings
                        </div>
                        <div class="date-views">
                            <span class="me-1"> <i class="fa-regular fa-calendar"></i> May 15, 2020
                            </span>
                            <span> <i class="fa-solid fa-eye"></i> 603 Views</span>
                        </div>
                    </div>
                </div>
            </div>

            <div class="call-to-action-6 text-center pb-4">
                <span class="cta-1">Get into details now? </span>
                <span class="cta-2">View all posts <i class="fa-solid fa-arrow-right"></i></span>
            </div>

        </div>
    </section>
    <!-- /SECTION 6 -->

    <!-- SECTION 7 -->
    <section class="section-7">

        <img class="bg-7-1" src="../../assets/img/artist-shape-02-turn.png" alt="">
        <img class="bg-7-2" src="../../assets/img/maxcoach-shape-13.png" alt="">

        <div class="container ms_container-7">

            <h3 class="ms_blue text-center mt-5">Upcoming Events</h3>
            <h2 class="text-center mb-5">Lets Work Together</h2>


            <div class="row g-5 mb-5">
                <div class="col-md-3 col-sm-6 col-12">
                    <div class="col-container">
                        <img src="../../assets/img/artist-event-04-250x300.jpg" alt="">
                    </div>
                </div>
                <div class="col-md-3 col-sm-6 col-12 d-flex align-items-center">
                    <div class="col-container">
                        <div class="date-7">
                            NOV 22, 2020
                        </div>
                        <div class="title-7">
                            STORYTELLING WORKSHOP
                        </div>
                        <div class="place-7">
                            <i class="fa-solid fa-location-dot"></i> TEXAS, US
                        </div>
                    </div>
                </div>
                <div class="col-md-3 col-sm-6 col-12">
                    <div class="col-container">
                        <img src="../../assets/img/artist-event-03-250x300.jpg" alt="">
                    </div>
                </div>
                <div class="col-md-3 col-sm-6 col-12 d-flex align-items-center">
                    <div class="col-container">
                        <div class="date-7">
                            NOV 22, 2020
                        </div>
                        <div class="title-7">
                            STORYTELLING WORKSHOP
                        </div>
                        <div class="place-7">
                            <i class="fa-solid fa-location-dot"></i> TEXAS, US
                        </div>
                    </div>
                </div>
                <div class="col-md-3 col-sm-6 col-12 d-flex align-items-center">
                    <div class="col-container text-end">
                        <div class="date-7">
                            NOV 22, 2020
                        </div>
                        <div class="title-7">
                            STORYTELLING WORKSHOP
                        </div>
                        <div class="place-7">
                            <i class="fa-solid fa-location-dot"></i> TEXAS, US
                        </div>
                    </div>
                </div>
                <div class="col-md-3 col-sm-6 col-12">
                    <div class="col-container">
                        <img src="../../assets/img/artist-event-02-250x300.jpg" alt="">
                    </div>
                </div>
                <div class="col-md-3 col-sm-6 col-12 d-flex align-items-center">
                    <div class="col-container text-end">
                        <div class="date-7">
                            NOV 22, 2020
                        </div>
                        <div class="title-7">
                            STORYTELLING WORKSHOP
                        </div>
                        <div class="place-7">
                            <i class="fa-solid fa-location-dot"></i> TEXAS, US
                        </div>
                    </div>
                </div>
                <div class="col-md-3 col-sm-6 col-12">
                    <div class="col-container">
                        <img src="../../assets/img/artist-event-01-250x300.jpg" alt="">
                    </div>
                </div>
            </div>

        </div>
    </section>
    <!-- /SECTION 7 -->
</template>


<style lang="scss" scoped>
h2 {
    font-size: 1.2rem;
}

// SECTION 5-----------------------------------------------------
.ms_container {
    width: 90%;
    margin: auto;
    max-width: 1400px;
}

.ms_blue {
    font-family: "Imperial Script", cursive;
    font-size: 1.7rem;
    color: #69c5f1;
}

.section-5 {
    position: relative;
    overflow: hidden;


    img {
        width: 100%;
        cursor: pointer;

    }

    .row {
        width: 90%;
        margin: auto;
    }

    .ms_courses-card {
        width: 80%;
        margin: auto;
        height: 100%;

        img {
            position: relative;
            z-index: 999;
        }
    }

    .course-price {
        color: #ef6f31;
        font-size: .8rem;
        font-weight: 600;
        padding-left: .2rem;
        margin-top: .7rem;
        margin-bottom: .5rem;
    }

    .course-name {
        font-size: .9rem;
        font-weight: 600;
        width: 80%;
        padding-left: .2rem;
        margin-bottom: .5rem;
        cursor: pointer;

        &:hover {
            text-decoration: underline;
        }
    }

    .lessons-students {
        padding-left: .2rem;
        font-size: .7rem;
        color: gray;
    }

    .btn {
        font-size: .8rem;
        padding: .5rem 1.5rem;
    }

    .artist-shape {
        width: 30%;

        position: absolute;
        top: 10%;
        right: -10%;

        z-index: 0;
    }
}

// SECTION 6----------------------------------------------------------
.section-6 {
    position: relative;
    overflow: hidden;
}

.bg-1 {
    width: 100%;
    position: absolute;
    top: 30%;
    left: 0;
}

.bg-2 {
    position: absolute;
    top: 20%;
    left: 10%;
    font-size: 5rem;
    color: #ecc5ab;
}

.bg-3 {
    position: absolute;
    top: 17%;
    left: 32%;

    width: 10%;
}

.section-6 {
    background-color: #f5f7fa;

    .cards-6 {

        .ms_card-1,
        .ms_card-3 {
            width: 20%;
            background-color: white;
            position: relative;
            z-index: 999;

            img {
                width: 100%;
                height: 10rem;
                object-fit: cover;
            }
        }

        .ms_card-3 {
            position: relative;
            bottom: 5rem;
        }

        .card-1-text,
        .card-3-text {
            padding: 0 .5rem 1.2rem .5rem;
        }

        .special {
            color: white;
        }

        .ms_card-2 {
            width: 35%;
            position: relative;

            img {
                width: 100%;
            }

            .black {
                background-color: rgba(0, 0, 0, .2);
                position: absolute;
                top: 0;
                bottom: 0;
                width: 100%;
            }
        }

        .card-2-text {
            position: absolute;
            bottom: 0;
            z-index: 999;
            padding: 0 1rem 1.5rem 1rem;

            .title-6 {
                font-size: 1.4rem;
            }
        }

    }

    .cta-1 {
        color: gray;
        font-size: .8rem;
    }

    .cta-2 {
        color: #ef6f31;
        font-weight: 600;
        font-size: .8rem;
        text-decoration: underline;
        cursor: pointer;
    }

    @media screen and (min-width: 1200px) {
        .cards-6 {

            .ms_card-1,
            .ms_card-3 {
                width: 15%;
            }
        }
    }

    @media screen and (max-width: 992px) {

        .cards-6 {
            .ms_card-3 {
                position: relative;
                bottom: 0;

                img {
                    object-position: top;
                }
            }

            .ms_card-1,
            .ms_card-3 {
                width: 30%;
            }
        }

    }

    .section-6-roll {
        color: gray;
        font-size: .8rem;
    }

    .title-6 {
        font-size: .9rem;
        font-weight: 600;
    }

    .date-views {
        font-size: .7rem;
        color: gray;
    }
}

@media screen and (max-width: 768px) {

    .section-6 {
        .cards-6 {
            flex-wrap: wrap;

            .ms_card-1,
            .ms_card-3,
            .ms_card-2 {
                width: 100%;
                margin-bottom: 3rem;
            }

            .ms_card-2 {
                img {

                    object-fit: cover;
                }
            }
        }
    }
}

// SECTION 7---------------------------------------------------

.section-7 {
    position: relative;
    overflow: hidden;

    .bg-7-1 {
        width: 20%;
        position: absolute;
        bottom: -20%;
        left: 0;
    }

    .bg-7-2 {
        width: 15%;
        position: absolute;
        top: 15%;
        right: 0;
    }

    @media screen and (max-width: 768px) {

        .bg-7-1,
        .bg-7-2 {
            display: none;
        }
    }

    img {
        width: 100%;
    }

    .date-7 {
        color: gray;
        font-size: .8rem;
        margin-bottom: .3rem;
    }

    .title-7 {
        font-weight: 600;
        font-size: .8rem;
        margin-bottom: .3rem;
        cursor: pointer;
        position: relative;
        z-index: 999;

        &:hover {
            text-decoration: underline;
        }
    }

    .place-7 {
        font-size: .6rem;
        color: gray;
    }
}

@media screen and (min-width: 1200px) {
    .section-7 {
        .ms_container-7 {
            max-width: 1200px;
        }
    }
}
</style>