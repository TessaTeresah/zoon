import Link from "next/link";
import { Container } from "postcss";
import React from "react";
import { MdOutlineMail } from "react-icons/md";
import { PiPhoneBold } from "react-icons/pi";

const Contact = () => {
  return (
    <section>
       <div className=" xl:container mx-auto mb-32">
      <div className="box-input">
        <h1 className="text-5xl sm:text-7xl text-white uppercase pt-12">
         
        </h1>
      </div>
      <div className="px-4 sm:w-2/3 ld:w-3/2 mx-auto">
        <div className="rounded-lg shadow-lg bg-white -mt-24 py-10 md:py-12 px-4 md:px-6">
            <div className="grid grid-cols-2 gap-x-6 mb-12 mx-auto">
               
               <MdOutlineMail/>
               {/* Email us  */}
              
              <PiPhoneBold/>
               {/*Call us*/}
               
              
              
                 
                
            </div>
          <form>
            <h2>Contact form</h2>
            <div className="">
              <label>Full Name</label>
              <input type="text" className="field" placeholder="Enter your name" required/>
            </div>
            <div className="">
              <label>Email Address</label>
              <input type="email" className="field" placeholder="Enter your email" required/>
            </div>
            <div className="">
              <label>Your Message</label>
              <input name="id" className="field mess" placeholder="Enter your message" required/>
            </div>
            

          </form>
        </div>
      </div>
    </div>
    </section>
   
  );
};

export default Contact;
