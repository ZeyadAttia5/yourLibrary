const myLibrary = [];

function Book(title, author, pages, dateOfPublication) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.dateOfPublication = dateOfPublication;
}

function addBookToLibrary() {
  const book = new Book();
  const formBtn = document.querySelector('#submission');
  const form = document.querySelector('form');
  form.addEventListener('submit', submissionHandler);
  function submissionHandler(e) {
    e.preventDefault();
    book.title = form.querySelector('.title').querySelector('input').value;
    book.author = form.querySelector('.author').querySelector('input').value;
    book.pages = `${
      form.querySelector('.pages').querySelector('input').value
    } pages`;
    book.dateOfPublication = form
      .querySelector('.year')
      .querySelector('input').value;
    book['read'] = document.getElementById('readFormCheck').checked;
    myLibrary.push(book);
    printLibrary(book);
    form.reset();
    closeFormHandler();
    form.removeEventListener('submit', submissionHandler);
  }
}

function printLibrary(book) {
  const cardContainer = document.querySelector('.card-container');
  const cardContent = document.createElement('div');
  cardContent.classList.add('card');
  const title = document.createElement('p');
  const author = document.createElement('p');
  const pages = document.createElement('p');
  const year = document.createElement('p');

  title.textContent = book.title;
  author.textContent = book.author;
  pages.textContent = book.pages;
  year.textContent = book.dateOfPublication;

  const cardBtns = document.createElement('div');
  const readBtn = document.createElement('btn');
  const cancelBtn = document.createElement('btn');
  readBtn.id = 'readStatus';
  readBtn.addEventListener('click', readBtnHandler);
  if (book.read === true) readBtn.classList.add('read');
  else readBtn.classList.add('not-read');
  cancelBtn.textContent = 'delete';
  cancelBtn.addEventListener('click', deleteBtnHandler);
  readBtn.classList.add('btn');
  cancelBtn.classList.add('delete');
  cardBtns.classList.add('card-buttons');
  cardBtns.append(readBtn);
  cardBtns.append(cancelBtn);
  cardContent.append(title);
  cardContent.append(author);
  cardContent.append(pages);
  cardContent.append(year);
  cardContent.append(cardBtns);
  cardContainer.append(cardContent);
}

const newBookBtn = document.querySelector('.newbook');
const cancelBtn = document.querySelector('#cancelBtn');

newBookBtn.addEventListener('click', newBookHandler);
cancelBtn.addEventListener('click', closeFormHandler);

function newBookHandler() {
  document.getElementById('myForm').style.display = 'block';
  document.getElementById('overlay').style.display = 'block';
  addBookToLibrary();
}

function closeFormHandler() {
  document.getElementById('myForm').style.display = 'none';
  document.getElementById('overlay').style.display = 'none';
}

function readBtnHandler(e) {
  e.target.classList.toggle('read');
  e.target.classList.toggle('not-read');
}

function deleteBtnHandler(e) {
  const deletedBook = e.target.closest('.card');
  deletedBook.remove();
}
