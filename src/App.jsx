import { useState } from 'react'
import BookForm from './components/BookForm'
import BookList from '/components/BookList'
import './App.css'

function App() {
  const [books, setBooks] = useState([])

  return (
<div className='app'>
  <h1>📚 Book Tracker</h1>
  <BookForm setBooks={setBooks}/>
  <BookList books={books} setBooks={setBooks}/>
</div>
  )
}

export default App
