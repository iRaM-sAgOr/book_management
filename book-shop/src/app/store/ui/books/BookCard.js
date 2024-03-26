import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { ArchiveBoxIcon, CurrencyBangladeshiIcon } from '@heroicons/react/24/solid'
import AddtoCart from './AddtoCart'

function BookCard({ book }) {
    return (
        <Link href={`/store/${book.id}`}>
            <div className='flex flex-col items-center rounded-xl bg-gray-50 p-4 m-2'>
                <p className='p-2'>{book.title}</p>
                <Image
                    src={book.cover}
                    alt={book.title}
                    width={150}
                    height={150}
                    style={{ height: '200px', width: 'auto' }}
                    priority={true}
                />
                <div className='flex flex-row justify-center items-center mt-2 mb-2 '>
                    <p className='flex mr-2 space-x-1'>
                        <ArchiveBoxIcon className='w-4' />
                        {book.stock} in stock
                    </p>
                    <p className='flex'>
                        <CurrencyBangladeshiIcon className='w-5' />
                        {book.sellPrice} to buy
                    </p>
                </div>
                <div className='flex flex-col justify-center items-center'>
                    <p>Rend for {book.rentPrice} Taka per month</p>
                    <p>Currently {book.isRented ? `${(book.renterIds).length} users have ` : 'no one has'} rented this book</p>
                </div>
                <div>
                    <AddtoCart book={book}/>
                </div>
            </div>
        </Link>
    )
}

export default BookCard