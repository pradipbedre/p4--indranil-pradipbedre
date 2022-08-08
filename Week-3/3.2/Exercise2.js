/* Use of call apply bind methods  */
/* use of call method  */
console.log("-------->Use Of Call Method<--------")

let person1={
    firstName:"Raju",
    LastName:"More",
    
 //We also can define this method sapratly for reuse    
    printFullName:function(hometown,country){
        console.log(this.firstName + " " + this.LastName +" from "+hometown + " "+ country);
    }
}

let person2={
    firstName:"Baburao",
    LastName:"Aapte",
}

// using call function we borrowing the methods of person 1 object.
// in js each and every function has access to call function 
//we can pass argument in call method as well 

person1.printFullName.call(person2, "Maharashtra", "India");



/* Use of apply method */

console.log("-------->Use Of apply Method<--------");

//we pass here arguments as array list
person1.printFullName.apply(person2, ["Maharashtra", "India"]);



/* Use of bind method*/

console.log("-------->Use Of bind Method<--------");
//Bind method binds printFullName method to the 
//calling object and returns copy of that method for calling object.

let printName=person1.printFullName.bind(person2,"Maharashtra", "India");
printName();

