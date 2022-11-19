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
        <div class="ms_container mt-5">

            <h3 class="text-center ms_blue mt-5">Artist Coaching</h3>
            <h2 class="text-center mb-5">Latest Online Courses</h2>

            <div class="row mb-5 g-3">
                <div v-for="(course, index) in this.store.coursesArray" :key="index"
                    class="col-12 col-sm-6 col-md-3 d-flex align-items-stretch mb-4">
                    <div class="ms_courses-card d-flex flex-column justify-content-between">
                        <div class="courses-card-img">
                            <img :src="getImagePath(`../../assets/img${course.img}`)" alt="">
                        </div>

                        <div class="course-price">
                            ${{ course.price }}.00
                        </div>
                        <div class="course-name">
                            "{{ course.courseName }}"
                        </div>
                        <div class="lessons-students">
                            <span class="me-3"> <i class="fa-regular fa-file-zipper"></i> {{ course.lessons }} Lessons
                            </span>
                            <span> <i class="fa-regular fa-user"></i> {{ course.students }} Students</span>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </section>

    <!-- /SECTION 5 -->
</template>


<style lang="scss" scoped>
.ms_container {
    width: 90%;
    margin: auto;
    max-width: 1400px;
}

.ms_blue {
    font-family: 'imperial-script', 'sans-serif';
    font-size: 1rem;
    color: #69c5f1;
}

.section-5 {
    h2 {
        font-size: 1.2rem;
    }

    img {
        width: 100%;
        cursor: pointer;

    }

    .ms_courses-card {
        width: 80%;
        margin: auto;
        height: 100%;
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
    }
}
</style>