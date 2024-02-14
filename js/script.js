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
        console.log(row)
        list.appendChild(row);

        //delete row by cllicking x:
        row.querySelector('.delete').addEventListener('click', (e) =>{
            list.removeChild(row);
            e.preventDefault();
        })
    }
    clearField(){
        document.querySelector('#title-input').value = '';
        document.querySelector('#author-input').value = '';
        document.querySelector('#isbn-input').value = '';
    }

    showAlert(message, className){
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
}


//addeventlistner
form.addEventListener('submit', addBook);


//Functions:
function addBook(e){
    let title = document.querySelector('#title-input').value;
    let author = document.querySelector('#author-input').value;
    let isbn = document.querySelector('#isbn-input').value;
    let ui = new UI();

    if (title==='' || author === '' || isbn === ''){
        ui.showAlert("Please fill up the form", "error")
    }
    else{
        let book = new Book(title,author,isbn);
        ui.addToBookList(book);
        ui.clearField();
        ui.showAlert("Successfully Book Added!", "success")
    }

    e.preventDefault();
}