import React from "react"

const Trends2colsrwider = ({section,index}) => {
  return (
    <section
      key={index}
      className="border-b-2 border-purple-50 container mx-auto py-10"
    >
      <div className="grid  gap-8  md:px-0 px-5" style={{"gridTemplateColumns":"1fr 2fr"}}>
        <div className="trends-2cols-component-left-col">
          <div dangerouslySetInnerHTML={{ __html: section.column1 }}></div>
        </div>
        <div className="trends-2cols-component-right-col grid items-center ">
          <div dangerouslySetInnerHTML={{ __html: section.column2 }}></div>
        </div>
      </div>
    </section>
  )
}

export default Trends2colsrwider
