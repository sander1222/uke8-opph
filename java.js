//oppgave 1

// const book = {
//   title: "Håkon den Heilage",
//   author: "Blorfle Spinklewump III",
//   yearPublished: 1996,
// };

// console.log(book);

//OPPGAVE 2

// const book2 = {
//     title: "Håkon den Heilage",
//     author: "Blorfle Spinklewump III",
//     yearPublished: 1996,
//     getSummary: function () {
//       return `${this.title} by ${this.author}, published in ${this.yearPublished}`;
//     },
//   };

//   console.log(book2.getSummary());

//OPPGAVE 3

// const book = {
//   title: "Håkon den Heilage",
//   author: "Blorfle Spinklewump III",
//   yearPublished: 1996,
//   chapters: [
//     "Kapittel 1: introduksjon",
//     "Kapittel 2: Håkons Oppvekst",
//     "Kapittel 3: De Store Slangene",
//     "kapittel 4: Kongens Fall",
//     "Kappitel 5: Arven etter Håkon",
//   ],
//   getSummary: function () {
//     return `${this.title} by ${this.author}, published in ${this.yearPublished}`;
//   },
// };

// for (let i = 0; i < book.chapters.length; i++) {
//   console.log(book.chapters[i]);
// }

//OPPGAVE 4

// const book = {
//   title: "Håkon den Heilage",
//   author: "Blorfle Spinklewump III",
//   yearPublished: 1996,
//   chapters: [
//     "Kapittel 1: Introduksjon",
//     "Kapittel 2: Håkons Oppvekst",
//     "Kapittel 3: De Store Slagene",
//     "Kapittel 4: Kongens Fall",
//     "Kapittel 5: Arven etter Håkon",
//   ],
//   publisher: {
//     name: "Viking Press",
//     location: "Molde, Norge",
//   },
//   getSummary: function () {
//     return `${this.title} by ${this.author}, published in ${this.yearPublished}`;
//   },
// };

// console.log(`Publisher: ${book.publisher.name}`);
// console.log(`Location: ${book.publisher.location}`);

//OPPGAVE 5
// jeg fikk en del hjelp fra mr.Chatgpt men jeg skjønner hva som ble gjort

const library = {
  books: [
    {
      title: "Håkon den Heilage",
      author: "Blorfle Spinklewump III",
      yearPublished: 1996,
      chapters: [
        "Kapittel 1: Introduksjon",
        "Kapittel 2: Håkons Oppvekst",
        "Kapittel 3: De Store Slagene",
        "Kapittel 4: Kongens Fall",
        "Kapittel 5: Arven etter Håkon",
      ],
      publisher: {
        name: "Viking Press",
        location: "Oslo, Norge",
      },
      getSummary: function () {
        return `${this.title} by ${this.author}, published in ${this.yearPublished}`;
      },
    },
    {
      title: "Mystiske Eventyr",
      author: "Blorfle Spinklewump III",
      yearPublished: 2001,
      chapters: [
        "Kapittel 1: Den Glemte Skogen",
        "Kapittel 2: Gåten i Fjellene",
        "Kapittel 3: Hemmeligheter i Skyggenes Dal",
      ],
      publisher: {
        name: "Mystic Tales",
        location: "Molde, Norge",
      },
      getSummary: function () {
        return `${this.title} by ${this.author}, published in ${this.yearPublished}`;
      },
    },
    {
      title: "Slage på Stiklesta",
      author: "Ingrid Fjellheim",
      yearPublished: 2010,
      chapters: [
        "Kapittel 1: Det Første krig",
        "Kapittel 2: Møtet med Skjebnen",
        "Kapittel 3: Den Siste Reisen",
      ],
      publisher: {
        name: "Saga Forlag",
        location: "Stikle sta, Norge",
      },
      getSummary: function () {
        return `${this.title} by ${this.author}, published in ${this.yearPublished}`;
      },
    },
  ],
  findBooksByAuthor: function (authorName) {
    return this.books.filter((book) => book.author === authorName);
  },
};

console.log(booksByAuthor.map((book) => book.getSummary()));
