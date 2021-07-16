import React from 'react'
import {Link} from 'gatsby'
// import data from "../../data/product-stream/data.json"
import GridDisplay from "../../components/shared-components/GridDisplay"
/*specific-components*/
import SectorSubCards from "../../components/product-streams/sectorSubCards"

import Layout from "../../components/layout"
/*assets*/
import openHealthImg from "../../assets/product-streams/open_health.svg"


import AnanlistAsServiceImg from '../../assets/product-streams/analyst-as-a-service.svg'
import BlogImg from '../../assets/product-streams/blogs_and_articles.svg'
import OpenEcoIMg from '../../assets/product-streams/open_ecosystem_mapping.svg'
import PlatFormImg from '../../assets/product-streams/platform_mindset_training_for_banks.svg'
import QuarterlyImg from '../../assets/product-streams/quarterly_trends_report.svg'
import StateImg from '../../assets/product-streams/state_of_the_market_reports.svg'
import Breadcrumbs from '../../components/breadcrumbs'
const data = {
  "OpenHealth": {
    "elements": [
      {
        "img": AnanlistAsServiceImg,
        "title": "Data Governance",
        "paragraph": "Create a data governance and data stewardship system for your agency",
        "color": "#87ACFC40",
        "url":"/open-health/data-governance"
      },
      {
        "img": BlogImg,
        "title": "Blogs and \nArticles",
        "paragraph": "Read our latest news and articles",
        "color": "#87ACFC40",
        "url":"/open-health/open-health-posts"
      },
      {
        "img": OpenEcoIMg,
        "title": "Open Ecosystem\nMapping",
        "paragraph": "Analyse the open banking / open finance ecosystem from your perspective and gain actionable insights",
        "color": "#87ACFC40",
        "url":"/open-health/open-ecosystem-mapping"
      },
      {
        "img": PlatFormImg,
        "title": "Data Stewardship Training and Mentoring",
        "paragraph": "Learn how to collect, manage, analyse and reuse data",
        "color": "#87ACFC40",
        "url":"/open-health/data-stewardship-training-and-mentoring"
      },
      {
        "img": QuarterlyImg,
        "title": "Quarterly Trends\nReport",
        "paragraph": "Coming Soon",
        "color": "#87ACFC40"
      },
      {
        "img": StateImg,
        "title": "State of the Market\nReports",
        "paragraph": "Coming Soon",
        "color": "#87ACFC40"
      }
    ]
  },
  
}

export default function openHealth({location}) {
    return (
        <Layout>
          <Breadcrumbs location={location}/>
            <div id="openHealth">

        <GridDisplay
          gridDisplayClass="flex flex-col container sm:flex-row flex-wrap my-6 mx-auto py-6 px-5 justify-between items-center "
          gridContentClass="md:w-3/5"
          title="Open Health"
          titleClass="my-5 text-blue"
          paragraphOne="Supporting community-based health organisations with data governance and data management."
          paragraphTwo="Mapping the health data and emerging health tech open ecosystem."
          doNotDisplayLink="hidden"
          doNotDisplayAnchor="hidden"
          imgContentClass=""
          imgClass="object-cointain w-96 h-94"
          backImgSrc={openHealthImg}
          alt="Hero"
          paragraphOneClass="mb-5"
          subtitle={true}
        ></GridDisplay>
        <SectorSubCards
          data={data["OpenHealth"]}
          className="my-0 md:mx-8 mx-2 py-0  flex flex-wrap flex-col sm:flex-row justify-between text-sm items-center"
        />
      </div>
    
        </Layout>
    )
}





