# Book-Library API

In this project, I challenged myself to create a very basic Book Directory REST Api using Nodejs. Definitely had to learn Javascript.

From this api, you can get all books, get a book by id, search a book by genre, create a new book, replace an existing book or update it.And of course delete an existing book from the directory. 

It exposes endpoints using the four most basic methods: `GET`, `POST`, `PUT` and `DELETE`. 

Consuming the Api : access via ` /api `
=================

#### Get all books
URL: /api/books

Method: GET

Response:
```json
[
    {
        "read": false,
        "_id": "5f56634e238e0a90a40a67a0",
        "title": "War and Peace",
        "genre": "Historical Fiction",
        "author": "Lev Nikolayevich Tolstoy",
        "links": {
            "self": "..../api/books/5f56634e238e0a90a40a67a0"
        }
    },
    {
        "read": false,
        "_id": "5f56634e238e0a90a40a67a1",
        "title": "Les Misérables",
        "genre": "Historical Fiction",
        "author": "Victor Hugo",
        "links": {
            "self": ".../api/books/5f56634e238e0a90a40a67a1"
        }
    },
    {
        "read": false,
        "_id": "5f56634e238e0a90a40a67a2",
        "title": "The Time Machine",
        "genre": "Science Fiction",
        "author": "H. G. Wells",
        "links": {
            "self": ".../api/books/5f56634e238e0a90a40a67a2"
        }
    },
    {
        "read": false,
        "_id": "5f56634e238e0a90a40a67a3",
        "title": "A Journey into the Center of the Earth",
        "genre": "Science Fiction",
        "author": "Jules Verne",
        "links": {
            "self": "..../api/books/5f56634e238e0a90a40a67a3"
        }
    },
   . .. . ..
 
    {
        "read": false,
        "_id": "5f56634e238e0a90a40a67a7",
        "title": "Childhood",
        "genre": "Biography",
        "author": "Lev Nikolayevich Tolstoy",
        "links": {
            "self": ".../api/books/5f56634e238e0a90a40a67a7"
        }
    }
]
```

#### Get a book by id:
URL: /api/books/{bookId}   e.g api/books/5f56634e238e0a90a40a67a0

```json
{
    "read": false,
    "_id": "5f56634e238e0a90a40a67a0",
    "title": "War and Peace",
    "genre": "Historical Fiction",
    "author": "Lev Nikolayevich Tolstoy",
    "links": {
        "FilterByThisGenre": ".../api/books/?genre=Historical Fiction"
    }
}
```
#### Search a book by genre:
METHOD: GET

URL: /api/books/   e.g: /api/books?genre=genre_name 

RequestHeaders: genre=<Genre Name>
    
```text
e.g : /api/books?genre=History
```

Response:
```json
[
    {
        "read": false,
        "_id": "5f56634e238e0a90a40a67a6",
        "title": "Life On The Mississippi",
        "genre": "History",
        "author": "Mark Twain",
        "links": {
            "self": ".../api/books/5f56634e238e0a90a40a67a6"
        }
    }
]
```

#### Add a new book:
URL: /api/books 

METHOD: POST

Body
```json
{
                          
    "title": "Idah K's AutoBiography",
    "genre": "Science",
    "author": "Idah Koome"
}
```
Response
```json
{
    "read": false,
    "_id": "5f5669cb9a9f9721e08b2446",
    "title": "SQL for Devs",
    "genre": "Science",
    "author": "Idah Koome"
}
```
#### Update details of a book
URL: /api/books/{bookId}    e.g: /api/books/5f566ba49a9f9721e08b2449

METHOD: PATCH


Body
```json
{
        "title": "Idah's Biography"	
}
```
Response
``json
{
    "read": false,
    "_id": "5f566ba49a9f9721e08b2449",
    "title": "Idah's Biography",
    "genre": "Science",
    "author": "Idah Koome",
    "__v": 0
}
``

Body
```json
{
        "read": true
}
```
Response
```json
{
    "read": true,
    "_id": "5f566ba49a9f9721e08b2449",
    "title": "Idah's Biography",
    "genre": "Science",
    "author": "Idah Koome",
    "__v": 0
}
```
####  Delete a book record from directory
URL: /api/books/{bookId}   e.g: /api/books/5f566ba49a9f9721e08b2449

METHOD: DELETE


 
