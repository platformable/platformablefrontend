import React from "react"

const downloadImg=(url)=> {
console.log("download")
  var el = document.createElement("a");
  el.setAttribute(
    "href",
    url
  );
  el.setAttribute("download", "archivo");
  document.body.appendChild(el);
  el.click();
  el.remove();
}
const Trends2colsrwider = ({section,index}) => {
  return (
    <section
      key={index}
      className="border-b-2 border-purple-50 container mx-auto py-10"
    >
      {console.log("section",section)}
      <div className="grid  gap-10  md:px-0 px-5 trends-2Cols-wider">
        <div className="trends-2cols-component-left-col">
          <div dangerouslySetInnerHTML={{ __html: section.column1 }}></div>
        </div>
        <div className="trends-2cols-component-right-col grid items-center ">
          <div dangerouslySetInnerHTML={{ __html: section.column2 }}></div>
          <div className="text-center my-5 flex justify-end">
            <button className="btn bg-purple-800 rounded px-3 py-1 shadow-xl text-white text-xs" 
            onClick={()=>downloadImg("https://dimitr.im/static/b92a1e252df88f32d6bc9f37acb7826d/4af8e/preview-social-card.png")}
            >
              Download
              </button>
              </div>
        </div>
      </div>
    </section>
  )
}

export default Trends2colsrwider
