var library = [
  {
    title: 'Bill Gates',
    author: 'The Road Ahead',
    readingStatus: true
  },
  {
    title: 'Steve Jobs',
    author: 'Walter Isaacson',
    readingStatus: true
  },
  {
    title: 'Mockingjay: The Final Book of The Hunger Games',
    author: 'Suzanne Collins',
    readingStatus: false
  }];

for (let i = 0; i < library.length; i++) {
  let book = library[i].title + "by " + library[i].author;
  if (library[i].readingStatus) {
    console.log('You have read ' + book)
  } else {
    console.log("You haven\'t read "+ book)

  }
}