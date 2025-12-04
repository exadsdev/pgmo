import React from 'react'
import Image from 'next/image'
import './home.css'

import Link from 'next/link';
export default function Item() {
    const urls = process.env.SHOP_URL || 'https://shop-ordered.pgmobilev9.com';
  return (
    <>
 
   <div className="box container p-0">
    <div className="item">
     <Link href={`${urls}/cart.php?id=1&ref=mobile`}><Image src={`${urls}/img/phone/1.jpg`} alt="โทรศัพท์มือถือ PG รุ่น V9" width={300} height={200} /></Link>
    </div>
    <div className="item">
        <Link href={`${urls}/cart.php?id=2&ref=mobile`}><Image src={`${urls}/img/phone/2.jpg`} alt="โทรศัพท์มือถือ PG รุ่น V9 Pro" width={300} height={200} /></Link>
    </div>
    <div className="item">
        <Link href={`${urls}/cart.php?id=3&ref=mobile`}><Image src={`${urls}/img/phone/3.jpg`} alt="โทรศัพท์มือถือ PG รุ่น V9 Lite" width={300} height={200} /></Link>        
    </div>
    <div className="item">
        <Link href={`${urls}/cart.php?id=4&ref=mobile`}><Image src={`${urls}/img/phone/4.jpg`} alt="โทรศัพท์มือถือ PG รุ่น V9 Max" width={300} height={200} /></Link>        
    </div>
     <div className="item">
        <Link href={`${urls}/cart.php?id=5&ref=mobile`}><Image src={`${urls}/img/phone/5.jpg`} alt="โทรศัพท์มือถือ PG รุ่น V9 Ultra" width={300} height={200} /></Link>
    </div>
     <div className="item">
        <Link href={`${urls}/cart.php?id=6&ref=mobile`}><Image src={`${urls}/img/phone/6.jpg`} alt="โทรศัพท์มือถือ PG รุ่น V9 Mini" width={300} height={200} /></Link>
    </div>


   </div>
    </>
  )
}
