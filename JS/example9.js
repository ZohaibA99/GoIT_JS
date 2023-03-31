// Write functions to work with the courses collection of training courses:

// addCourse(name) - adds a course to the end of the collection
// removeCourse(name) - removes a course from the collection
// updateCourse(oldName, newName) - changes the name to a new one

const courses = ['HTML', 'CSS', 'JavaScript', 'React', 'PostgreSQL'];

function addCourse(name){
    if(courses.includes(name)){
        console.log("Already have this course in the collection");
        return;
    }
    courses.push(name);
}

function removeCourse(name){
    const courseIndex = courses.indexOf(name);
    if(!courses.includes(name)){
        console.log("No such course in collection");
        return;
    }

    courses.splice(courseIndex, 1);
}

function updateCourse(oldName, newName = null){
    if(!courses.includes(oldName)){
        console.log('this course is not within the collection');
    }


    const courseIndex = courses.indexOf(oldName);
    courses[courseIndex] = newName;
}

addCourse('Express');
console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'React', 'PostgreSQL', 'Express']
addCourse('CSS'); // ' You already have this course'

removeCourse('React');
console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'PostgreSQL', 'Express']
removeCourse('Vue'); // 'Course with this name was not found'

updateCourse('Express', 'NestJS');
console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'PostgreSQL', 'NestJS']