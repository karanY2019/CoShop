import Link from 'next/link'
import { useState, useEffect } from 'react'
import { FaTimes, FaLongArrowAltRight } from 'react-icons/fa'
import { SiteContext, ContextProviderComponent } from '../context/mainContext'
import DENOMINATION from '../utils/currencyProvider'
import { slugify } from '../utils/helpers'
import QuantityPicker from '../components/QuantityPicker'
import Image from '../components/Image'
import Head from 'next/head'
import CartLink from '../components/CartLink'

export default function MultiCart() {
    return (
    
    <>
    <CartLink />
      <div className="flex flex-col items-center pb-10">
        <Head>
          <title>Jamstack ECommerce - Cart</title>
          <meta name="description" content={`Jamstack ECommerce - Shopping cart`} />
          <meta property="og:title" content="Jamstack ECommerce - Cart" key="title" />
        </Head>
        <div className="
          flex flex-col w-full
          c_large:w-c_large
        ">
          <div className="pt-10 pb-8">
            <h1 className="text-3xl font-light">Lead User's Cart</h1>
          </div>
        </div>
    </div>

    <div className="border-b py-0.1" >
        <div className="flex items-center hidden md:flex">
          <Image className="w-32 m-0" src="/products/egg.png" alt='item 1' />
          <p className="m-0 pl-10 text-gray-600 w-60">
            $5</p> 
        </div> 
        
        <div className="flex items-center hidden md:flex">
          <Image className="w-32 m-0" src="/products/meat.png" alt='item 1' />                
          <p className="m-0 pl-10 text-gray-600 w-60">
            $12.8 </p>
        </div>
        <div className="flex items-center hidden md:flex">
          <Image className="w-32 m-0" src="/products/chip.png" alt='item 1' />                
          <p className="m-0 pl-10 text-gray-600 w-60">
            $2.45 </p>
        </div>
        <div className="flex items-center hidden md:flex">
          <Image className="w-32 m-0" src="/products/cream.png" alt='item 1' />                
          <p className="m-0 pl-10 text-gray-600 w-60">
            $9.89 </p>
        </div>
        <div className="flex items-center hidden md:flex">
          <Image className="w-32 m-0" src="/products/fruit corn.png" alt='item 1' />                
          <p className="m-0 pl-10 text-gray-600 w-60">
            $0.99 </p>
        </div>
    </div>

    <div className="
          flex flex-col w-full
          c_large:w-c_large
        ">
          <div className="pt-10 pb-8">
            <h1 className="text-3xl font-light"> David's Cart (Collaborator 1) </h1>
          </div>

          <div className="border-b py-0.1" >
        <div className="flex items-center hidden md:flex">
          <Image className="w-32 m-0" src="/products/bacon.png" alt='item 1' />
          <p className="m-0 pl-10 text-gray-600 w-60">
            $6.67</p> 
        </div> 

        <h1 className="text-2xl font text-green-600">Total: $37</h1>
        
        
    </div>

    <div className="
          flex flex-col w-full
          c_large:w-c_large
        ">
    <h1 className="text-2xl font text-green-600">Exceeded Minimum Free Delivery Fee !</h1>
          
    <Link href="/checkout" className="flex flex-1 justify-end">
              <a aria-label="Check out">
                <div className="cursor-pointer flex items-center">
                <h1 className="text-2xl font text-yellow-600">Proceed to final check out</h1>
                  <FaLongArrowAltRight className="text-yellow-600" />
                </div>
              </a>
    </Link> 
    </div>
    </div>
    
    


            {/* <Link href={`/product/${slugify(item.name)}`}>
                <a aria-label='item1'>
                <Image className="w-32 m-0" src="/products/collab.jpg" alt={item.name} />
                </a>
            </Link> */}
    
    
        
    
    </>
    )
  }
