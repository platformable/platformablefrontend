import React from 'react'
import {Link} from 'gatsby'
// import data from "../../data/product-stream/data.json"
import GridDisplay from "../../components/shared-components/GridDisplay"
/*specific-components*/

import SectorSubCards from "../../components/product-streams/sectorSubCards"
import Layout from '../../components/layout'
/*assets*/
import openGovImg from "../../assets/product-streams/open_government.svg"
import AnanlistAsServiceImg from '../../assets/product-streams/analyst-as-a-service.svg'
import BlogImg from '../../assets/product-streams/blogs_and_articles.svg'
import OpenEcoIMg from '../../assets/product-streams/open_ecosystem_mapping.svg'
import PlatFormImg from '../../assets/product-streams/platform_mindset_training_for_banks.svg'
import QuarterlyImg from '../../assets/product-streams/quarterly_trends_report.svg'
import StateImg from '../../assets/product-streams/state_of_the_market_reports.svg'

const data = {
  
  "OpenGovernement": {
    "elements": [
      {
        "img": AnanlistAsServiceImg,
        "title": "Policy Advocacy",
        "paragraph": "Join us as we map and respond to emerging policy opportunities",
        "color": "#D8C1FB40",
        "url":"/open-government/policy-development"
      },
      {
        "img": BlogImg,
        "title": "Blogs and \nArticles",
        "paragraph": "Read our latest news and articles",
        "color": "#D8C1FB40",
        "url":"/open-government-posts"
      },
      {
        "img": OpenEcoIMg,
        "title": "Open Ecosystem\nMapping",
        "paragraph": "Analyse the open banking / open finance ecosystem from your perspective and gain actionable insights",
        "color": "#D8C1FB40",
        "url":"/open-government/open-ecosystem-mapping"
      },
      {
        "img": PlatFormImg,
        "title": "Platform Mindset Training\nfor Governments",
        "paragraph": "Coming Soon",
        "color": "#D8C1FB40"
      },
      {
        "img": QuarterlyImg,
        "title": "Quarterly Trends\nReport",
        "paragraph": "Coming Soon",
        "color": "#D8C1FB40"
      },
      {
        "img": StateImg,
        "title": "State of the Market\nReports",
        "paragraph": "Coming Soon",
        "color": "#D8C1FB40"
      }
    ]
  },
}

export default function openGovernment() {
    return (
        <Layout>
           <div id="openGovernment">
        <GridDisplay
          gridDisplayClass="flex flex-col sm:flex-row flex-wrap my-6 container mx-auto py-6 px-5 justify-between items-center "
          gridContentClass="md:w-2/5"
          title="Open Government"
          titleClass="my-5 text-purple"
          paragraphOne="Optimising digital government, unlocking data access, and ensuring greater participation."
          doNotDisplayLink="hidden"
          doNotDisplayAnchor="hidden"
          imgContentClass=""
          imgClass="object-cointain w-96 h-94"
          backImgSrc={openGovImg}
          alt="Hero"
        ></GridDisplay>
        <SectorSubCards
          data={data["OpenGovernement"]}
          className="my-0 md:mx-8 mx-2 py-0  flex flex-wrap flex-col sm:flex-row justify-between text-sm items-center"
        />
      </div>
        </Layout>
    )
}
