let currentcourse = {code:"ACIT 1515", name:"Scripting For IT"}
let currentcourse2 = {code:"ACIT 1620", name:"Web Fundamental Technologies"}
let currentcourse3 = {code:"ACIT 1630", name:"Database Systems"}

const courseList = [currentcourse,currentcourse2,currentcourse3]

let user;
do{
    user = prompt("Enter a course number (4 digits only)")
} while(user.length != 4 || isNaN(user) === true)

stoploop = true

while (stoploop != false ){
for (let courses of courseList){
    if (courses.code.includes(user)){
        console.log(`Yes, I am currently taking: ${courses.code},${courses.name}`)
        stoploop = false
    }
} if (stoploop){
    let new_course = {code: user, name: null}
    courseList.push(new_course)
    console.log(`The new course ${user} has been added`)
    stoploop = false
}
}
console.log(courseList)