import './styles/app.css';
import UI from './UI';

document.addEventListener('DOMContentLoaded', e => {
  const ui = new UI();
  ui.renderBooks();
});

document.getElementById('book-form')
  .addEventListener('submit', e => {

    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const isbn = document.getElementById('isbn').value;
    const image = document.getElementById('image').files;

    const formData = new FormData();
    formData.append('title', title);
    formData.append('author', author);
    formData.append('isbn', isbn);
    formData.append('image', image[0]);

    const ui = new UI();
    ui.addNewBook(formData);
    ui.renderMsg('New Book Added', 'success', 3000);

    e.preventDefault();
  });

document.getElementById('books-cards')
  .addEventListener('click', e => {
    if (e.target.classList.contains('delete')) {
      const ui = new UI();
      ui.deleteBook(e.target.getAttribute('_id'));
      ui.renderMsg('Book Deleted', 'danger', 3000);
    }
    e.preventDefault();
  });
