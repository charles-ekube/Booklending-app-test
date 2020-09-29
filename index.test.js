const BookLending = require('./index');

test('Shows the user books available for rent', ()=> {
    expect(BookLending.AvailableBooks()).toEqual(['Physics','Mathematics','Chemistry'])
});

test('Allows the user rent a book ', ()=>{
    expect(BookLending.RentBooks(0)).toMatch(/You have successfully rented Physics Book/i);
});


test('Allows the user return a book ', ()=>{
    expect(BookLending.ReturnBooks(0)).toMatch(/You have successfully returned Biology Book/i);
});