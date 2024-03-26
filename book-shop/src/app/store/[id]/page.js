import React from 'react'
import { getBookById } from '@/app/lib/fake-data'

function BookDetails({ params: { id } }) {
    console.log(id)
    const book = getBookById(id)
    console.log('0', book)
    return (
        <div>Book Details for {id} book</div>
    )
}

export default BookDetails