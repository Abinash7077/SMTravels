import React from 'react';
import Link from 'next/link';
const Footer = () => {
  return (
    <div className="bg-slate-900 object-contain w-full h-[350px]">
      <div className="grid w-[80%] mx-auto gap-4  grid-cols-4">
        <div className="flex gap-4 text-white py-10 flex-col">
          <h3 className='font-bold text-2xl text-orange-500'>Let's Travel</h3>
          <p className='text-sm'>We have been providing risk less and safe tour from years.</p>
        </div>
        <div className="flex gap-4 py-10 flex-col">
          <h3 className='font-bold text-2xl text-orange-500'>Gallery</h3>
          <nav>
            <ul className='grid grid-cols-3  text-sm text-white  gap-2'>
             <li>
              <img src='/Images/puri.jpg' className='w-[100px] h-[80px] rounded-md ' alt="" />
             </li>
             <li>
              <img src='/Images/konark.jpg' className='w-[100px] h-[80px] rounded-md ' alt="" />
             </li>
             <li>
              <img src='/Images/baladevjew.jpg' className='w-[100px] h-[80px] rounded-md ' alt="" />
             </li>
             <li>
              <img src='/Images/chandipur.jpg' className='w-[100px] h-[80px] rounded-md ' alt="" />
             </li>
             <li>
              <img src='/Images/chilika.jpg' className='w-[100px] h-[80px] rounded-md ' alt="" />
             </li>
             <li>
              <img src='/Images/apollo.jpg' className='w-[100px] h-[80px] rounded-md ' alt="" />
             </li>
            </ul>
          </nav>
        </div>
        <div className="flex gap-4 py-10 flex-col">
          <h3 className='font-bold text-2xl text-orange-500'>Company</h3>
          <nav>
            <ul className='flex text-sm text-white  flex-col gap-4'>
              <li className='hover:text-orange-500'>
                <Link href='/'>Home</Link>
              </li>
              <li className='hover:text-orange-500'>
                <Link href='/'>About Us</Link>
              </li>
              <li className='hover:text-orange-500'>
                <Link href='/'>Services</Link>
              </li>
              <li className='hover:text-orange-500'>
                <Link href='/'>Blog</Link>
              </li>
              <li className='hover:text-orange-500'>
                <Link href='/'>Contact Us</Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="flex gap-4 py-10 flex-col">
          <h3 className='font-bold text-2xl text-orange-500'>Top Packages</h3>
          <nav>
            <ul className='flex text-sm text-white  flex-col gap-4'>
              <li className='hover:text-orange-500'>
                <Link href='/'>Jagannath temple</Link>
              </li>
              <li className='hover:text-orange-500'>
                <Link href='/'>Goa</Link>
              </li>
              <li className='hover:text-orange-500'>
                <Link href='/'>SCB MCH</Link>
              </li>
              <li className='hover:text-orange-500'>
                <Link href='/'>KIIMS</Link>
              </li>
              <li className='hover:text-orange-500'>
                <Link href='/'>Konark Temple</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Footer;
