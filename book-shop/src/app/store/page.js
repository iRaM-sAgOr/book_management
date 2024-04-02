import React from 'react'
// import { getAllBooks } from '@/app/lib/fake-data'
import { getAllBooks } from '../db/queries';
import BookList from './ui/books/BookList';

async function BookListPage() {
  const books = await getAllBooks();
  return (
    <div>
      <BookList books={books} />
    </div>
  )
}

export default BookListPage