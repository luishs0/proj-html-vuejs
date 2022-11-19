import { reactive } from "vue";

export const store = reactive({
    headerLinks: ['Home', 'Pages', 'Courses', 'Features', 'Blog', 'Shop'],
    coursesArray: [
        {
            courseName: "The Acrylic Painting Academy",
            price: 18,
            lessons: 4,
            students: 50,
            img: "/artist-course-08-480x480.jpg"
        },
        {
            courseName: "Drawing and Shading: Complete course",
            price: 21,
            lessons: 14,
            students: 50,
            img: "/artist-course-07-480x480.jpg"
        },
        {
            courseName: "The Color Theory for Digital Artist",
            price: 19,
            lessons: 7,
            students: 50,
            img: "/artist-course-06-480x480.jpg"
        },
        {
            courseName: "Ultimate Guide to Digital Sketching for Beginner",
            price: 35,
            lessons: 14,
            students: 50,
            img: "/artist-course-05-480x480.jpg"
        },
        {
            courseName: "Portrait Drawing The Smart Way",
            price: 19,
            lessons: 2,
            students: 50,
            img: "/artist-course-04-480x480.jpg"
        },
        {
            courseName: "Mastering Watercolor Painting from Beginner",
            price: 19,
            lessons: 9,
            students: 50,
            img: "/artist-course-03-480x480.jpg"
        },
        {
            courseName: "The Art and Science of Drawing",
            price: 25,
            lessons: 4,
            students: 50,
            img: "/artist-course-02-480x480.jpg"
        },
        {
            courseName: "The Colored Pencil Drawing Course",
            price: 22,
            lessons: 6,
            students: 50,
            img: "/artist-course-01-480x480.jpg"
        }
    ]
})