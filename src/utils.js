function add (value1, value2) {
    console.log(`result = ${value1 + value2}`);
}

function minus (value1, value2) {
    console.log(`result = ${value1 - value2}`);
}

function division (value1, value2) {
    console.log(`result = ${value1 / value2}`);
}

export function multiplication (value1, value2) {
    console.log(`result = ${value1* value2}`);
}

export { add, minus }
export default division

class User  {
    constructor(name, surname, age, email) {
        this.name = name;
        this.surname = surname;
        this.age = age;
        this.email = email
    }
}

const mango = new User ('Oleksandr', 'Melnik', '37', 'almel@gmail.com');

export { mango }