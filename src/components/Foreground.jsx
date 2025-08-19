import React, { useState, useRef } from 'react'
import Card from './Card'

function Foreground() {
  const ref = useRef(null);
  const data = [
    {desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit!", fileSize: ".5mb", close: true, tagDetails: {isOpen: false, tagTitle: "Download Now", tagColor: "green"}, },
    {desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit!", fileSize: ".6mb", close: true, tagDetails: {isOpen: true, tagTitle: "Upload", tagColor: "blue"}, },
    {desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit!", fileSize: ".9mb", close: false, tagDetails: {isOpen: true, tagTitle: "Download Now", tagColor: "green"}, },
  ];
  return (
    <div ref={ref} className='w-full h-full fixed z-[3] top-0 left-0 flex gap-10 flex-wrap p-10'>
      {data.map((item, index)=>(
        <Card data={item} reference={ref} />
      ))}
    </div>
  )
}

export default Foreground