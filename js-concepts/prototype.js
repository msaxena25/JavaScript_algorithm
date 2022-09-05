console.log('Prototype concepts')


function createObj() {

    var obj1 = {
        name: 'mohit',
        getName() {
            return this; // obj1 scope
        },
        getNameNormalFn: function () {
            return this; // obj1 scope
        },
        getNameArrow: () => {
            return this; // window scope
        }
    }

    console.log(obj1.getName())

    console.log(obj1.getNameNormalFn())

    console.log(obj1.getNameArrow())
}
//createObj();

function assignMethodsInFunctionWithPrototype() {
    const personPrototype = {
        greet() {
            console.log(`hello, my name is ${this.name}!`);
        }
    }

    // In JavaScript, all functions have a property named prototype.When you call a function as a constructor, this property is set as the  prototype of the newly constructed object (by convention, in the property named __proto__).

    function Person(name) {
        this.name = name;
    }
    /**
     * 1. We can create a new method in existing function by using prototype.
     *
     *  Person.prototype.getName = function () {
        return this.name;
        }
     *
     * 2. We can pull methods from any object and assign into function prototype.
     *
     * > Person.prototype.greet = personPrototype.greet; OR Object.assign(Person.prototype, personPrototype); OR
     * Person.prototype = personPrototype;
     *
     */

    Object.assign(Person.prototype, personPrototype); // PULL methods from personPrototype object
    Person.prototype.getName = function () {  // Created new method
        return this.name;
    }
    const p1 = new Person('Mohit');
    console.log(p1.greet())
    console.log(p1.getName())

    console.log(Person.prototype) // {greet: ƒ, getName: ƒ, constructor: ƒ} -- It works because Person is a function.

    console.log(p1.prototype) // undefined -- because p1 is an object. So here p1.__proto__ will work to get its prototype.

    console.log(p1.isPrototypeOf()) // false

    console.log(Object.getPrototypeOf(p1)) // {greet: ƒ, getName: ƒ, constructor: ƒ}
}


//assignMethodsInFunctionWithPrototype();

function proto() {
    var obj1 = {
        a: 1,
        b: 2,
        // __proto__ sets the [[Prototype]]. It's specified here
        // as another object literal.
        __proto__: {
            b: 3,
            c: 4,
        },
    };
    console.log(obj1.__proto__);
    console.log(obj1.c);

    // There is already a property named 'b' in direct obj1 & its value is 2.
    // obj1 prototype also has a 'b' property, but it's not visited.
    // This is called Property Shadowing
    console.log(obj1.b); // > 2

    console.log(obj1.__proto__.b); // > 3

    console.log(obj1.a); // > 1

    const parent = {
        value: 2,
        method() {
            return this.value + 1;
        }
    };
    // child is an object that inherits from parent
    const child = {
        __proto__: parent,
    };

    //  since child doesn't have an own property called 'value', the property is
    // found on the [[Prototype]], which is parent.value.
    console.log(child.method()); // > 3

    child.value = 4; // assign the value 4 to the property 'value' on child.

    console.log(child.method()); // > 5
}
//proto()


function inheritance() {
    function Parent(name) {
        this.name = name;
        this.address = 'Noida';
        this.getName = function (relation) {
            return this.name + ' - ' + relation;
        }
    }
    var p = new Parent('Mohit');
    console.log(p.getName('Father'))

    function Child(name) {
        this.mychildName = 'Vani';
        Parent.call(this, name); // call parent & pass properties to parent function
        this.getMyChildName = function () {
            return this.mychildName;
        }
    }

    //  Child.prototype = Object.create(Parent.prototype) // assign Parent object into Child prototype.
    // Child.prototype = new Parent()  //Another way ---

    // When we change prototype by above line, it also change constructor as well, so again we need to reassign it.
    Child.prototype.constructor = Child;

    var c = new Child('Masava');
    console.log('c :', c);
    console.log(c.getMyChildName())
    console.log(c.getName('Mother'))
    console.log(c.address)

    console.log(c instanceof Parent, c instanceof Child) //> true true
    console.log('Check c constructor - ', c.__proto__.constructor); // Child


}

//inheritance();

/**
 * If we write single line > Parent.call(this, name); - all will work, we can access parent all things in child.
 * but
 * (c instanceof Parent) > will be false.
 * c.__proto__.constructor === Child  = > will be false.
 *
 * So to make it work , we also assign object of parent into child prototype & then put Child into c prototype constructor.
 * Child.prototype = Object.create(Parent.prototype) OR Child.prototype = new Parent()
 * Child.prototype.constructor = Child;
 *
 */

function classInheritance() {
    class Person {
        constructor(firstName, lastName) {
            this.firstName = firstName;
            this.lastName = lastName;
        }

        getFullName() {
            console.log('My Full name is - ' + this.firstName + ' ' + this.lastName);
            return this.firstName + ' ' + this.lastName;
        }
    }

    const person1 = new Person('Js', 'Mount')
    person1.getFullName();

    class Employee extends Person {
        constructor(firstName, lastName, department) {
            super(firstName, lastName); // super is used to call parent class constructor with given properties.
            this.department = department;
        }
        /* If number of arugments are more.
        constructor(...args) {
            super(...args);
        } */
        getDepartment() {
            console.log(this.department);
            return this.department;
        }
        getNameAndDepartment() {
            super.getFullName(); // call parent method
            this.getDepartment();
        }
    }

    const emp = new Employee('M', 'S', 'Accounts');
    emp.getDepartment();
    emp.getFullName();
    emp.getNameAndDepartment();
}

classInheritance();

/**
 * In class approach using class keyword, in the Child‘s constructor, call super() to invoke the Parent‘s constructor with
 * arguments. JavaScript requires the child class to call super() if it has a constructor.
 * If the Child class doesn’t have a constructor, then we call parent like > Parent.call(this, arguments);
 */