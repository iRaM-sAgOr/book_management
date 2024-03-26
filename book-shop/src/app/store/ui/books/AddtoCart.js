'use client'
import React from 'react'
import { ShoppingCartIcon } from '@heroicons/react/24/solid'
import { toast } from 'react-toastify'
import { useContext } from 'react'
import { StoreContext } from '@/app/context'

function AddtoCart({ book }) {
    const { cartData, setCardData } = useContext(StoreContext)

    const handleCart = (event, reason) => {
        event.preventDefault();
        const newData = { ...book, type: reason }
        const alreadyFound = cartData.find((book) => {
            return book.id === newData.id
        })
        console.log(alreadyFound)
        if (!alreadyFound) {
            setCardData([...cartData, newData])
            console.log(cartData)
            toast(`Added ${newData.title} to the cart`, {
                autoClose: 1000,
                position: "top-right"
            })
        } else {
            toast(`OOPs!! already added to the cart`, {
                autoClose: 1000,
                position: "top-right"
            })
        }
    }
    return (
        <>
            <form className='flex flex-row space-x-2 mt-2'>
                <button onClick={(event) => handleCart(event, 'Buy')} className='flex flex-row justify-center items-center space-x-1 bg-purple-500  hover:bg-purple-700 text-white font-bold  px-2 py-1 rounded-sm'>
                    <ShoppingCartIcon className='inline mr-0.5 w-3' />
                    <p>to Buy</p>
                </button>
                <button onClick={(event) => handleCart(event, 'Rent')} className='flex flex-row justify-center items-center space-x-1 bg-purple-500 hover:bg-purple-700 text-white font-bold px-2 py-1 rounded-sm'>
                    <ShoppingCartIcon className='inline mr-0.5 w-3' />
                    <p>to Rent</p>
                </button>
            </form></>
    )
}

export default AddtoCart