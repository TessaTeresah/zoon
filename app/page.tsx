import Image from "next/image";
import React from 'react';
import Navbar from  "@/components/ui/Navbar";
import Contact from "@/components/ui/contact";




export default function Home() {
  return (
   
   <section >
  <div className="xl:w-10/12 xl:mx-auto  ">
    <Navbar/>
  </div>
  <div className="flex justify-end">
    
    <Contact/>
    
  </div>
   
   
   </section>
  );
}
