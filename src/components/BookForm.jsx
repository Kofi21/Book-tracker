import { useState } from "react"

const BookForm = ({setBooks}) => {
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() || !author.trim()) 
    return

    const newBook = {
      id: Date.now(),
      title,
      author,
      read: false,
    }

    setBooks(prev => [...prev, newBook])
    setTitle('')
    setAuthor('')
  }

  return (
    <form onSubmit={handleSubmit} className="book-form">
      <input 
        type="text"
        placeholder="Book Title"
        value={title}
        onChange={e => setTitle(e.target.value)}
        required
      />
    <input 
      type="text"
      placeholder="Author"
      value={author}
      onChange={e => setAuthor(e.target.value)}
      required
    />
    <button type="submit">Add Book</button>
    </form>
  )
}

export default BookForm