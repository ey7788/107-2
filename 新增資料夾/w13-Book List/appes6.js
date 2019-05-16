class Book {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}

class UI {
    addBookToList(book) {
        const list = document.getElementById('book-list');
        //create an element 加入一個tr
        const row = document.createElement('tr');
        //insert cols 把tr裡面加入td 然後連結至html 連結必須使用`{}`
        row.innerHTML = `
              <td>${book.title}</td>
              <td>${book.author}</td>
              <td>${book.isbn}</td>
              <td><a class="delete" href="#">X</a></td>
    `;
        list.appendChild(row);
    }
    deleteBook(target) {
        if (target.className === 'delete') {
            target.parentElement.parentElement.remove();
            const ui= new UI;
            ui.showAlert('Book removed', 'success');
            
        }
    }

    clearFields() {
        document.getElementById('title').value = '';
        document.getElementById('author').value = '';
        document.getElementById('isbn').value = '';
    }
    // insertBefore 是將div 放在form的前面 下面的是設時間3秒結束 將alert的add給去掉
    showAlert(message, className) {
        const div = document.createElement('div');
        div.className = `alert ${className}`;
        div.appendChild(document.createTextNode(message));
        const container = document.querySelector('.container');
        const form = document.getElementById('book-form');
        container.insertBefore(div, form);

        setTimeout(function () {
            document.querySelector('.alert').remove();
        }, 3000);
    }
}


document.getElementById('book-form').addEventListener('submit', function (e) {

    //get form values 宣告他的值 給他一個id 後面是連結他的id位置 前面是名稱
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const isbn = document.getElementById('isbn').value;

    //Instantiate a book
    const book = new Book(title, author, isbn);

    //Instantiate UI
    const ui = new UI();

    if (title === '' || author === '' || isbn === '') {
        ui.showAlert('Please fill in all field.', 'error');
    } else {
        ui.addBookToList(book);

        ui.clearFields();
        //點擊顯示上面的文字
        ui.showAlert('Book Added!', 'success');
    }


    // 將呈現的成果給暫停 否則會顯示不出來
    e.preventDefault();
});

document.getElementById('book-list').addEventListener('click', function (e) {
    const ui = new UI();
    ui.deleteBook(e.target);

    

    e.preventDefault();
})