import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
// import data from "../../data/product-stream/data.json"
import GridDisplay from "../../components/shared-components/GridDisplay"
/*specific-components*/

import SectorSubCards from "../../components/product-streams/sectorSubCards"

import Layout from "../../components/layout"
/*assets*/
import openBankImg from "../../assets/product-streams/open_banking-open_finance.svg"
import AnanlistAsServiceImg from "../../assets/product-streams/analyst-as-a-service.svg"
import BlogImg from "../../assets/product-streams/blogs_and_articles.svg"
import OpenEcoIMg from "../../assets/product-streams/open_ecosystem_mapping.svg"
import PlatFormImg from "../../assets/product-streams/platform_mindset_training_for_banks.svg"
import QuarterlyImg from "../../assets/product-streams/quarterly_trends_report.svg"
import StateImg from "../../assets/product-streams/state_of_the_market_reports.svg"
import openEcosystemImg from "../../assets/oe/open-ecosystem-sectors-icon.png"
import Breadcrumbs from "../../components/breadcrumbs"
import { StaticImage } from "gatsby-plugin-image"
import SEO from "../../components/seo"
import SectorCards from "../../components/SectorCards"

const data = {
  OpenEcosystem: {
    elements: [
      {
        img: AnanlistAsServiceImg,
        title: "API Landscape\nReports",
        paragraph: "",
        color: "#FBDACE40",
        url: "/open-banking/analyst-as-service",
      },
      {
        img: QuarterlyImg,
        title: "Content Strategy \nand Delivery",
        paragraph: "",
        color: "#FBDACE40",
        url: "/open-banking/trends",
      },
      {
        img: PlatFormImg,
        title: "Analyst-as-a-Service",
        paragraph: "",
        color: "#FBDACE40",
        url: "/open-banking/training",
      },
      {
        img: BlogImg,
        title: "Data Privacy and\n Tech Regulations Analysis",
        paragraph: "Read our latest news and industry analysis",
        color: "#FBDACE40",
        url: "/open-banking/open-banking-posts",
      },
      {
        img: OpenEcoIMg,
        title: "Data Models and\n Dataset Building",
        paragraph: "",
        color: "#FBDACE40",
        url: "/open-banking/open-ecosystem-mapping",
      },
      {
        img: StateImg,
        title: "Digital Tool Creation",
        paragraph:
          "Our annual summary of the open banking ecosystem, sponsored by Axway",
        color: "#FBDACE40",
        url: "/open-banking-open-finance-state-of-the-market-reports",
      },
    ],
  },
}

export default function OpenEcosystem({ location }) {
  return (
    <Layout>
      <SEO title="Open Banking / Open Finance" />
      <Breadcrumbs location={location} />
      <div className="container sm:mx-auto md:px-0 px-5">
        <div className="flex md:flex-nowrap flex-wrap mt-10 mb-5 items-center px-0 md:px-3 lg:px-0 xl:px-3">
          <div className="labs-hero-left md:w-3/5 w:1/1 md:p-0">
            <h3 className="font-black ">Open Ecosystem</h3>
            <p>
              Supporting API tools providers and consultants, standards bodies,
              and open source technologies to document and measure their open
              ecosystems in order to further support platform businesses to
              foster innovation
            </p>
          </div>
          <div className="labs-hero-right w-full lg:w-2/5 flex justify-center lg:justify-end">
            {/*  <img src="../../assets/product-streams/open_banking-open_finance" alt="" /> */}
            <StaticImage
              src="../../assets/oe/open-ecosystem-sectors-icon.png"
              placeholder="blurred"
            />
          </div>
        </div>
      </div>

      <div id="openEcosystem">
        <div className="container mx-auto">

        <SectorCards
        bgColor="#FBDACE40"
          numberOfColumns={3}
          data={data["OpenEcosystem"]}
        />
          
        </div>

        {/* <div class="sector-container grid md:grid-cols-3 grid-cols-1 md:gap-10 my-5 md:mx-0 mx-5">
            {data.OpenEcosystem.elements.map((el, index) => {
              return ( <>
          <div class="sector-box rounded-xl sectors-cards-bg p-5 flex flex-col justify-center">
                  <img
                    src={el.img}
                    className="w-24 h-24 mx-auto bg-white shadow text-center rounded-full p-3 "
                    alt=""
                  />
                  <h6 className="my-5 text-center h-8 sm:h-20 lg:h-4 md:h-8 px-3 text-primary font-black sm:mb-10">
                    {el.title}
                  </h6>
                  <p className="hidden md:block text-grayed text-center font-normal font-sm h-24 border-t border-primary border-opacity-25 pt-3 lg:mb-1">
                    {el.paragraph}
                  </p>
                </div>
                </>
              )
            })}
          </div> */}

        {/*   <SectorSubCards
          data={data["OpenEcosystem"]}
          className="my-0 gap-10 xl:gap-20 py-0  flex flex-wrap flex-col sm:flex-row justify-between text-sm items-center w-full px-0 md:px-3 lg:px-0 xl:px-3 "
        /> */}
        
      </div>
    </Layout>
  )
}
