let lib = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.index = 0;
}

let ind = 0;

adLib = (book) => {
  lib.push(book);
};

displayBook = (book) => {
  let card = document.createElement("div");

  let title = document.createTextNode("Title: " + book.title + ", ");
  card.appendChild(title);

  let author = document.createTextNode("Author: " + book.author + ", ");
  card.appendChild(author);

  let pages = document.createTextNode("Pages: " + book.pages + ", ");
  card.appendChild(pages);

  let read = document.createTextNode("Read: " + book.read);
  card.appendChild(read);

  let btn = document.createElement("button");
  btn.textContent = "Delete";
  btn.onclick = function () {
    for (let i = 0; i < lib.length; i++) {
      lib[i].index = i;
    }
    lib.splice(book.index, 1);
    container.innerHTML = "";
    displayLib();
  };
  card.appendChild(btn);

  let btn2 = document.createElement("button");
  btn2.textContent = "Toggle Read";
  btn2.onclick = function () {
    if (book.read == "not read") {
      book.read = "read";
    } else {
      book.read = "not read";
    }
    container.innerHTML = "";
    displayLib();
  };
  card.appendChild(btn2);

  let container = document.getElementById("container");
  container.appendChild(card);
};

displayLib = () => {
  lib.forEach((e) => {
    displayBook(e);
  });
};

addBook = () => {
  title = window.prompt("Title: ");
  author = window.prompt("Author: ");
  pgs = window.prompt("Pages: ");
  read = window.prompt("Read: ");
  const book = new Book(title, author, pgs, read);
  adLib(book);
  displayBook(book);
};

const book1 = new Book("1", "1", "1", "read");
const book2 = new Book("2", "2", "2", "not read");
adLib(book1);
adLib(book2);
