
var Books = ['Physics','Mathematics','Chemistry'];
var RentedBooks = ['Biology'];
const BookLending = {
    AvailableBooks: () => {
                     return Books;
                  },

    AddBooks: (book) => {
        Books.push(book);
    },              

    RentBooks: () => {
            
        for(let i = 0; i < Books.length; i++) {
                     if(Books[i].includes('Physics')) {
                         var rentbook = Books[i].includes('Physics');
                         if(rentbook == true){
                            Books.splice(0, 1);
                            RentedBooks.push('Physics');
                            return "You have successfully rented Physics Book"
                            
                                // Rented: RentedBooks,
                                // Available: Books
                         } 
                     
                        }
                    }
    },
    ReturnBooks: () => {
            if(RentedBooks.includes('Biology')) {
                var pickbook = RentedBooks.includes('Biology');
                if(pickbook){
                   RentedBooks.splice(0, 1);
                   Books.push('Biology');
                   
            
               return "You have successfully returned Biology Book" 
                //    Rent: RentedBooks,
                //    NowAvailable: Books
                
            } 
               }
            
    }
};
module.exports = BookLending;


