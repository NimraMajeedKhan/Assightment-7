import React from 'react'
import Link from 'next/link'
const Header = () => {
  return (
    <div >
        <div className=' flex justify-evenly fixed top-0 right-32 gap-10'>
            <div className='h-[70px] w-[250px] border border-white outline outline-2 rounded-[10px] hover:outline-green-800 hover:bg-white hover:text-[#4f772d]  bg-[#4F772D] flex justify-center items-center ]'><Link href="#sindh" className='font-bold'>Sindh</Link></div>
            <div className='h-[70px] w-[250px] border border-white outline outline-2 rounded-[10px] hover:outline-green-800 hover:bg-white hover:text-[#4f772d]   bg-[#4F772D] flex justify-center items-center'><Link href="#punjab" className='font-bold'>Punjab</Link></div>
            <div className='h-[70px] w-[250px] border border-white outline outline-2 rounded-[10px] hover:outline-green-800 hover:bg-white hover:text-[#4f772d]  bg-[#4F772D] flex justify-center items-center'><Link href="#gilgit" className='font-bold'>Gilgit Baltistan</Link></div>
            <div className='h-[70px] w-[250px] border border-white outline outline-2 rounded-[10px] hover:outline-green-800 hover:bg-white hover:text-[#4f772d]   bg-[#4F772D] flex justify-center items-center'><Link href="#khyber" className='font-bold'>Khyber PakhtunKhwa</Link></div>
            <div className='h-[70px] w-[250px] border border-white outline outline-2 rounded-[10px] hover:outline-green-800 hover:bg-white hover:text-[#4f772d]   bg-[#4F772D] flex justify-center items-center'><Link href="#balochistan" className='font-bold'>Balochistan</Link></div>
        </div>

    </div>

  ) 
}

export default Header