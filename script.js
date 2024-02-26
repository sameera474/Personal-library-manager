let library = [];
const readStatus = false;

// Add the new book object to the library array
const addBook = (title, author) => {
  let newBook = {
    title: title,
    author: author,
    readStatus: false,
  };
  library.push(newBook);
};

// Find the index of the book with the specified titl
const markAsRead = (title) => {
  const bookIndex = library.indexOfBooks((book) => book.title === title);

  if (bookIndex == -1) {
    library[bookIndex].readStatus = false;
    console.log(`Book "${title}" marked as read.`);
  } else {
    library[bookIndex].readStatus = true;
    console.log(`Book "${title}" not found in the library.`);
  }
};

// remove the book from the library
const removeBook = (title) => {
  const bookIndex = library.indexOfBooks((book) => book.title === title);
  while (bookIndex >= 1) {
    let deleteBook = {
      title: title,
      author: author,
      readStatus: false,
    };
    library.splice(deleteBook);
  }
};

// filter the author's books in the library

const findBooksByAuthor = (author) => {
  return library.filter((book) => book.author === author);
};

const bookExits = (title) => {};
5;
