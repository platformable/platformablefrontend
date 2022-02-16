import React from 'react'

export default function TrendsExecutiveSummaryComponent({section,index}) {
  return (
      <div className="container mx-auto md:px-20 px-10">
          <h3 className="font-black text-center my-10">Executive Summary</h3>
    <div class="treds-reports-executive-summary-container">
    <div class="trends-reports-executive-summary-box my-5">
      <div class="executive-summary-box-left">
        <h3>{section.heading_1}</h3>
      </div>
      <div class="executive-summary-box-right">
      <div dangerouslySetInnerHTML={{ __html: section.content_1 }}></div>
      </div>
    </div>
    <div class="trends-reports-executive-summary-box my-5">
      <div class="executive-summary-box-left">
        <h3>{section.heading_2}</h3>
      </div>
      <div class="executive-summary-box-right">
      <div dangerouslySetInnerHTML={{ __html: section.content_2 }}></div>
      </div>
    </div>
    <div class="trends-reports-executive-summary-box my-5">
      <div class="executive-summary-box-left">
        <h3>{section.heading_3}</h3>
      </div>
      <div class="executive-summary-box-right">
      <div dangerouslySetInnerHTML={{ __html: section.content_3 }}></div>
      </div>
    </div>
  </div>
  </div>
  )
}
