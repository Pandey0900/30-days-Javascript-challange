// Object creation and Access

// Task One:-

const book = {
    title:"Office Dairy",
    author:"Saurabh Pandey",
    year:2024
}
console.log(book);
console.log(" ")

// Task Two
console.log(`Book title is ${book.title}`)
console.log(`Book Author is ${book.author}`)

// Object Methods

// Task Three
const stringBookTitle = book.title.toString()
console.log(`Title convert into object to string: ${stringBookTitle} `)
console.log("")

const stringBookAuthor = book.author.toString()
console.log(`Author convert into object to string: ${stringBookAuthor} `)
console.log("")

// Task Four

function updateBookYear(year){
    return console.log(`Updated Book Year ${book.year = year}`)
}

updateBookYear(2026)
console.log("")
console.log("This updated Book year: ",book)

// Nested Object:-

// Task Five:-

const NestedObject = {
    name:{
        firstName:"saurabh",
        lastName:"pandit"
    },
    books:{
        title:"Coding",
        author:"Saurabh",
        year:2023
    }
}

// Task Six:-

console.log(" ");
console.log("This is the nested object: ",NestedObject)

console.log(" ");
console.log("This is the name object: ",NestedObject.name)

console.log(" ");
console.log("This is the books object: ",NestedObject.books)


// The this keyword:-

// Task Seven:-

const newBook = {
    title:"Task Seven",
    author:"Saurabh Pandit",
    year:2021,
    getNewBook:function(){
        return `This is book title: ${this.title} and This is book year: ${this.year}`
    },
    getBook(){
        return `This is book title: ${this.title} and This is book year: ${this.year}`
    }
}

console.log(newBook.getNewBook())
console.log(newBook.getBook())


// Object Iteration:-

// Task Eight:-

console.log("")
for(const bookObj in book){
    console.log(`This is keys of book: ${bookObj}  This is values of book: ${book[bookObj]}`);
}

// Task Nine:-

console.log("")
console.log(Object.keys(book));
console.log("")
console.log(Object.values(book));
console.log("")
console.log(Object.entries(book));

