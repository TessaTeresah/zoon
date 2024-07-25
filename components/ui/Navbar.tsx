import React from 'react'
import { FaFacebook, FaTwitterSquare } from 'react-icons/fa'
import { Button } from "@/components/ui/button"
import { FiMenu } from 'react-icons/fi'


const navbar = () => {
  return (

    <div className='bg-black text-white xl:mx xl:w-10/12 w-full align-middle '>
        <div className='flex p-4 justify-between'>
            <div className=''>zoon</div>
            <div className='flex gap-3 flex-row '>
                <FiMenu/>
                <FaTwitterSquare/>
               <FaFacebook/> 
            </div>
        </div>
    </div>
  )
}

export default navbar