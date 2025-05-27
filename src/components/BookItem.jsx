const BookItem = ({book, setbooks}) => {
  const toggleRead = () => {
    setbooks(prev => 
      prev.map(b => (b.id === book.id ? { ...b, read: !b.read } : b))
    )
  }

  const deleteBook = () => {
    setbooks(prev => prev.filter(b => b.id !== book.id))
  }

 
  return (
    <li className={`book-item ${book.read ? 'read' : ''}`}>
      <span>
        <strong>{book.title}</strong> by {book.author}
      </span>
      <div>
        <button onClick={toggleRead}>
          {book.read ? 'Unread' : 'Read'}
        </button>
        <button onClick={deleteBook} className="delete">Delete</button>
      </div>
    </li>
  );
}

export default BookItem