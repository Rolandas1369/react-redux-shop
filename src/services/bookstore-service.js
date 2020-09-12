export default class BooktoreService {
  // get data from service

  data = [
    {
      id: "1",
      title: "Big book",
      author: "Some Author",
      price: 32,
      CoverImage:
        "https://upload.wikimedia.org/wikipedia/commons/3/35/Latin_letter_%C5%A0%C5%A1.png",
    },
    {
      id: "2",
      title: "Big book2",
      author: "Some Author2",
      price: 50,
      CoverImage:
        "https://upload.wikimedia.org/wikipedia/commons/3/35/Latin_letter_%C5%A0%C5%A1.png",
    },
  ];
  getBooks() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(this.data);
      }, 700);
    });
  }
}
