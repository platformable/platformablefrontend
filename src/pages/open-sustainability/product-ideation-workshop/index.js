import React, { useState } from "react"

import Layout from "../../../components/layout"
import SEOLp from "./components/SEOLp"
import HeroLp from "./components/HeroLp"
import VideoBackgroundLp from "./components/VideoBackgroundLp"
import TestimonialsLp from "./components/TestimonialsLp"
import ProductBenefitsLp from "./components/ProductBenefitsLp"
import ProductOfferLp from "./components/ProductOfferLp"
import ProductsCardsLp from "./components/ProductsCardsLp"
import CallToActionLp from "./components/CallToActionLp"
import FormLp from "./components/FormLp"
import Breadcrumbs from "../../../components/breadcrumbs"

import heroImg from "../../../static/os/os-product-ideation-icon-hero3.png"
import ArrowImg from "../../../static/os/os-product-ideation-workshop-arrow green.png"
import animation from "../../../static/os/os-product-ideation-animation.gif"
import greenFintechImg1 from "../../../static/os/greenfintech-challenges-img-01.png"
import greenFintechImg2 from "../../../static/os/greenfintech-challenges-img-02.png"
import greenFintechImg3 from "../../../static/os/greenfintech-challenges-img-03.png"
import greenFintechImg4 from "../../../static/os/greenfintech-challenges-img-04.png"
import consumeImg from "../../../static/os/os-piw-Consume-API-product-icon-06.png"
import checkImg from "../../../static/os/check_icon.png"
import markImg from "../../../static/os/Mark.png"
import phuongImg from "../../../static/os/Phuong.png"
import jannikaImg from "../../../static/os/Jannika.png"
import miroImg from '../../../static/os/miro-logo.png'
import zoomImg from '../../../static/os/zoom-logo.png'
import ntwkImg from '../../../static/os/ntwk-logo.png'
import isIcon from '../../../static/os/os-icon.png'

const IndexPage = ({ location }) => {
  const [form, setForm] = useState("")
  const [formSuccess, setFormSuccess] = useState(false)

  const handleSubscription = async e => {
    const email = form
    const mailerlite = {
      email,
    }
    const response = await window.fetch(`/api/osSubscriptions`, {
      method: `POST`,
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(mailerlite),
    })
    const res = (await response.statusText) || response.statusMessage

    if (res === "OK" || res === undefined) {
      setFormSuccess(!formSuccess)
    }
  }

  return (
    <Layout>
      <Breadcrumbs location={location} />
      <SEOLp title="Product Ideation Workshop" />

      <section id="os-product-idea-workshop" className="os-pwi-hero">
        <div className="os-product-idea-workshop-hero container mx-auto md:px-0 px-5 items-center">
          <div className="os-product-idea-workshop-hero-left">
            <h3 className="font-bold text-4xl pt-5">
              Building green fintech:
            </h3>
            <h3 className="font-bold text-4xl my-2">
              {" "}
              <span className="os-heading-highlight px-3 ">
                impactful design
              </span>
            </h3>
            <h3 className="font-bold text-4xl mb-3">
              <span className="os-heading-highlight px-3">
                and product ideation
              </span>
            </h3>
            <p className="my-2 font-bold">
              Using open banking and open finance APIs <br />
              to build sustainability products and features
            </p>
            <p>
              The move to digital infrastructures and addressing environmental
              challenges like climate change requires greater collaboration.
              Learn how APIs enable this and can play a key part in an impactful
              and revenue-generating business strategy
            </p>
            <a
              className={`md:inline-block inline-block 
                    text-sm md:text-primary 
                    font-bold my-5  ml-2 bg-os-piw-btn py-2 px-10 rounded-full 
                    hover:bg-secondary cursor-pointer`}
              href="#os-pwi-form"
            >
              Register now
            </a>
          </div>

          <div className="os-product-idea-workshop-hero-right flex justify-end">
            <img src={heroImg} alt="" />
          </div>
        </div>
      </section>

      <section>
        <div className="os-product-idea-workshop-our-workshop py-14">
          <div className="container mx-auto md:px-0 px-5">
            <h3 className="font-bold">
              <span className="os-product-idea-workshop-green-span px-2 py-2">
                Our workshop will
              </span>{" "}
              help you:
            </h3>
          </div>
          <div className="os-product-idea-workshop-4-square-container container mx-auto  py-10 md:px-0 px-5">
            <div className="os-product-idea-workshop-4-square-container-box my-5 p-5 flex items-center rounded-xl  h-full">
              <p className="text-center">
                Identify <span className="font-bold">target market segments</span> and
                understanding their needs 
              </p>
            </div>

            <div className="os-product-idea-workshop-4-square-container-arrow md:block hidden">
              <img src={ArrowImg} alt="" />
            </div>

            <div className="os-product-idea-workshop-4-square-container-box my-5 p-5 rounded-xl flex items-center  h-full">
              <p className="text-center">Focus on <span className="font-bold">high-impact sectors</span> and use cases</p>
            </div>
            <div className="os-product-idea-workshop-4-square-container-arrow md:block hidden">
              <img src={ArrowImg} alt="" />
            </div>

            <div className="os-product-idea-workshop-4-square-container-box my-5 p-5 rounded-xl flex items-center h-full">
              <p className="text-center">
              Align product ideas with widest <span className="font-bold">potential sustainability impact</span>
              
              </p>
            </div>
            <div className="os-product-idea-workshop-4-square-container-arrow md:block hidden">
              <img src={ArrowImg} alt="" />
            </div>

            <div className="os-product-idea-workshop-4-square-container-box my-5 p-5 rounded-xl flex items-center  h-full">
              <p className="text-center">
              Create products and features that <span className="font-bold">enable action</span>
              </p>
            </div>
          </div>
          <div className="container mx-auto md:px-0 px-5">
            <img src={animation} alt="" />
          </div>
        </div>
      </section>

  

      <section>
        <div className="os-product-ideation-workshop green-fintech-challenge bg-main-color py-10">
          <div className="container mx-auto md:px-0 px-5">
            <h3 className="font-bold text-white text-center my-10">
              The green fintech{" "}
              <span className="os-product-ideation-workshop-green-fintech-challenge-green main-text-color px-2">
                challenge
              </span>
            </h3>
          </div>
          <div className="os-product-ideation-workshop-green-fintech-challenge-container container mx-auto md:px-0 px-5">
            <div className="os-product-ideation-workshop-green-fintech-challenge-box h-full p-5 text-center rounded-lg">
              <img src={greenFintechImg1} alt="" className="h-16 mb-5" />
              <p className="text-white">
              Consumers are <span className="font-bold">increasingly demanding sustainability</span> from the
                products and services they use, including bank and and finance
                products
              </p>
            </div>
            <div className="os-product-ideation-workshop-green-fintech-challenge-box h-full p-5 text-center rounded-lg">
              <img src={greenFintechImg2} alt="" className="h-16 mb-5" />
              <p className="text-white">
              <span className="font-bold">Regulations</span> are driving business sustainability performance and
                reporting requirements are increasing
              </p>
            </div>
            <div className="os-product-ideation-workshop-green-fintech-challenge-box h-full p-5 text-center rounded-lg">
              <img src={greenFintechImg4} alt="" className="h-16 mb-5" />
              <p className="text-white">
                There is a lack of clarity and visibility on available banking
                and finance products that <span className="font-bold">create tangible sustainability impacts</span>
              </p>
            </div>
            <div className="os-product-ideation-workshop-green-fintech-challenge-box h-full p-5 text-center rounded-lg">
              <img src={greenFintechImg3} alt="" className="h-16 mb-5" />
              <p className="text-white">
              <span className="font-bold">Green fintech business models</span> and pricing strategies are still
                immature and not yet widely market tested
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="os-product-ideation-workshop-section5 my-10">
          <div className="container mx-auto os-product-ideation-workshop-section5-container md:px-0 px-5">
            <div className="os-product-ideation-workshop-section5-left">
              <img src={consumeImg} alt="" />
            </div>
            <div className="os-product-ideation-workshop-section5-right">
              <h4 className="font-bold os-product-ideation-workshop-section5-right-color-green mb-5">
                Product ideation workshop 1:
              </h4>
              <h3 className="font-bold mb-5 text-3xl">Consume API products</h3>

              <p className="font-bold mb-3">
                As a fintech, greentech or other business, we can help you
                discover what APIs are available that could help you build
                customer-focused digital products and services that meet
                sustainability goals
              </p>

              <p>
                Build partnerships with API providers, define the customer
                journey, enhance your existing products with sustainability
                features by making use of APIs, or build whole new products for
                your customers that allow everyone to play a part in reducing
                negative climate impacts
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="os-product-ideation-workshop-section6 py-20">
          <div className="container mx-auto md:px-0 px-5">
            <h3 className="font-bold mb-10 text-center text-3xl">What <span className="bg-main-color text-white px-2">you will learn</span></h3>
          </div>
          <div className="container mx-auto md:px-0 px-5">
            <div className="os-product-ideation-workshop-section6-container">
              <div className="os-product-ideation-workshop-section6-box bg-white flex p-5 rounded-xl shadow-xl h-full mb-5">
                <img src={checkImg} alt=""  className="h-10 mr-5"/>
                <p className="p-0 m-0">
                  How to create innovative, viable new products that create
                  sustainability impacts by making use of available APIs and
                  drawing on best industry practices and solutions
                </p>
              </div>
              <div className="os-product-ideation-workshop-section6-box bg-white flex p-5 rounded-xl shadow-x h-full mb-5">
                <img src={checkImg} alt=""  className="h-10 mr-5"/>
                <p className="p-0 m-0">
                How to design for greater sustainability impact and avoid greenwashing and vanity metrics
                </p>
              </div>

              <div className="os-product-ideation-workshop-section6-box bg-white flex p-5 rounded-xl shadow-xl h-full">
                <img src={checkImg} alt=""  className="h-10 mr-5"/>
                <p className="p-0 m-0">
                What the existing and potential partnership and product creation opportunities for banks and fintech look like
                </p>
              </div>
              <div className="os-product-ideation-workshop-section6-box bg-white flex p-5 rounded-xl shadow-x h-full">
                <img src={checkImg} alt=""  className="h-10 mr-5"/>
                <p className="p-0 m-0">
                Methods for designing viable and revenue generating API business models and pricing strategies 
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="bg-main-color py-10" id="os-pwi-form">


        <div className="os-product-ideation-workshop-section7 ">
          <div className="container mx-auto text-center md:px-0 px-5">
          <h3 className="text-3xl font-bold text-white mb-5">
            Join us for the next <span className="os-product-idea-workshop-green-span-text-color">free workshop</span>, on <span className="os-product-idea-workshop-green-span-text-color"> March 9th</span>
          </h3>

          <h5 className="text-white mb-5 text-2xl">The workshop will be facilitated by the Platformable team:</h5>
          </div>
          <div className="os-product-ideation-workshop-section7-container px-20">
            <div className="os-piw-team text-center">
              <img src={markImg} alt="" className="w-48 mb-5" />
              <p className="text-white">Mark Boyd</p>
              <p className="italic text-white">Director</p>
            </div>

            <div className="os-piw-team text-center">
              <img src={jannikaImg} alt="" className="w-48 mb-5" />
              <p className="text-white">Jannika Aalto</p>
              <p className="italic text-white">Open Sustanability Lead</p>
            </div>


            <div className="os-piw-team text-center">
              <img src={phuongImg} alt="" className="w-48 mb-5"/>
              <p className="text-white">Phuong Pham</p>
              <p className="italic text-white">Open Banking and Open Finance Analyst</p>
            </div>

          </div>
        </div>


        <div className="container mx-auto py-10">

          <div className="os-piw-bottom grid md:grid-cols-3 grid-cols-1 ">
            <div>
            <p className="text-white md:block hidden">Online Tools</p>
            <div className="flex flex-wrap md:justify-start justify-center">
              <div className="w-24 mr-3">
                <img src={zoomImg} alt="" />
              </div>
              <div className="w-24">
                <img src={miroImg} alt="" />
              </div>
            </div>
            </div>

            <div className="grid justify-center items-center">
            <a
              className={`md:inline-block inline-block 
                    text-sm md:text-primary 
                    font-bold my-5  ml-2 bg-os-piw-btn w-max py-5 px-20 rounded-full 
                    hover:bg-secondary cursor-pointer`}
              href="https://www.the-ntwk.com/event-details/thentwkacademy-green-fintech-designing-for-impact"
              target="_blank"
            >
              I want to participate
            </a>
            </div>


        <div className="grid grid-cols-1 md:hidden">
          <div className="tet-center">
          <p className="text-white flex md:justify-end mr-5 md:text-left justify-center ">hosted in collaboration</p>
          </div>
          <div className="text-center">
          <img src={ntwkImg} alt="" className="w-24" />
          </div>
        </div>
            <div className="md:flex  md:items-end md:justify-end items-center md:px-0 px-5 hidden">
              <p className="text-white flex md:justify-end mr-5 md:text-left justify-center ">hosted in collaboration</p>
              <img src={ntwkImg} alt="" className="w-24" />
            </div>

          </div>

        </div>

      </section>


      <section >
        <div className="os-product-idea-workshop-our-workshop-subscribe-form py-10">
          <div className="container mx-auto os-product-ideation-workshop-section5-container md:px-0 px-5">
            <div className="os-product-ideation-workshop-section5-left">
              <img src={isIcon} alt="" width={300}/>
            </div>
            <div className="os-product-ideation-workshop-section5-right">
            
              <h3 className="font-bold mb-5 text-3xl">We publish Open Sustainability analysis and insights</h3>

              <p className=" mb-3">
              Hear more about our Open Sustainability work <br />
              Create positive impact and generate revenue
              </p>
              <div className="flex">
              <input
                type="text"
                className="rounded-l-lg p-4 border-t mr-0 border-b border-l text-main-color border-gray-200 bg-white subscribe-input"
                placeholder="Your email address"
                onChange={e => setForm(e.target.value)}
              />
              <button
                className="px-8 rounded-r-lg bg-main-color os-btn-text-green font-bold p-4  border-yellow-500 border-t border-b border-r"
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



      
      
    </Layout>
  )
}

export default IndexPage
