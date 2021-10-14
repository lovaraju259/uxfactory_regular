//1.check if all the property values in an array of object is same or not  
var empdetails = [
    { name: 'lovaraju', id: 1, age: 27, designation: 'electrical engineer', salary: 20000 },
    { name: 'sri', id: 2, age: 25, designation: 'chemical engineer', salary: 40000 },
    { name: 'ashok', id: 3, age: 25, designation: 'civil engineer', salary: 60000 },
    { name: 'lsatya', id: 4, age: 27, designation: 'software engineer', salary: 80000 }
];
let getdetails = empdetails[0].age;
let employee = empdetails.map(emp => {
    return emp.age === getdetails;
});
console.log(employee);

//2.get the valueof the first element in an array that has value greater than 20
var num = [10, 15, 19, 20, 23, 25, 40, 48];
let val = num.find(age => {
    return age > 20;
});
console.log(val);

//3.get the valueof the first element in an array that has value lessthan 2
var num = [10, 15, 1, 20, 23, 25, 40, 48];
let result = num.find(age => {
    return age < 2;
});
console.log(result);

//4.filter data based on a id(property) in an array of objects
var empdetails = [
    { name: 'lovaraju', id: 1, age: 27, designation: 'electrical engineer', salary: 20000 },
    { name: 'sri', id: 2, age: 25, designation: 'chemical engineer', salary: 40000 },
    { name: 'ashok', id: 3, age: 25, designation: 'civil engineer', salary: 60000 },
    { name: 'lsatya', id: 4, age: 27, designation: 'software engineer', salary: 80000 }
];
let empfilter = empdetails.filter(emp => {
    return emp.id > 2;
});
console.log(empfilter);


var numbers=[9,8,90,89,100];
var reduceval=numbers.reduce((total,num)=>{
    console.log(num);
    console.log(total);
});
console.log(reduceval);
