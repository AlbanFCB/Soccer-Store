import { resetCart } from '@/redux/shopperSlice';
import Link from 'next/link'
import React from 'react'
import { useDispatch } from 'react-redux'

const SuccessPage = () => {
    const dispatch = useDispatch();
  return (
    <div className="flex flex-col gap-2 items-center justify-center">
        <h1 className="text-2xl text-hoverBg font-semibold">Thank you for shopping in Soccer Store</h1>
       <Link href='/'>
            <button 
            className="text-lg text-lightText hover:underline underline-offset-4 decoration-[1px] hover:text-blue duration-300"
            onClick={() => dispatch(resetCart())}
            >
                Continue Shopping
            </button>
       </Link>
    </div>
  )
}

export default SuccessPage