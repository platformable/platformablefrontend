import React from "react"

export default function TrendsMainImageOnLeftTextOnTheRight({
  section,
  index,
  location,
}) {
  const {
    heading,
    content,
    row_1_content,
    row_2_content,
    row_3_content,
    row_1_image,
    row_2_image,
    row_3_image,
  } = section

  return (
<section className="" id={`section-${section.id}`}>

    <div className="container mx-auto border-b-2 border-purple-50 py-10 md:px-5 px-5 ">
{/*     <span className="text-xs my-5 italic">Section-{section.id}</span> */}
      <div class="trends-rowsWithImagesOnLeft">
        <div class="trends-rowsWithImagesOnLeft-top-content mb-10">
          <h3 className="font-bold">{heading}</h3>
          <p>
            <div dangerouslySetInnerHTML={{ __html: content }}></div>
          </p>
        </div>
        {/*   row_1_content */}
        <div class="trends-rowsWithImagesOnLeft-box">
          <div class="trends-rowsWithImagesOnLeft-box-img">
            <img
              src={row_1_image?.url}
              alt={row_1_image.alternativetext}
            />
          </div>
          <div class="trends-rowsWithImagesOnLeft-box-content">
            <div dangerouslySetInnerHTML={{ __html: row_1_content }}></div>
          </div>
        </div>
        <div class="trends-rowsWithImagesOnLeft-box">
          <div class="trends-rowsWithImagesOnLeft-box-img">
            <img
              src={row_2_image?.url}
              alt={row_2_image.alternativetext}
            />
          </div>
          <div class="trends-rowsWithImagesOnLeft-box-content">
            <div dangerouslySetInnerHTML={{ __html: row_2_content }}></div>
          </div>
        </div>
        <div class="trends-rowsWithImagesOnLeft-box">
          <div class="trends-rowsWithImagesOnLeft-box-img">
            <img
              src={row_3_image?.url}
              alt={row_3_image.alternativetext}
            />
          </div>
          <div class="trends-rowsWithImagesOnLeft-box-content">
            <div dangerouslySetInnerHTML={{ __html: row_3_content }}></div>
          </div>
        </div>
      </div>
    </div>
    </section>

  )
}
