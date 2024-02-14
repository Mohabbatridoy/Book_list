//define ui
let form = document.querySelector('#book-form');


class Book {
    constructor(title,author,isbn){
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}

//UI class
class UI {
    constructor(){

    }

    addToBookList(book) {
        let list = document.querySelector('#book-list');
        let row = document.createElement('tr');
        row.innerHTML = `<td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><a href='#' class="delete">X</a></td>`;
        list.appendChild(row);
    }
    clearField(){
        document.querySelector('#title-input').value = '';
        document.querySelector('#author-input').value = '';
        document.querySelector('#isbn-input').value = '';
    }
}


//addeventlistner
form.addEventListener('submit', addBook);


//Functions:
function addBook(e){
    let title = document.querySelector('#title-input').value;
    let author = document.querySelector('#author-input').value;
    let isbn = document.querySelector('#isbn-input').value;

    let book = new Book(title,author,isbn);

    let ui = new UI();
    ui.addToBookList(book);
    ui.clearField();
    


    e.preventDefault();
}