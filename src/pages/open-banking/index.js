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
import Breadcrumbs from "../../components/breadcrumbs"
import { StaticImage } from "gatsby-plugin-image"
import SEO from "../../components/seo"

const data = {
  OpenBanking: {
    elements: [
      {
        img: AnanlistAsServiceImg,
        title: "Analyst as a\n service",
        paragraph:
          "Subscribe to a set range of hours and answer key questions to support your growth",
        color: "#FBDACE40",
        url: "/open-banking/analyst-as-service",
      },
      {
        img: BlogImg,
        title: "Blogs and \nArticles",
        paragraph: "Read our latest news and analysis",
        color: "#FBDACE40",
        url: "/open-banking/open-banking-posts",
      },
      {
        img: OpenEcoIMg,
        title: "Open Ecosystem\nMapping",
        paragraph:
          "Analyse the open banking / open finance ecosystem from your perspective and gain actionable insights",
        color: "#FBDACE40",
        url: "/open-banking/open-ecosystem-mapping",
      },
      {
        img: PlatFormImg,
        title: "Platform Mindset Training\nfor Banks",
        paragraph:
          "Support you business to understand the power and potential of platform business models and the open banking ecosystem",
        color: "#FBDACE40",
        url: "/open-banking/training",
      },
      {
        img: QuarterlyImg,
        title: "Quarterly Trends\nReport",
        paragraph:
          "Subscribe to the latest news analysis and updates analysing key trends on open banking and open finance",
        color: "#FBDACE40",
        url: "/open-banking/trends",
      },
      {
        img: StateImg,
        title: "State of the Market\nReports",
        paragraph:
          "Our annual summary of the open banking ecosystem, sponsored by Axway",
        color: "#FBDACE40",
        url: "/open-banking-open-finance-state-of-the-market-reports",
      },
    ],
  },
}

export default function OpenBanking({ location }) {
  return (
    <Layout>
      <SEO title="Open Banking / Open Finance" />
      <Breadcrumbs location={location} />
      <div className="container sm:mx-auto md:px-0 px-5">
        <div className="flex md:flex-nowrap flex-wrap mt-10 mb-5 items-center px-0 md:px-3 lg:px-0 xl:px-3">
          <div className="labs-hero-left md:w-3/5 w:1/1 md:p-0">
            <h3 className="font-black ">Open Banking / Open Finance</h3>
            <p>
              Enabling interoperable financial services that improve financial
              inclusion and build everyone’s wealth.
            </p>
          </div>
          <div className="labs-hero-right w-full lg:w-2/5 flex justify-center lg:justify-end">
            {/*  <img src="../../assets/product-streams/open_banking-open_finance" alt="" /> */}
            <StaticImage
              src="../../assets/product-streams/open_banking-open_finance.png"
              placeholder="blurred"
            />
          </div>
        </div>
      </div>

      <div id="openBanking">
        <SectorSubCards
          data={data["OpenBanking"]}
          className="my-0 gap-10 xl:gap-20 py-0  flex flex-wrap flex-col sm:flex-row justify-between text-sm items-center w-full px-0 md:px-3 lg:px-0 xl:px-3 "
        />
      </div>
    </Layout>
  )
}
