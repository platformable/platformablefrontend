import React from "react"
import { Link } from "gatsby"
// import data from "../../data/product-stream/data.json"
import GridDisplay from "../../components/shared-components/GridDisplay"
/*specific-components*/

import SectorSubCards from "../../components/product-streams/sectorSubCards"

import Layout from "../../components/layout"
/*assets*/
import openBankImg from "../../assets/product-streams/open_banking-open_finance.svg"
import AnanlistAsServiceImg from '../../assets/product-streams/analyst-as-a-service.svg'
import BlogImg from '../../assets/product-streams/blogs_and_articles.svg'
import OpenEcoIMg from '../../assets/product-streams/open_ecosystem_mapping.svg'
import PlatFormImg from '../../assets/product-streams/platform_mindset_training_for_banks.svg'
import QuarterlyImg from '../../assets/product-streams/quarterly_trends_report.svg'
import StateImg from '../../assets/product-streams/state_of_the_market_reports.svg'



const data = {

  "OpenBanking": {
    "elements": [
      {
        "img": AnanlistAsServiceImg,
        "title": "Analyst as a\n service",
        "paragraph": "Subscribe to a set range of hours and answer key questions to support your growth",
        "color": "#FBDACE40",
        "url":"/open-banking/analyst-as-service"
      },
      {
        "img": BlogImg,
        "title": "Blogs and \nArticles",
        "paragraph": "Read our latest news and analysis",
        "color": "#FBDACE40",
        "url":"/open-banking-posts"
      },
      {
        "img": OpenEcoIMg,
        "title": "Open Ecosystem\nMapping",
        "paragraph": "Analyse the open banking / open finance ecosystem from your perspective and gain actionable insights",
        "color": "#FBDACE40",
        "url":"/open-banking/open-ecosystem-mapping"
      },
      {
        "img": PlatFormImg,
        "title": "Platform Mindset Training\nfor Banks",
        "paragraph": "Support you business to understand the power and potential of platform business models and the open banking ecosystem",
        "color": "#FBDACE40",
        "url":"/open-banking/training"
      },
      {
        "img": QuarterlyImg,
        "title": "Quarterly Trends\nReport",
        "paragraph": "Subscribe to the latest news analysis and updates analysing key trends on open banking and open finance",
        "color": "#FBDACE40",
        "url":"/open-banking/trends"
      },
      {
        "img": StateImg,
        "title": "State of the Market\nReports",
        "paragraph": "Our annual summary of the open banking ecosystem, sponsored by Axway",
        "color": "#FBDACE40",
        "url":"/open-banking-open-finance-state-of-the-market-reports"
      }
    ]
  },
  
}


export default function openBanking() {
  return (
    <Layout>
      <div id="openBanking">
        <GridDisplay
        
          gridDisplayClass="hero-section flex flex-col sm:flex-row flex-wrap my-6 mx-auto py-0 px-5 container justify-between items-center "
          gridContentClass="md:w-2/5 "
          title={`Open Banking / 
            Open Finance`}
          titleClass="my-5 text-orange"
          paragraphOne="Enabling interoperable financial services that improve financial inclusion and build everyone’s wealth."
          doNotDisplayLink="hidden"
          doNotDisplayAnchor="hidden"
          imgContentClass=""
          imgClass="object-cointain w-96 h-80"
          backImgSrc={openBankImg}
          alt="Hero"
        ></GridDisplay>
        <SectorSubCards
          data={data["OpenBanking"]}
          className="my-0 md:mx-8 mx-2 py-0  flex flex-wrap flex-col sm:flex-row justify-between text-sm items-center"
        />
      </div>
    </Layout>
  )
}
