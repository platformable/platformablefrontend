import React, { useContext,useState } from "react"
import { navigate, Link } from "gatsby"
import Layout from "../../../components/layout"
import UserContext from "../../../context/UserContext"
import HeroLp from "./components/HeroLp"
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image"
import TeamHours from "./components/TeamHours"
import TestimonialsLp from "./components/TestimonialsLp"
import ProductsCardsLp from "./components/ProductsCardsLp"
import CallToActionLp from "./components/CallToActionLp"

import PositionedSection from "./components/PositionedSection"
import MeasuringBenefitsLP from "./components/MeasuringBenefitsLP"

import SubscriptionPlans from "./components/SubscriptionPlans"
import "./styles/index.css"
import Breadcrumbs from "../../../components/breadcrumbs"

import seeOurLatestImg from "../../../static/ob/last_release_02_Open_Banking.png"
import icon1 from '../../../static/ob/trends-page/icon_01.png'
import icon2 from '../../../static/ob/trends-page/icon_02.png'
import icon3 from '../../../static/ob/trends-page/icon_03.png'
import actionableImg1 from '../../../static/ob/trends-page/Actionable_section_icon_01.png'
import actionableImg2 from '../../../static/ob/trends-page/Actionable_section_icon_02.png'
import actionableImg3 from '../../../static/ob/trends-page/Actionable_section_icon_03.png'
import actionableImg4 from '../../../static/ob/trends-page/Actionable_section_icon_04.png'

import OBTrendsFile from '../../../static/ob/Platformable Open Banking Trends Report Q1 2022 January 2022.pdf'


const IndexPage = ({ location }) => {
  const [user, setUser] = useContext(UserContext)

  const handleIsLoggedIn = () => {
    user.isLoggedIn ? navigate("/app/dashboard") : navigate("/login")
  }

  const section2Content = [
    {
      icon: icon1,
      content: "Understand the open banking platform economy",
    },
    {
      icon:icon2,
      content: "See where opportinties are emerging",
    },
    {
      icon: icon3,
      content: "Beanchmark your activities against industry leaders",
    },
  ]

  const howWeDoitData = [
    {
      src: actionableImg1,
      title: "Open banking and open finance regulations",
      paragraph: "To grow platforms and ecosystems",
    },
    {
      src: actionableImg2,
      title: "Measuring Value",
      paragraph: "Pricing and business models",
    },
    {
      src: actionableImg3,
      title: "API products and how they are being used",
      paragraph: "To learn from what works",
    },
    {
      src: actionableImg4,
      title: "The global move towards embedded finance and how to prepare for it",
      paragraph: "To collaborate effectively",
    },
  ]

  const [form,setForm]=useState("");
  const [formSuccess,setFormSuccess]=useState(false)

  const handleSubscription = async (e) =>{
    const email = form
    const mailerlite = {
      email,
    }
    const response = await window.fetch(`/api/platformableGroupSubscription`, {
      method: `POST`,
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(mailerlite),
    })
  const res = await response.statusText || response.statusMessage

  if(res==='OK' || res===undefined){
  setFormSuccess(!formSuccess)
  }
  
}
  return (
    <Layout>
      <Breadcrumbs location={location} />
      <section
        className="sm:mx-auto md:px-0 px-5 md:py-5 py-2 bg-ob-hero " /* style={{backgroundColor:"#0099bb"}} */
      >
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 grid-cols-1 px-0 md:px-3 lg:px-0 xl:px-3 items-center  ">
            <div className="left flex items-center">
              <div>
                <h3 className="font-bold mb-5 md:text-5xl text-1xl md:text-left text-center text-white">
                  Open Banking and Embedded Finance Trends Reports
                </h3>
                {/* <p className="text-sm">{data.excerpt}</p> */}

                <a
                  className={`md:inline-block inline-block 
                    text-sm md:text-primary 
                    font-bold my-5  ml-2 bg-red-orange-dark text-white py-2 px-10 rounded-full 
                    hover:bg-secondary cursor-pointer`}
                  href="#os-form"
                >
                  Subscribe
                </a>
              </div>
            </div>
            <div className="right flex  justify-self-end ">
              <StaticImage
                src="../../../static/ob/trends-page/icon_hero.png"
                alt="platformable"
                width={600}
                className=""
              />
            </div>
          </div>
        </div>
      </section>

      <section className="ob-trends-page-middle-section py-5">
        <section className="cards-section container mb-4 py-2 sm:mx-auto md:px-0 px-5">
         
          <div className="grid md:grid-cols-3 grid-cols-1 gap-10 justify-between">
            {section2Content.map((el, i) => (
              <div
                key={i}
                className="rounded-3xl  bg-white card-border items-center h-full"
              >
                <div className="text-center ">
                  <img
                    src={el.icon}
                    className="mx-auto text-center rounded-3xl self-start py-10"
                    width="125"
                  />

                  <div className="rounded-b-3xl bg-russian-violet-light h-20 grid items-center px-5 text-sm font-bold">
                    {el.content}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="ob-trends-seeourlatest md:my-10">
          <div className="container mx-auto">
            <div className="seeourlatest-container items-center shadow rounded-xl md:px-0 px-5 bg-white">
              <div className="ronded-tl-xl ronded-bl-xl">
                <img src={seeOurLatestImg} alt="" />
              </div>
              <div className="px-5">
                <h3 className="font-bold mb-5 md:pt-0 pt-5">
                  Let us help you and your team evolve towards a platform
                  mindset.
                </h3>
                <a
                  className="btn bg-red-orange-dark text-white px-5 rounded-xl py-1 mb-5 cursor"
                  download
                  href={OBTrendsFile}
                >
                  See our latest Trends Reports
                </a>
              </div>
            </div>
          </div>
        </section>
      </section>

      <section className="ob-trendspage-actionable cards-section ">
        <div className="container mx-auto border-ob-trendspage-actionable rounded-xl md:px-0 px-10 ">
          <h2 className="text-center pt-5  mb-10 font-bold">
            Actionable information on:
          </h2>
          <div className="grid md:grid-cols-4 gid-cols-1 gap-5 justify-center">
            {howWeDoitData.map((img, i) => (
              <div key={i} className="text-center">
                <img src={img.src} alt={img.title} className="w-20 h-20" />
                <div className="px-5">
                  <h6 className="my-5 text-center font-bold">{img.title}</h6>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="ob-price-section" className="py-10 ob-price-section">
        <div className="container mx-auto">
          <div className="ob-trends-price-cards-container grid md:grid-cols-3 grid-cols-1 md:px-0 px-5 gap-5">
            <div className="ob-trends-price-card card rounded-lg price-card1">
              <div className="ob-price-card-top text-white py-5">
                <div>
                  <h3 className="text-center font-bold">Knowledge Pack</h3>
                </div>
                <div className="os-price-section-stars px-5 ">
                  <div className="stars-line w-full"></div>
                  <div className="price-stars"><span className="star-orange">★</span><span className="star-light">★★</span></div>
                </div>
              </div>
              <div className="ob-price-card-middle grid md:grid-cols-2 grid-cols-1 border-b h-full items-center py-5">
                <div className="ob-price-card-middle-left text-white">
                <h6 className="font-bold"> <span className="text-xl">✓</span> Monthly trends report</h6>
                </div>
                <div className="ob-price-card-middle-right text-white">
                <p className="text-sm">· Quarterly growth trends</p>
                <p className="text-sm">· Business models</p>
                <p className="text-sm">· Architecture + tooling</p>
                </div>
              </div>
              <div className="ob-price-card-bottom grid md:grid-cols-2 grid-cols-1 bg-white py-5 rounded-b-lg">
                <div className="ob-price-card-bottom-left">
                  <h2 className="font-bold red-orange-text-color">€19</h2>
                  <p className="italic text-xs my-1 invest-italic-text">per month</p>
                  <a href="https://checkout.stripe.com/pay/cs_live_a1vIvU4bprkrM2u4HJrQ8WJnrfxprVwp09V482Br2cz1DQ59nU8maNbpYo#fidkdWxOYHwnPyd1blppbHNgWjA0QmRLdWFCUW1LT1JmSGN2PDFLb2BAN3duSnFgUE5OQ01jZlNqSTc8bEs9XTNoTW9PM2Z8TE9EUkZobEFmZ0trUWo3SEk2TnVfPTx1RlBcNEhUTzVMbjI8NTVfa0RvRm5qMycpJ3VpbGtuQH11anZgYUxhJz8nYVczNmNdYmJ8YUtpYGpqY181J3gl" target="_blank" className="px-5 py-2 os-btn-price-left cursor-pointer text-white rounded-xl inline-block">Buy Now</a>
                </div>
                <div className="ob-price-card-bottom-right">
                <h2 className="font-bold red-orange-text-color">€182</h2>
                  <p className="italic text-xs my-1 invest-italic-text">per year</p>
                  <a target= "_blank" href="https://checkout.stripe.com/pay/cs_live_a1CyHahXN6AN9QnPy4oRV3XuPPs0w1ORFgjf473dOnhxAp4ORtwh4zHW0Y#fidkdWxOYHwnPyd1blppbHNgWjA0QmRLdWFCUW1LT1JmSGN2PDFLb2BAN3duSnFgUE5OQ01jZlNqSTc8bEs9XTNoTW9PM2Z8TE9EUkZobEFmZ0trUWo3SEk2TnVfPTx1RlBcNEhUTzVMbjI8NTVfa0RvRm5qMycpJ3VpbGtuQH11anZgYUxhJz8nM2pANTZJZFJgZk9tNX18NmZjJ3gl" className="px-5 py-2 os-btn-price-right   cursor-pointer rounded-xl inline-block">Buy Now</a>
                  <p className=" text-xs my-1 i red-orange-text-color">Save €46</p>
                </div>
              </div>
            </div>

            <div className="ob-trends-price-card card rounded-xl price-card2">
              <div className="ob-price-card-top text-white py-5">
                <div>
                  <h3 className="text-center font-bold">Insight Pack</h3>
                </div>
                <div className="os-price-section-stars px-5">
                  <div className="stars-line bg-red-50 w-full"></div>
                  <div className="price-stars"><span className="star-orange">★★</span><span className="star-light">★</span></div>
                </div>
              </div>
              <div className="ob-price-card-middle grid md:grid-cols-2 grid-cols-1 border-b h-full items-center py-5 text-white">

               <div>
               <h6 className="font-bold"> <span className="text-xl">✓</span> Monthly trends report</h6>
                </div>
                <div className="ob-price-card-middle-right">
                <p className="text-sm">Quarterly growth trends</p>
                <p className="text-sm">Business models</p>
                <p className="text-sm">+ Use cases</p>
                <p className="text-sm">Architecture + tooling</p>
               </div>

               <div>
                 <br />
               <h6 className="font-bold"><span className="text-xl">✓</span> Dashboard</h6>
                </div>
                <div className="ob-price-card-middle-right">
                <p className="text-sm">Access to all data and datapoints</p>
               </div>
            
     
              </div>
              <div className="ob-price-card-bottom grid md:grid-cols-2 grid-cols-1 bg-white py-5 rounded-b-lg">
                <div className="ob-price-card-bottom-left">
                  <h2 className="font-bold red-orange-text-color">€50</h2>
                  <p className="italic text-xs my-1 invest-italic-text">per month</p>
                  <a href="https://checkout.stripe.com/pay/cs_live_a12udxwZnQsGm1E4OIqEohdANZwb6lWIrRxG6ds1OLgBnDnIXj7rs1P4bC#fidkdWxOYHwnPyd1blppbHNgWjA0QmRLdWFCUW1LT1JmSGN2PDFLb2BAN3duSnFgUE5OQ01jZlNqSTc8bEs9XTNoTW9PM2Z8TE9EUkZobEFmZ0trUWo3SEk2TnVfPTx1RlBcNEhUTzVMbjI8NTVfa0RvRm5qMycpJ3VpbGtuQH11anZgYUxhJz8nPXJIMGowYmJ8PXE0PTU1PXJ9J3gl" target="_blank" className="px-5 py-2 os-btn-price-left cursor-pointer rounded-xl inline-block text-white">Buy Now</a>
                </div>
                <div className="ob-price-card-bottom-right">
                <h2 className="font-bold red-orange-text-color">€480</h2>
                  <p className="italic text-xs my-1 invest-italic-text">per year</p>
                 <a href="https://checkout.stripe.com/pay/cs_live_a1Cv231qRagEUljBfx0ZSUS7MLwckwLJr38B57fTqUpFFdPflvG1f8Fn34#fidkdWxOYHwnPyd1blppbHNgWjA0QmRLdWFCUW1LT1JmSGN2PDFLb2BAN3duSnFgUE5OQ01jZlNqSTc8bEs9XTNoTW9PM2Z8TE9EUkZobEFmZ0trUWo3SEk2TnVfPTx1RlBcNEhUTzVMbjI8NTVfa0RvRm5qMycpJ3VpbGtuQH11anZgYUxhJz8nYFNkYFxDZFJgMWZJZ2ZmNmZmJ3gl" target="_blank" className="px-5 py-2 os-btn-price-right cursor-pointer rounded-xl inline-block">Buy Now</a>
                 <p className="text-xs my-1  red-orange-text-color">Save €120</p>
                </div>
              </div>
            </div>


            <div className="ob-trends-price-card card rounded-xl price-card3">
              <div className="ob-price-card-top py-5 text-white px-5">
                <div>
                  <h3 className="text-center font-bold">Leadership Pack</h3>
                </div>
                <div className="os-price-section-stars ">
                  <div className="stars-line bg-red-50 w-full"></div>
                  <div className="price-stars"><span className="star-orange">★★★</span></div>
                </div>
              </div>
              <div className="ob-price-card-middle grid md:grid-cols-2 grid-cols-1 border-b py-5 h-full items-center text-white">
              
              <div>
               <h6 className="font-bold"> <span className="text-xl">✓</span> Monthly trends report</h6>
                </div>
                <div className="ob-price-card-middle-right">
                <p className="text-sm">· Quarterly growth trends</p>
                <p className="text-sm">· Business models</p>
                <p className="text-sm">· Architecture + tooling</p>
               </div>

               <div>
                 <br /> 
               <h6 className="font-bold"><span className="text-xl">✓</span> Dashboard</h6>
                </div>
                <div className="ob-price-card-middle-right">
                  <br />
                <p className="text-sm">Access to all data and datapoints</p>

               </div>

               <div>
                 <br />
               <h6 className="font-bold"><span className="text-xl">✓</span> Analyst support 10h/month (2 analyst team)</h6>
                </div>
                <div className="ob-price-card-middle-right">
                  <br />
                <p className="text-sm">· Quarterly growth trends</p>
                <p className="text-sm">· Business models</p>
                <p className="text-sm">· Architecture + tooling</p>
               </div>

               <div>
                 <br />
               <h6 className="font-bold"><span className="text-xl">✓</span> All data downloable</h6>
                </div>
                <div className="ob-price-card-middle-right">
                  <br />
                <p className="text-sm">Real-time access to our datasets and ability to use as you wish with the accreditation: (Source Platformable data)</p>
           
               </div>

               <div>
                 <br />
               <h6 className="font-bold"><span className="text-xl">✓</span> API access</h6>
                </div>
                <div className="ob-price-card-middle-right mt-5">
                <p className="text-sm"> Contact us for more details</p>
           
               </div>
              </div>
              <div className="ob-price-card-bottom grid grid-cols-1 bg-white text-main-color py-5 rounded-b-lg">
                <div className="ob-price-card-bottom-left">
                  <h2 className="font-bold red-orange-text-color">€1550</h2>
                  <p className="italic text-xs my-1">per month</p>
                <a targe="_blank" href="https://checkout.stripe.com/pay/cs_live_a1w9WVsj3K9TZ5Y3fJgec1F0XyWADXtgWL0L5aEJmcHaWG2cwYvc4w1aQx#fidkdWxOYHwnPyd1blppbHNgWjA0QmRLdWFCUW1LT1JmSGN2PDFLb2BAN3duSnFgUE5OQ01jZlNqSTc8bEs9XTNoTW9PM2Z8TE9EUkZobEFmZ0trUWo3SEk2TnVfPTx1RlBcNEhUTzVMbjI8NTVfa0RvRm5qMycpJ3VpbGtuQH11anZgYUxhJz8nZks3NTZJMX1UZ0NhPDExNmZiJ3gl" className="px-5 py-2 price-card3 text-white rounded-xl inline-block cursor-pointer">Buy Now</a>
                <p className="italic text-xs my-1 text-white">0</p>
                </div>
                
              </div>
            </div>

          </div>
        </div>

        <section className=" my-5 ">
          <div className="container mx-auto  ">
            <div className="ob-invest-monthly-section-container  bg-white items-center shadow rounded-xl md:px-0 px-5 py-5 ">
              <div className="ronded-tl-xl ronded-bl-xl ob-invest-monthly-section-left grid items-center px-5 ">
           
                <h3 className="text-white">Invest in a <br /> monthly <strong>white-labeled version</strong> <br /> of our trends report</h3>
              </div>
              <div className="px-5 md:mt-0 mt-5">
                <h3 className="font-bold mb-5 md:pt-0 pt-5">
                  Looking for content focused on your ecosystem and stakeholders?
                </h3>

                <div className="border rounded-xl p-10 my-5">
                  <h3 className="red-orange-text-color font-bold">Includes:</h3>
                  <p className="font-bold"><span className="text-xl">✓</span>  A case study from your ecosystem each month</p>
                  <p className="font-bold"><span className="text-xl">✓</span>  Additional trends analysis focused on your market positioning</p>
                  <span className="italic text-sm invest-italic-text">(eg. your geographic focus, or analysing other competitors against the particular cases in your ecosytem)</span>
                </div>
                <div className="flex flex-wrap md:flex-no-wrap gap-3">
                <Link to={'/contact'}><a
                  className="btn bg-red-orange-dark text-white px-5 rounded-xl py-1 mb-5 cursor"
                  download
                >
                 Contact us
                </a>
                </Link>
                 <p className="font-bold">to discuss a white-labeled edition</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
     
      <section id="os-form">
        <div className="os-product-idea-workshop-our-workshop-subscribe-form py-10">
          <div className="container mx-auto os-product-ideation-workshop-section5-container md:px-0 px-5">
            <div className="os-product-ideation-workshop-section5-left">
            <StaticImage
              src="../assets/home/we_publish_analysis.png"
              alt="platformable"
              width={400}
            />
            </div>
            <div className="os-product-ideation-workshop-section5-right">
            
              <h3 className="font-bold mb-5 text-3xl">We publish analysis and insights</h3>

              <p className=" mb-3">
              We share data on the growth of open ecosystems, and track how<br />
              value is being generated and distributed
              </p>
              <div className="flex">
              <input
                type="text"
                className="rounded-l-lg p-4 border-t mr-0 border-b border-l text-main-color border-gray-200 bg-white subscribe-input"
                placeholder="Your email address"
                onChange={e => setForm(e.target.value)}
              />
              <button
                className="px-8 rounded-r-lg bg-sunglow  font-bold p-4  border-yellow-500 border-t border-b border-r"
                onClick={handleSubscription}
              >
                Subscribe to stay updated
              </button>
            </div>

            {formSuccess && (
            <p className="text-center my-5 ">
              Thanks for your subscription, please check your email for a
              confirmation
            </p>
          )}
              
            </div>
          </div>
        </div>
      </section>



     
      
      {/* <SubscriptionPlans /> */}

    </Layout>
  )
}

export default IndexPage
