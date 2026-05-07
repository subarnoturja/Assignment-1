// Problem 1
const filterEvenNumbers = (array : number[]) => {
    return array.filter(arr => arr % 2 === 0);
}

// Problem 2
const reverseString = (value : string) => {
    return value.split("").reverse().join("");
}

// Problem 3
type StringOrNumber = string | number;

const checkType = (value : StringOrNumber) => {
    if(typeof value === "number") {
        return "number";
    }
    else if(typeof value === "string") {
        return "string";
    }
    else {
        return "nothing";
    }
}

// Problem 4
const getProperty = <T, K extends keyof T> (obj: T, key: K) : T[K] => {
    return obj[key];
}

// Problem 5
interface Book {
    title: string;
    author: string;
    publishedYear: number;
}

const toggleReadStatus = (book: Book) : Book & { isRead: boolean } => {
    return {
        ...book,
        isRead: true,
    }
}

// Problem 6
class Person {
    name: string;
    age: number;

    constructor(name: string, age: number){
        this.name = name;
        this.age = age;
    }
}

class Student extends Person {
    grade: string;

    constructor(name: string, age: number, grade: string){
        super(name, age);
        this.grade = grade;
    }
    getDetails(){
        return `Name ${this.name}, Age: ${this.age}, Grade: ${this.grade}`;
    }
}

// Problem 7
const getIntersection = (array1 : number[], array2: number[]) => {
    const uniqueNumbers = new Set(array1);
    return array2.filter(num => uniqueNumbers.has(num)); 
}