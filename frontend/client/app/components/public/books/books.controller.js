import _ from 'lodash';


class BooksController {
    constructor($state, Books) {
        var vm = this;
        vm.title = 'Books';
        vm.filter="";

        vm.booksArray = [ ];
        vm.Books = Books;
        vm.getBooks();

        vm.openBookCard = function (id) {
            $state.go('viewbook', {bookId: id});
        }

    }

    getBooks() {
	  this.Books.get()
		.then(() => {
			this.booksArray = this.Books.getState();
            this.amount=this.booksArray.length;
            console.log(this.booksArray);
		});
  }

}
export { BooksController };
