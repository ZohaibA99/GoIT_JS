function doStuffWithBook(book) {
    // Doing something with parameters
    const {title, numberPages, downloads, rating, isPublic} = book;
    console.log(title);
    console.log(rating);

    // And so on
  }

  const books = 
    {
        title: "The Last Kingdom",
        numberPages: 736,
        downloads: 10283,
        rating: 8.6,
        isPublic: true,
      };
  
  // ❌ What is 736? What is 10283? What is true?
  doStuffWithBook(books);