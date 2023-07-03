import React from 'react'
import { UseMediaQueryHook } from '../useMediaQueryHook';
import Image from 'next/image'

export default function MarketStories({open}:any) {
    const mobile = UseMediaQueryHook("(max-width: 640px)");
  
  return (
    <div>
        <div className='text-red-500 ml-20 mt-2 mb-2 font-medium' >
            MARKET STORIES

        </div>
       
    <div className={
        (()=>{
            if(mobile){
                return 'grid  grid-cols-1 gap-10 ml-20 '
            }
            else{
                if(open){
                    return 'grid  grid-cols-2 gap-10 ml-20 '
                }
                else{
                    return 'grid  grid-cols-1 gap-10 ml-20 '
                }
            }
        })()
    } >

       
        {
            new Array(open?6:3).fill(0).map((_, i) => (
                < div key={i} className=' relative h-[200px] rounded-lg' >
                    <Image 
                     alt='blog'
                    className='h-[100%] rounded-lg'
                     src="https://bsmedia.business-standard.com/_media/bs/img/article/2023-03/27/full/1679907304-0203.jpg"
                    height={200}
                    width={300}
                    />
                    <div className='absolute bottom-0  font-medium px-8 black-glass rounded-lg  '>
                        Lorem ipsum dolor sit amet consec tetur adipisicing elit. Iste, volup tatum! Quisquam
                    </div>

                </div>
            
            ))
        }
    </div>
    </div>
  )
}
