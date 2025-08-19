import React from 'react'
import { motion } from "motion/react"
import { LuFileSpreadsheet } from "react-icons/lu";
import { LuDownload } from "react-icons/lu";
import { IoCloseSharp } from "react-icons/io5";

function Card({data, reference}) {
  return (
    <motion.div drag dragConstraints={reference} whileDrag={{scale: 1.2}} dragElastic={.05} dragTransition={{ bounceStiffness: 300, bounceDamping: 10}} className='relative w-52 h-66 rounded-[37px] flex-shrink-0 bg-zinc-700 text-white py-8 px-5 overflow-hidden'>
        <LuFileSpreadsheet color='#38c4f3'/>
        <p className='font-[Poppins] text-md mt-5'>{data.desc}</p>
        <div className='footer absolute bottom-0 w-full left-0'>
          <div className='flex justify-between items-center mb-2 py-3 px-6'>
            <h5>{data.fileSize}</h5>
            <span className='w-6 h-6 bg-cyan-800 rounded-full flex items-center justify-center'>
              {data.close ? <IoCloseSharp color='#fff' size=".85em"/> : <LuDownload color='#fff' size=".7em"/>}
              </span>
          </div>
          {data.tagDetails.isOpen && (
            <div className={`tag w-full py-4 ${data.tagDetails.tagColor === "blue" ? "bg-blue-600" : "bg-green-600"} flex justify-center items-center`}>
              <h3 className='text-md font-semibold'>{data.tagDetails.tagTitle}</h3>
            </div>
          )}
        </div>
    </motion.div>
  )
}

export default Card