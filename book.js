//native web component

// Create class for element
class Book extends HTMLElement{
        constructor() {
            super();
        }

        set book(book){

            this.innerHTML = `
                <div class="card">
                    <div class="title">${book.title}</div>
                <div class="card-body">
                    <h5 class="author">${book.author}</h5>
                    <p class="description">${book.description}</p>
                </div>
                </div>
                    `;
            }
        }


customElements.define('mit-book', Book);