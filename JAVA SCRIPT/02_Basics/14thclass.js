// object de-structure

const course = {
    courseName: "JS in hindi",
    coursePrice: "999",
    courseInstructor: "hitesh"
}

const {courseInstructor: ci} = course
console.log(ci);

// {
//     "name": "Rajat",
//     "age": "19",
//     "college": "pmec",
//     "branch": "cse",
//     "semester": "3rd"
// }