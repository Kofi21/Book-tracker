import { useState } from "react"

const BookForm = ({setBooks}) => {
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();
    
  }
}

export default BookForm