import React from "react"
import { Link } from "gatsby"
// import data from "../../data/product-stream/data.json"
import GridDisplay from "../../components/shared-components/GridDisplay"
/*specific-components*/

import SectorSubCards from "../../components/product-streams/sectorSubCards"
import Layout from "../../components/layout"
/*assets*/
import openGovImg from "../../assets/product-streams/open_government.svg"
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
  OpenGovernement: {
    elements: [
      {
        img: AnanlistAsServiceImg,
        title: "Policy Advocacy",
        paragraph:
          "Join us as we map and respond to emerging policy opportunities",
        color: "#D8C1FB40",
        url: "/open-government/policy-development",
      },
      {
        img: BlogImg,
        title: "Blogs and \nArticles",
        paragraph: "Read our latest news and articles",
        color: "#D8C1FB40",
        url: "/open-government/open-government-posts",
      },
      {
        img: OpenEcoIMg,
        title: "Open Ecosystem\nMapping",
        paragraph:
          "Analyse the open banking / open finance ecosystem from your perspective and gain actionable insights",
        color: "#D8C1FB40",
        url: "/open-government/open-ecosystem-mapping",
      },
      {
        img: PlatFormImg,
        title: "Platform Mindset Training\nfor Governments",
        paragraph: "Coming Soon",
        color: "#D8C1FB40",
      },
      {
        img: QuarterlyImg,
        title: "Quarterly Trends\nReport",
        paragraph: "Coming Soon",
        color: "#D8C1FB40",
      },
      {
        img: StateImg,
        title: "State of the Market\nReports",
        paragraph: "Coming Soon",
        color: "#D8C1FB40",
      },
    ],
  },
}

export default function openGovernment({ location }) {
  return (
    <Layout>
      <SEO title="Open Government" />
      <Breadcrumbs location={location} />
      <div className="container sm:mx-auto md:px-0 px-5">
        <div className="flex md:flex-nowrap flex-wrap mt-10 mb-5 items-center px-0 md:px-3 lg:px-0 xl:px-3">
          <div className="labs-hero-left md:w-3/5 w:1/1 md:p-0">
            <h3 className="font-black ">Open Government</h3>
            <p>
              Optimising digital government, unlocking data access, and ensuring
              greater participation.
            </p>
          </div>
          <div className="labs-hero-right w-full lg:w-2/5 flex justify-center lg:justify-end">
            {/*  <img src="../../assets/product-streams/open_banking-open_finance" alt="" /> */}
            <StaticImage
              src="../../assets/product-streams/open_government.png"
              placeholder="blurred"
            />
          </div>
        </div>
      </div>

      <div id="openGovernment">
        {/*  <GridDisplay
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
        ></GridDisplay> */}
        <SectorSubCards
          data={data["OpenGovernement"]}
          className="my-0 gap-10 xl:gap-20 py-0  flex flex-wrap flex-col sm:flex-row justify-between text-sm items-center w-full px-0 md:px-3 lg:px-0 xl:px-3"
        />
      </div>
    </Layout>
  )
}
