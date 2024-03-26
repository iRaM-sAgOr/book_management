import React from 'react'
import BookCard from './BookCard'

function BookList({ books }) {
    return (
        <div className='grid grid-rows-2 grid-flow-col'>
            {
                books.map(book => {
                    return (
                        <BookCard book={book} />
                    )
                })
            }
        </div>
    )
}

export default BookList