const books = [
  {
    title: "React Billionaire",
    pages: 250,
    author: {
      name: "Alice",
      age: 35,
    },
    available: false,
    price: "101€",
    tags: ["advanced", "js", "react", "senior"],
  },
  {
    title: "Advanced JS",
    pages: 500,
    author: {
      name: "Bob",
      age: 20,
    },
    available: true,
    price: "25€",
    tags: ["advanced", "js", "mid-senior"],
  },
  {
    title: "CSS Secrets",
    pages: 320,
    author: {
      name: "Alice",
      age: 17,
    },
    available: true,
    price: "8€",
    tags: ["html", "css", "junior"],
  },
  {
    title: "HTML Mastery",
    pages: 200,
    author: {
      name: "Charlie",
      age: 50,
    },
    available: false,
    price: "48€",
    tags: ["html", "advanced", "junior", "mid-senior"],
  },
];

// Creare un array (ages) che contiene le età degli autori dei libri.

const ages = books.map((books) => books.author.age);
console.log(ages);

// Calcola la somma delle età (agesSum) usando reduce.

const agesSum = ages.reduce((acc, age) => acc + age, 0);
console.log(agesSum);

// Stampa in console l’età media degli autori dei libri.

const averageAge = agesSum / ages.length;
console.log(averageAge);
