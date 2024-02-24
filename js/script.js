//get ui element;
let form = document.querySelector('#book-form');
let bookList = document.querySelector('#book-list');

// Book class
class Book {
    constructor(title,author,isbn){
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}

//UI class
class UI {
    constructor (){

    }
    static addToBookList(book){
        let list = document.querySelector('#book-list');
        let row = document.createElement('tr');
        row.innerHTML = `<td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><a href='#' class'delete'>X</a></td>`;
        list.appendChild(row);
    }

    static clearField(){
        document.querySelector('#title').value = '';
        document.querySelector('#author').value  = '';
        document.querySelector('#isbn').value = '';
    }

    static showAlert(message, className){
        let div = document.createElement('div');
        div.className = `alert ${className}`;
        div.appendChild(document.createTextNode(message));
        let container = document.querySelector('.container');
        let form = document.querySelector('#book-form');
        container.insertBefore(div,form);

        setTimeout(() => {
            document.querySelector('.alert').remove();
        }, 3000);
    }

    // static deleteFromBook(target){
    //     if(target.hasAttribute('href')){
    //         target.parentElement.parentElement.remove();
    //         this.showAlert("Booked Removed",'success');
    //     }
    // }
}

//Local storage class
class store{
    static getBooks() {
        let books;
        if(localStorage.getItem('books') === null){
            books = [];
        }
        else{
            books = JSON.parse(localStorage.getItem('books'));
        }
        return books;
    }

    addToLocalStorage(book){
        let books = this.getBooks();
        books.push(book);

        localStorage.setItem('books', JSON.stringify(books));
    }
}

//add eventlistner:
form.addEventListener('submit', newBook);
bookList.addEventListener('click', removeBook);

//Functions:
//addBook function:
function newBook (e){
    let title = document.querySelector('#title').value,
    author = document.querySelector('#author').value ,
    isbn = document.querySelector('#isbn').value;

    if(title === ''||author === '' || isbn === ''){
        UI.showAlert("Please fill up all fields", "error");
    }
    else{
        let book = new Book(title, author, isbn);
        UI.addToBookList(book);
        store.addToLocalStorage(book);
        UI.clearField();
        UI.showAlert("Book added!","success");
    }
    

    e.preventDefault();
}

function removeBook(e){
    // UI.deleteFromBook(e.target);
    let tr = e.target;
    if(tr.hasAttribute('href')){
        tr.parentElement.parentElement.remove();
        UI.showAlert("Booked Removed",'success');
    }

    e.preventDefault();
}