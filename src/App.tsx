import { useState } from 'react'
import './App.css'
import { Book, type IBook } from './BookStack'
import BookForm from './BookForm'

const stack = new Book()

// mock data
stack.push({
  name: "Cien años de soledad",
  isbn: 314,
  author: "Gabriel García Márquez",
  editorial: "Sudamericana"
})

stack.push({
  name: "El nombre de la rosa",
  isbn: 671,
  author: "Umberto Eco",
  editorial: "Lumen"
})

stack.push({
  name: "Ficciones",
  isbn: 529,
  author: "Jorge Luis Borges",
  editorial: "Emecé Editores"
})

function App() {

  const [books, setBooks] = useState<IBook[]>(stack.getBooks())

  const addBook = (book: IBook) => {
    stack.push(book)
    setBooks([...stack.getBooks()])
  }

  return (
    <>
      <h1>Books Stack</h1>

      <BookForm addBook={addBook} />

      <h2>Stack of Books</h2>

      {books.map((book, index) => (
        <div key={index}>
          <p><b>Name:</b> {book.name}</p>
          <p><b>ISBN:</b> {book.isbn}</p>
          <p><b>Author:</b> {book.author}</p>
          <p><b>Editorial:</b> {book.editorial}</p>
          <hr />
        </div>
      ))}
    </>
  )
}

export default App