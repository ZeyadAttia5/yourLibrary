let myLibrary = [];

function Book(title, author, dateOfPublication) {
  this.title = title;
  this.author = author;
  this.dateOfPublication = dateOfPublication;
}

function addBookToLibrary() {
  let book = new Book();
  book.title = prompt('What is the name of the book?');
  book.author = prompt('Who is the author of the book?');
  book.dateOfPublication = prompt('When was the book published?');
  myLibrary.push(book);
}

function printLibrary() {
  myLibrary.forEach((book) => console.log(book));
}

const newBookBtn = document.querySelector('.newbook');

newBookBtn.addEventListener('click', newBookHandler);

function newBookHandler() {
  document.getElementById('myForm').style.display = 'none';
}
