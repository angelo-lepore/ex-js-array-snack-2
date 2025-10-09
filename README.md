## EX - Snack Array Avanzati

Hai un array di oggetti rappresentanti libri:

```js
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
```

## Snack 1 - Filtra e Modifica

Crea una funzione che somma due numeri.

✔︎ Crea un array (<font color="red">longBooks</font>) con i libri che hanno più di 300 pagine;

✔︎ Creare un array (<font color="red">longBooksTitles</font>) che contiene solo i titoli dei libri contenuti in longBooks.

✔︎ Stampa in console ogni titolo nella console.

## Snack 2 - Il primo libro scontato

✔︎ Creare un array (<font color="red">availableBooks</font>) che contiene tutti i libri disponibili.

✔︎ Crea un array (<font color="red">discountedBooks</font>) con gli <font color="red">availableBooks</font>, ciascuno con il prezzo scontato del 20% (mantieni lo stesso formato e arrotonda al centesimo)

✔︎ Salva in una variabile (<font color="red">fullPricedBook</font>) il primo elemento di <font color="red">discountedBooks</font> che ha un prezzo intero (senza centesimi).

## Snack 3 - Ordinare gli Autori

✔︎ Creare un array (<font color="red">authors</font>) che contiene gli autori dei libri.

✔︎ Crea una variabile booleana (<font color="red">areAuthorsAdults</font>) per verificare se gli autori sono tutti maggiorenni.

✔︎ Ordina l’array <font color="red">authors</font> in base all’età, senza creare un nuovo array.
(se <font color="red">areAuthorsAdults</font> è true, ordina in ordine crescente, altrimenti in ordine decrescente)

## Snack 4 - Calcola l’età media

✔︎ Creare un array (<font color="red">ages</font>) che contiene le età degli autori dei libri.

✔︎ Calcola la somma delle età (<font color="red">agesSum</font>) usando reduce.

✔︎ Stampa in console l’età media degli autori dei libri.

## Snack 5 (Bonus) - Raccogli i libri

```js
Nota: a differenza di quanto visto finora negli esempi, per accedere all'API utilizzare l'url base:
http://localhost:3333
al posto di:
https://freetestapi.com/api/v1
Ad esempio:
http://localhost:3333/users
per chiamare l'endpoint /users
Clicca qui per la guida su come installare il Server API Locale!
```

Usando la l'API http://localhost:3333/books/{id} usa la combinazione di <font color="red">.map()</font> e <font color="red">Promise.all()</font>, per creare una funzione (<font color="red">getBooks</font>) che a partire da un array di id (<font color="red">ids</font>), ritorna una promise che risolve un array di libri (books).
Testala con l’array [2, 13, 7, 21, 19] .

## Snack 6 (Bonus) - Ordina i libri

✔︎ Crea una variabile booleana (<font color="red">areThereAvailableBooks</font>) per verificare se c’è almeno un libro disponibile.

✔︎ Crea un array (<font color="red">booksByPrice</font>) con gli elementi di books ordinati in base al prezzo (crescente).

✔︎ Ordina l’array <font color="red">booksByPrice</font> in base alla disponibilità (prima quelli disponibili), senza creare un nuovo array.

## Snack 7 (Bonus) - Analizza i tag

Usa <font color="red">reduce</font> per creare un oggetto (<font color="red">tagCounts</font>) che conta quante volte ogni tag viene usato tra i libri.
