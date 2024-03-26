import React from 'react'
import { getAllBooks } from '@/app/lib/fake-data'
import BookList from './ui/books/BookList';

function BookListPage() {
  const books = getAllBooks();
  return (
    <div>
      <BookList books={books} />
    </div>
  )
}

export default BookListPage