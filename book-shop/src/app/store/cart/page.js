import React from 'react'
import OrderDetails from '../ui/cart/OrderDetails'
import Payment from '../ui/cart/Payment'

function page() {
    return (
        <div className='ml-3 mt-2'>
            <h3 className='text-3xl'>Welcome Mr.X</h3>
            <p className='text-xl text-zinc-600 pt-2'>Thanks a lot for purchase. Please complete the checkout process by paying for your orders</p>
            <div className='flex flex-wrap justify-around mt-3'>
                <OrderDetails />
                <Payment />
            </div>
        </div>
    )
}

export default page