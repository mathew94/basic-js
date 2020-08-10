var student = {id:121, phone:1456, name:"Abir"};
var student2 = {id:131, phone:6571, name:"Mahi"};

// 3 ways of using or get properties
var phoneNo = student.phone; //1st way

var idNo = student["id"]; //2nd way

var studentPropName = "name"; //3rd way
var studentName = student[studentPropName]; //3rd way

// Changing or update phone number of Mahi
student2.phone = 18456; //1st way
student2["phone"] = 66685; //2nd way

var phonePropName = "phone"; //3rd way
student2[phonePropName] = 333777; //3rd way

// Adding new property. These are also can be added by those three ways
student2.cinema = "DHOOM";

console.log(phoneNo);
console.log(idNo);
console.log(studentName);
console.log(student2);