const students = [
    { name: "Mango", score: 83, courses: ["mathematics", "physics"] },
    { name: "Poly", score: 59, courses: ["informatics", "mathematics"] },
    { name: "Ajax", score: 37, courses: ["physics", "biology"] },
    { name: "Kiwi", score: 94, courses: ["literature", "informatics"] },
];

// const sortedByAscendingScore = students.sort((a, b) => {
//    return a.score - b.score;
// });


//const names = sortedByAscendingScore.map(student => student.name);

const names = [...students]
    .sort((a, b) => a.score - b.score)
    .map(student => student.name);

console.log(names);