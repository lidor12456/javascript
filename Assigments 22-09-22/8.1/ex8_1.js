const book = {
    name : "bla",
    autor : "me",
    publish : "1992"
}

const descrip = (book) => {
    console.log(
        'The book' + " " + book.name + " "  + 'was written by' + " "  + book.autor + " "  + 'in the year'  + " "  + book.publish
        );
}
descrip(book);