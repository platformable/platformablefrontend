import React from 'react'

export default function Trends1Col({section,index}) {
  return (
    <section key={index} className="border-b-2 border-purple-50 container mx-auto py-10" id={`section-${section.id}-1col`}>
{/*     <span className="text-xs py-5 italic">Section-{section.id}</span> */}
   
    <div className="grid md:grid-cols-1 grid-cols-1 gap-8  md:px-0 px-5 mt-5">
      
      <div className="trends-1cols-component--col">
          <h3 className="text-center font-black">{section.heading}</h3>
        <div dangerouslySetInnerHTML={{ __html: section.content }}></div>
      </div>
      
    </div>
  </section>
  )
}
