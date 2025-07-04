import { Book } from "../model/book.model";

export const books: Book[] = [
  {
    "title": "The Lord of the Rings",
    "author": "J.R.R. Tolkien",
    "isbn": "978-0618260232",
    "pages": 1178,
    "publication_year": 1954,
    "genres": [
      "fantasy",
      "adventure"
    ],
    "currentStatus": "borrowed",
    "transactions": [
      {
        "userId": "user006",
        "borrowedDate": "2025-06-03T00:00:00",
      }
    ]
  },
  {
    "title": "Pride and Prejudice",
    "author": "Jane Austen",
    "isbn": "978-0141439518",
    "pages": 432,
    "publication_year": 1813,
    "genres": [
      "romance",
      "classic"
    ],
    "currentStatus": "available",
    "transactions": [
      {
        "userId": "user004",
        "borrowedDate": "2025-05-28T00:00:00",
        "returnedDate": "2025-06-12T00:00:00"
      },
      {
        "userId": "user008",
        "borrowedDate": "2025-05-25T00:00:00",
        "returnedDate": "2025-06-04T00:00:00"
      },
      {
        "userId": "user009",
        "borrowedDate": "2025-06-04T00:00:00",
        "returnedDate": "2025-06-24T00:00:00"
      }
    ]
  },
  {
    "title": "To Kill a Mockingbird",
    "author": "Harper Lee",
    "isbn": "978-0061120084",
    "pages": 336,
    "publication_year": 1960,
    "genres": [
      "classic",
      "coming-of-age"
    ],
    "currentStatus": "borrowed",
    "transactions": [
      {
        "userId": "user005",
        "borrowedDate": "2025-04-10T00:00:00",
      },
      {
        "userId": "user006",
        "borrowedDate": "2025-04-10T00:00:00",
        "returnedDate": "2025-04-18T00:00:00"
      }
    ]
  },
  {
    "title": "1984",
    "author": "George Orwell",
    "isbn": "978-0451524935",
    "pages": 328,
    "publication_year": 1949,
    "genres": [
      "dystopian",
      "science fiction"
    ],
    "currentStatus": "available",
    "transactions": [
      {
        "userId": "user007",
        "borrowedDate": "2025-05-31T00:00:00",
        "returnedDate": "2025-06-21T00:00:00"
      }
    ]
  },
  {
    "title": "The Great Gatsby",
    "author": "F. Scott Fitzgerald",
    "isbn": "978-0743273565",
    "pages": 180,
    "publication_year": 1925,
    "genres": [
      "classic",
      "tragedy"
    ],
    "currentStatus": "available",
    "transactions": [
      {
        "userId": "user007",
        "borrowedDate": "2025-04-28T00:00:00",
        "returnedDate": "2025-05-04T00:00:00"
      },
      {
        "userId": "user009",
        "borrowedDate": "2025-05-14T00:00:00",
        "returnedDate": "2025-05-19T00:00:00"
      }
    ]
  },
  {
    "title": "Brave New World",
    "author": "Aldous Huxley",
    "isbn": "978-0060850524",
    "pages": 288,
    "publication_year": 1932,
    "genres": [
      "dystopian",
      "science fiction"
    ],
    "currentStatus": "available",
    "transactions": [
      {
        "userId": "user002",
        "borrowedDate": "2025-05-29T00:00:00",
        "returnedDate": "2025-06-07T00:00:00"
      },
      {
        "userId": "user009",
        "borrowedDate": "2025-04-10T00:00:00",
        "returnedDate": "2025-04-20T00:00:00"
      }
    ]
  },
  {
    "title": "The Catcher in the Rye",
    "author": "J.D. Salinger",
    "isbn": "978-0316769488",
    "pages": 277,
    "publication_year": 1951,
    "genres": [
      "classic",
      "coming-of-age"
    ],
    "currentStatus": "borrowed",
    "transactions": [
      {
        "userId": "user001",
        "borrowedDate": "2025-04-07T00:00:00",
      },
      {
        "userId": "user004",
        "borrowedDate": "2025-05-22T00:00:00",
        "returnedDate": "2025-06-02T00:00:00"
      },
      {
        "userId": "user006",
        "borrowedDate": "2025-04-09T00:00:00",
        "returnedDate": "2025-04-19T00:00:00"
      }
    ]
  },
  {
    "title": "The Hobbit",
    "author": "J.R.R. Tolkien",
    "isbn": "978-0547928227",
    "pages": 310,
    "publication_year": 1937,
    "genres": [
      "fantasy",
      "adventure"
    ],
    "currentStatus": "borrowed",
    "transactions": [
      {
        "userId": "user003",
        "borrowedDate": "2025-05-07T00:00:00",
      },
      {
        "userId": "user001",
        "borrowedDate": "2025-05-21T00:00:00",
        "returnedDate": "2025-06-06T00:00:00"
      },
      {
        "userId": "user005",
        "borrowedDate": "2025-04-08T00:00:00",
        "returnedDate": "2025-04-18T00:00:00"
      }
    ]
  },
  {
    "title": "Moby-Dick",
    "author": "Herman Melville",
    "isbn": "978-1503280786",
    "pages": 720,
    "publication_year": 1851,
    "genres": [
      "adventure",
      "classic"
    ],
    "currentStatus": "available",
    "transactions": [
      {
        "userId": "user005",
        "borrowedDate": "2025-04-04T00:00:00",
        "returnedDate": "2025-04-11T00:00:00"
      },
      {
        "userId": "user005",
        "borrowedDate": "2025-05-10T00:00:00",
        "returnedDate": "2025-05-21T00:00:00"
      }
    ]
  },
  {
    "title": "Frankenstein",
    "author": "Mary Shelley",
    "isbn": "978-0486282114",
    "pages": 280,
    "publication_year": 1818,
    "genres": [
      "horror",
      "science fiction"
    ],
    "currentStatus": "borrowed",
    "transactions": [
      {
        "userId": "user002",
        "borrowedDate": "2025-06-11T00:00:00"
      },
      {
        "userId": "user010",
        "borrowedDate": "2025-04-21T00:00:00",
        "returnedDate": "2025-05-11T00:00:00"
      },
    ]
  },
  {
    "title": "Jane Eyre",
    "author": "Charlotte Bront\u00eb",
    "isbn": "978-0141441146",
    "pages": 532,
    "publication_year": 1847,
    "genres": [
      "romance",
      "gothic"
    ],
    "currentStatus": "available",
    "transactions": [
      {
        "userId": "user010",
        "borrowedDate": "2025-06-19T00:00:00",
        "returnedDate": "2025-07-08T00:00:00"
      },
      {
        "userId": "user007",
        "borrowedDate": "2025-05-16T00:00:00",
        "returnedDate": "2025-06-06T00:00:00"
      }
    ]
  },
  {
    "title": "The Brothers Karamazov",
    "author": "Fyodor Dostoevsky",
    "isbn": "978-0374528379",
    "pages": 796,
    "publication_year": 1880,
    "genres": [
      "philosophical",
      "classic"
    ],
    "currentStatus": "available",
    "transactions": [
      {
        "userId": "user005",
        "borrowedDate": "2025-06-08T00:00:00",
        "returnedDate": "2025-06-27T00:00:00"
      }
    ]
  },
  {
    "title": "Crime and Punishment",
    "author": "Fyodor Dostoevsky",
    "isbn": "978-0486415871",
    "pages": 671,
    "publication_year": 1866,
    "genres": [
      "psychological",
      "classic"
    ],
    "currentStatus": "borrowed",
    "transactions": [
      {
        "userId": "user008",
        "borrowedDate": "2025-04-05T00:00:00",
      },
      {
        "userId": "user004",
        "borrowedDate": "2025-06-10T00:00:00",
        "returnedDate": "2025-06-21T00:00:00"
      },
      {
        "userId": "user006",
        "borrowedDate": "2025-04-10T00:00:00",
        "returnedDate": "2025-04-24T00:00:00"
      }
    ]
  },
  {
    "title": "Anna Karenina",
    "author": "Leo Tolstoy",
    "isbn": "978-0143035008",
    "pages": 864,
    "publication_year": 1877,
    "genres": [
      "romance",
      "classic"
    ],
    "currentStatus": "available",
    "transactions": [
      {
        "userId": "user010",
        "borrowedDate": "2025-04-12T00:00:00",
        "returnedDate": "2025-04-21T00:00:00"
      },
      {
        "userId": "user003",
        "borrowedDate": "2025-05-18T00:00:00",
        "returnedDate": "2025-06-08T00:00:00"
      }
    ]
  },
  {
    "title": "The Picture of Dorian Gray",
    "author": "Oscar Wilde",
    "isbn": "978-0141439570",
    "pages": 254,
    "publication_year": 1890,
    "genres": [
      "gothic",
      "philosophical"
    ],
    "currentStatus": "borrowed",
    "transactions": [
      {
        "userId": "user005",
        "borrowedDate": "2025-04-08T00:00:00",
      }
    ]
  },
  {
    "title": "Wuthering Heights",
    "author": "Emily Bront\u00eb",
    "isbn": "978-0141439556",
    "pages": 416,
    "publication_year": 1847,
    "genres": [
      "romance",
      "gothic"
    ],
    "currentStatus": "borrowed",
    "transactions": [
      {
        "userId": "user005",
        "borrowedDate": "2025-05-03T00:00:00",
      },
      {
        "userId": "user009",
        "borrowedDate": "2025-06-02T00:00:00",
        "returnedDate": "2025-06-12T00:00:00"
      },
      {
        "userId": "user001",
        "borrowedDate": "2025-06-28T00:00:00",
        "returnedDate": "2025-07-07T00:00:00"
      }
    ]
  },
  {
    "title": "Fahrenheit 451",
    "author": "Ray Bradbury",
    "isbn": "978-1451673319",
    "pages": 194,
    "publication_year": 1953,
    "genres": [
      "dystopian",
      "science fiction"
    ],
    "currentStatus": "available",
    "transactions": [
      {
        "userId": "user003",
        "borrowedDate": "2025-06-15T00:00:00",
        "returnedDate": "2025-06-29T00:00:00"
      },
      {
        "userId": "user001",
        "borrowedDate": "2025-06-17T00:00:00",
        "returnedDate": "2025-06-25T00:00:00"
      },
      {
        "userId": "user003",
        "borrowedDate": "2025-05-04T00:00:00",
        "returnedDate": "2025-05-23T00:00:00"
      }
    ]
  },
  {
    "title": "Dracula",
    "author": "Bram Stoker",
    "isbn": "978-0486411095",
    "pages": 418,
    "publication_year": 1897,
    "genres": [
      "horror",
      "gothic"
    ],
    "currentStatus": "available",
    "transactions": [
      {
        "userId": "user001",
        "borrowedDate": "2025-05-11T00:00:00",
        "returnedDate": "2025-05-21T00:00:00"
      },
      {
        "userId": "user008",
        "borrowedDate": "2025-05-23T00:00:00",
        "returnedDate": "2025-05-30T00:00:00"
      },
      {
        "userId": "user007",
        "borrowedDate": "2025-04-10T00:00:00",
        "returnedDate": "2025-04-29T00:00:00"
      }
    ]
  },
  {
    "title": "Les Mis\u00e9rables",
    "author": "Victor Hugo",
    "isbn": "978-0451419439",
    "pages": 1463,
    "publication_year": 1862,
    "genres": [
      "historical",
      "classic"
    ],
    "currentStatus": "available",
    "transactions": [
      {
        "userId": "user004",
        "borrowedDate": "2025-04-27T00:00:00",
        "returnedDate": "2025-05-14T00:00:00"
      }
    ]
  },
  {
    "title": "Don Quixote",
    "author": "Miguel de Cervantes",
    "isbn": "978-0060934347",
    "pages": 992,
    "publication_year": 1605,
    "genres": [
      "satire",
      "classic"
    ],
    "currentStatus": "available",
    "transactions": [
      {
        "userId": "user001",
        "borrowedDate": "2025-06-29T00:00:00",
        "returnedDate": "2025-07-07T00:00:00"
      }
    ]
  },
  {
    "title": "The Count of Monte Cristo",
    "author": "Alexandre Dumas",
    "isbn": "978-0140449266",
    "pages": 1276,
    "publication_year": 1844,
    "genres": [
      "adventure",
      "historical"
    ],
    "currentStatus": "available",
    "transactions": [
      {
        "userId": "user004",
        "borrowedDate": "2025-05-29T00:00:00",
        "returnedDate": "2025-06-04T00:00:00"
      },
      {
        "userId": "user006",
        "borrowedDate": "2025-06-28T00:00:00",
        "returnedDate": "2025-07-10T00:00:00"
      },
      {
        "userId": "user010",
        "borrowedDate": "2025-04-24T00:00:00",
        "returnedDate": "2025-04-30T00:00:00"
      }
    ]
  },
  {
    "title": "A Tale of Two Cities",
    "author": "Charles Dickens",
    "isbn": "978-0486406510",
    "pages": 489,
    "publication_year": 1859,
    "genres": [
      "historical",
      "classic"
    ],
    "currentStatus": "borrowed",
    "transactions": [
      {
        "userId": "user009",
        "borrowedDate": "2025-04-05T00:00:00",
      },
      {
        "userId": "user007",
        "borrowedDate": "2025-04-11T00:00:00",
        "returnedDate": "2025-04-24T00:00:00"
      },
      {
        "userId": "user003",
        "borrowedDate": "2025-04-03T00:00:00",
        "returnedDate": "2025-04-17T00:00:00"
      }
    ]
  },
  {
    "title": "The Stranger",
    "author": "Albert Camus",
    "isbn": "978-0679720201",
    "pages": 123,
    "publication_year": 1942,
    "genres": [
      "philosophical",
      "existential"
    ],
    "currentStatus": "borrowed",
    "transactions": [
      {
        "userId": "user003",
        "borrowedDate": "2025-05-27T00:00:00",
      }
    ]
  }
]