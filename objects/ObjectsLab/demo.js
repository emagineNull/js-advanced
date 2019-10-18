let person = {
    firstName:"Alek",
    lastName: "Rifai",
    fullname: function() {
        return this.firstName + " " + this.lastName;
    }
}

console.log(person.fullname());

let obj = {};

Object.defineProperties(
    obj, 
    {
        "name":{
            get: () => {console.log("get") },
            set: x => {console.log("set"), x },
        }
    }
);

let obj2 = {a: 1, b: 2, c: 3};
for (const key of Object.keys(obj2)) {
    console.log(`obj.${key} = ${obj2[key]}`);
}

let foo = {
    prop1: 1,
    prop2: 2
};

let bar = Object.create(foo); // delegated - access but immutable
bar.prop3 = 3;

foo.prop1 = 4;

bar.prop1 = 2;

console.log(foo, bar, bar.prop1, bar.prop2);

console.log(
    Object.keys(foo),
    Object.keys(bar)
)

for (let i in bar) {
    if (bar.hasOwnProperty(i)) {
        console.log(i);
    }
}
