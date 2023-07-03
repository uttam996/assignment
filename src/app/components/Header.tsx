import Image from "next/image";
import React from "react";
import { UseMediaQueryHook } from "../useMediaQueryHook";

export default function Header() {
  const mobile = UseMediaQueryHook("(max-width: 640px)");
  return (  
    <header className="text-gray-600 body-font p-3 w-full bg-white">
      <div className=" flex items-center justify-between">
        <div className="flex w-[70%]">
          <Image
            src="https://www.goindiastocks.com/Content/assets/images/logewithname.png"
            alt="Go India Stocks"
            width={60}
            height={70}
          />
          <input
            className="bg-gray-100 ml-10 rounded border border-gray-500 focus:outline-none focus:border-gray-500 text-base w-[90%] "
            
            type="text"
            
          />

        </div>
        {
          !mobile && (

        
        <div className=" justify-between w-[400px] flex">
          <h2 className="w-[100px] grid place-items-center font-medium">Contact Us</h2>
          <button className=" p-3 border-2 rounded w-[130px] font-medium">
            Login
          </button>

          <button className="p-3 border-2 rounded w-[130px] font-medium">
            Sign Up
          </button>
        </div>
        )}
        {
          mobile && (
            // add useer avatar 
            <div className="w-[100px] grid place-items-center font-medium">
              <Image 
              alt="user avatar"
              height={40}
              width={40}
              
              src="https://dummyimage.com/104x104" className="w-10 h-10 rounded-full flex-shrink-0 object-cover object-center" />
             
            </div>
          )
        }
      </div>
    </header>
  );
}
