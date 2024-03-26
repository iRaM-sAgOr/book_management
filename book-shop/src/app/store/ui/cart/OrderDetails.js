'use client'
import React, { useContext } from 'react'
import { StoreContext } from '@/app/context'

function OrderDetails() {
  const { cartData } = useContext(StoreContext)
  const bookToBuy = cartData.filter((book) => {
    return book.type === 'Buy'
  })

  const priceToBuy = bookToBuy.reduce(
    (accumulator, book) => accumulator + book.sellPrice, 0
  )

  const bookToRent = cartData.filter((book) => {
    return book.type === 'Rent'
  })

  const priceToRent = bookToBuy.reduce(
    (accumulator, book) => accumulator + book.rentPrice, 0
  )

  return (
    <div className='w-full bg-white rounded-md px-8 py-6 mb-4'>
      <h3> OrderDetails</h3>
      {
        <ul>
          <li>Buying {bookToBuy.length} books for <strong>{priceToBuy}</strong> BDT</li>
          <li>Buying {bookToRent.length} books for <strong>{priceToRent}</strong> BDT</li>
          <li>Delivery Charge <strong>30</strong> BDT</li>
        </ul>
      }
      <div>
        <p className='border-t-2 pt-2'>Totla Amount to Pay</p>
        <p className='text-2xl ml-10'>{priceToBuy + priceToRent + 30} BDT</p>
      </div>
    </div>
  )
}

export default OrderDetails