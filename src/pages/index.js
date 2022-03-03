import React,{useState} from "react"
import { Link, graphql, navigate } from "gatsby"
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image"
import BlogCardComponent from "../components/BlogCardComponent"

/*shared-components*/
import Layout from "../components/layout"
import SEO from "../components/seo"
import GridDisplay from "../components/shared-components/GridDisplay"
import Form from "../components/shared-components/Form"
/*specific-components*/
import PositionedSection from "../components/home-components/PositionedSection"
import HowWeDoItCards from "../components/home-components/HowWeDoItCards"
import WorkWithCards from "../components/home-components/WorkWithCards"
import SimpleSubscriptionForm from "../components/SimpleSubscriptionForm"


/* import apilandscapeImg from "../../assets/oe/api-landscape-icon.png" */
import apilandscapeImg from "../assets/oe/api-landscape-icon.png"
import QuarterlyImg from "../assets/product-streams/quarterly_trends_report.svg"
/*assets*/

import OBTrendsFile from '../static/ob/Platformable Open Banking Trends Report Q1 2022 January 2022.pdf'
import OSTrendsFile from '../static/os/Using_Open_Banking_APIs_to_Build_Green_Fintech_Q1_2022.pdf'

import {sectorsData} from './sectors'


import release1Img from '../static/homepage/last_release_01_workshop.png'
import release2Img from '../static/homepage/last_release_02_Open_Banking.png'
import release3Img from '../static/homepage/last_release_03_apilandscape.png'
import release4Img from '../static/homepage/last_release_04_OS_trends_report.png'

const IndexPage = ({ data }) => {


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



  const noStagingPosts = data
    ? data.allStrapiPost.edges.filter(post => post.node.staging !== true)
    : " "




  const postsCategories = [
    {
      name: "Open Banking / Open Finance",
      url: "/open-banking-posts",
    },
    {
      name: "Open Government",
      url: "/open-government-posts",
    },
    {
      name: "Open Health",
      url: "/open-health-posts",
    },
  ]
  const handleCategory = selectedCategory => {
    const found = postsCategories.find(
      cat => cat.name === selectedCategory.name
    )
    const goTo = found ? navigate(`${found.url}`) : null
    return goTo
  }
  const getMonthString = date => {
    return new Date(date).toLocaleString("default", {
      month: "short",
    })
  }
  const getDayString = date => {
    return new Date(date).toLocaleString("default", {
      day: "2-digit",
    })
  }

  // 225 w/m - average reading speed
  const calculateTimeToRead = article => {
    return Math.ceil(article.trim().split(/\s+/).length / 225)
  }


  /* TRENDS REPORT TILES */

  const trendsData = [
    {
      title:"Building green fintech: impactful design and product ideation",
      date:"Workshop - February 2022",
      //btnBackground:"btn-trends-ob",
      btnBackground:"bg-white",
      btnText:"Register now",
      //img:QuarterlyImg,
      img:release1Img,
      download:false,
      downloadText:"",
      url:"https://www.the-ntwk.com/event-details/thentwkacademy-green-fintech-designing-for-impact",
      /* url:OBTrendsFile */
    },
    {
        title:`Open Banking/Open Finance Trends Report`,
        date:2022,
        //btnBackground:"btn-trends-oh",
        btnBackground:"bg-white",
        btnText:"Download",
        //img:QuarterlyImg,
        img:release2Img,
        url:OBTrendsFile,
        download:true,
        downloadText:"Open-Banking-PlatFormable-Trends-Report"
      },
    {
      title:"API Landscape Tool and State of the Market",
      date:"apidays",
      //btnBackground:"btn-trends-oe",
      btnBackground:"bg-white",
      btnText:"Visit site",
      //img:apilandscapeImg,
      img:release3Img,
      url:"https://apilandscape.apiscene.io/",
      download:false
    },
    {
      title:`Open Sustainability Trends Report `,
      date:"2022",
      //btnBackground:"btn-trends-os",
      btnBackground:"bg-white",
      btnText:"Read it here",
      //img:QuarterlyImg,
      img:release4Img,
      //url:"/open-banking-apis-for-sustainability-an-open-ecosystem-approach",
      url:"/open-sustainability/trends/open-sustainability-trends-report-q1-2022/",
      //url:OSTrendsFile,
      //downloadText:"Using_Open_Banking_APIs_to_Build_Green_Fintech_Q1_2022",
      download:false
    },
  

  ]
  return (
    <Layout>
      <SEO title="Home" />
      <div className="homepage-hero-bg">
      <section className="container sm:mx-auto md:px-0 px-5  py-24">

        <div className="grid md:grid-cols-2 grid-cols-1 px-0 md:px-3 lg:px-0 xl:px-3">
          <div className="left flex items-center">
            <div>
              <h3 className="font-bold mb-5 text-base md:text-2xl">
                We support open ecosystems that build economic opportunities,
                solve complex problems, and enable everyone to participate and
                co-create their own value
              </h3>
               
              <Link
                to="/about"
                className="md:inline-block inline-block bg-white text-sm md:text-primary font-bold my-5 ml-2  py-2 px-10 rounded-full  cursor-pointer"
              >
                Learn more about us
              </Link>
              <a
                href="#subscription"
                className="md:inline-block inline-block bg-red-orange-dark text-sm md:text-primary font-bold my-5 ml-2  py-2 px-10 rounded-full  cursor-pointer"
              >
                Subscribe
              </a>
            </div>
          </div>
          <div className="right flex justify-end">
            <StaticImage
              src="../assets/home/hero_squares.png"
              alt="platformable"
              width={400}
            />
          </div>
        </div>
{/*         <br />
        <br /> */}
      </section>
      </div>


      <section className="trends-homepage bg-homepage-trends-releases  pt-2 pb-10">
      <div className="container mx-auto">
        <div className="my-5">
        <h3 className="text-2xl font-bold">Check out our latest releases</h3>
        </div>
      <div
        className={`grid md:grid-cols-4 grid-cols-1 md:px-0 px-5 gap-4`}
      >

        {trendsData.map((trend,index)=>{
          return (
      
             <div className="rounded-xl  h-full bg-homepage-latest-releases card-border shadow-xl ">
            <div className="text-center px-5">
            <p className="font-sm text-center py-3 trends-card-date">{trend.date}</p>
            <h5 className="text-center h-24 ">{trend.title}</h5>
            </div>

            <div className="mb-5">

            <img
              src={trend.img}
              alt=""
              className="h-50"
            />
            </div>
            
            
            <div className="text-center">
            {trend?.download && <a
            className={`md:inline-block inline-block 
            ${trend.btnBackground} text-sm md:text-primary 
            font-bold my-5 ml-2  py-2 px-10 rounded-full 
             cursor-pointer`}
            href={trend.url}
            download={trend.downloadText}>
            {trend.btnText}
          </a>}
          

          {trend?.download=== false  && 
          <a
            className={`md:inline-block inline-block 
            ${trend.btnBackground} text-sm md:text-primary 
            font-bold my-5 ml-2  py-2 px-10 rounded-full 
             ${trend.url===null ? "":"cursor-pointer"}`}
            href={trend.url}
            target={trend?.url?.includes("http")&& "_blank"}
            >
            {trend.btnText}
          </a>
        }  
          </div>
          </div> 

          )
        })}
     </div>
      </div>
    </section>



      <section >
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


    
      {/* POSTS */}
      <section className="cards-section my-2 container py-2 sm:mx-auto md:px-0 px-5">
        <div className="px-0 md:px-3 lg:px-0 xl:px-3">
          <div className="flex justify-between items-end  my-5">
          <h3 className="font-bold">Latest posts from our blog</h3>
          <Link to="/blog/">See all posts</Link>
          </div>
          <div className="grid grid-cols-1 grid-cols-1 md:grid-cols-3 text-lg md:text-sm lg:text-sm xl:text-lg gap-5">
    
           
            {data
              ? noStagingPosts.map((post, index) => {
                  while (index < 3 && post.node.staging === false) {
             
                    return (
                      <div className="rounded-xl pt-5 pb-10 top-blog-cards flex flex-col card-border relative">
                        <Link to={`/${post.node.slug}`}>
                          <div className="px-7 text-center justify-center mb-3 h-44 overflow-hidden">
                            <GatsbyImage
                              image={getImage(post.node.featured_image)}
                              className=""
                              alt={post.node.title}
                            />
                          </div>
                        </Link>
                        <div>
                          <div className="flex flex-col gap-3 h-auto mr-5 h-11 mb-2">
                            {post.node.categories.map((cat, index) => {
                              return (
                                <div
                                  key={index}
                                  className="flex justify-between"
                                >
                                  <div className="w-1/5">
                                    <div
                                      className={`flex text-center items-center w-16 h-16 md:w-14 md:h-14 lg:w-16 lg:h-16 xl:w-14 xl:h-14 bg-dark-${cat.name}
                                                    justify-center`}
                                    >
                                      <div className="flex flex-col text-white">
                                        <p className="font-bold text-xl">
                                          {getDayString(
                                            post.node.publishing_date
                                          )}
                                        </p>
                                        <p className="font-bold text-xl">
                                          {getMonthString(
                                            post.node.publishing_date
                                          )}
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                  <div
                                    className={
                                      cat.name === "Open Banking / Open Finance"
                                        ? `flex items-end justify-center flex-nowrap w-full ml-2 sm:-ml-11 md:ml-0`
                                        : `flex items-end justify-center flex-nowrap w-full -ml-11 md:ml-0 lg:-ml-11`
                                    }
                                  >
                                    <button
                                      key={index}
                                      to={cat.name}
                                      className={`text-dark-${cat.name} capitalise self-end md:self-center lg:self-end text-center`}
                                      onClick={() => handleCategory(cat)}
                                    >
                                      {cat.name}
                                    </button>
                                  </div>
                                </div>
                              )
                            })}

                            <div className="text-center ml-5">
                              <h5 class="capitalise font-bold">
                                <Link to={`/${post.node.slug}`}>
                                  {" "}
                                  {post.node.title}
                                </Link>
                              </h5>
                              <small className="small-text">
                                {`Written by `}{" "}
                              </small>
                              {post.node.user.length === 1 ? (
                                <Link
                                  className="hover:text-black transition duration-300 ease-in-out small-text mr-1"
                                  to={`/author/${post.node.user[0].id}`}
                                >{` ${post.node.user[0].username}`}</Link>
                              ) : post.node.user.length > 1 ? (
                                post.node.user.map((x, index) => (
                                  <Link
                                    key={index}
                                    to={`/author/${post.node.user[index].id}`}
                                    className="hover:text-black transition duration-300 ease-in-out small-text mr-1"
                                  >
                                    {x.username}{" "}
                                    {index < post.node.user.length - 1
                                      ? " & "
                                      : ""}
                                  </Link>
                                ))
                              ) : null}
                            </div>
                          </div>

                          {post.node.categories.map(cat => {
                            return (
                              <div
                                key={index}
                                className="absolute right-5 w-full bottom-5"
                              >
                                <div
                                  className={`flex gap-1 items-center justify-end fill-dark-${cat.name}`}
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    viewBox="0 0 20 20"
                                  >
                                    <path
                                      fillRule="evenodd"
                                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                                      clipRule="evenodd"
                                    />
                                  </svg>
                                  <p
                                    className={`text-dark-${cat.name} text-sm font-bold`}
                                  >
                                    {post.node.content
                                      ? calculateTimeToRead(post.node.content)
                                      : "0"}{" "}
                                    min read
                                  </p>
                                </div>
                              </div>
                            )
                          })}
                        </div>
                      </div>
                    )
                  }
                })
              : null}
          </div>
        </div>
      </section>


<section className="bg-primary relative  py-14 homepage-dark-purple-section ">
    <div className="container mx-auto md:px-0 px-5">

    <h3 className="text-white mb-10">Platform approaches <span className="text-white font-bold">have two big advantages</span></h3>
        

    <div className="grid md:grid-cols-3 grid-cols-1">
        <div className="homepage-dark-purple-section-left flex ">
        <StaticImage
                src="../assets/home/home-apiproviders.png"
             
              />
              <p className="p-5 text-left text-white">
                They open up the value previously locked in data and capabilties
              </p>
        </div>
        <div className="homepage-dark-purple-section-right flex">
        <StaticImage
                src="../assets/home/home-theyopenvalues.png"
        
           
              />
              <p className="p-5 text-center text-white">
                They enable digital ecosystems where everyone can participate
                and co-create
              </p>
        </div>

        <div></div>
    </div>

    </div>
</section>


<section className="homepage-we-measure-section">
    <div className="container mx-auto">
        <div className="homepage-sectors pt-2 pb-2">
            
            <h3 className="pt-2 text-center">We measure the <span className="font-bold "> growth of digital open ecosytems</span></h3>
              
        <section className="cards-section container mb-4 py-2 sm:mx-auto md:px-0 px-5">
      <div className=" mb-8 mx-0 md:px-3 lg:px-0 xl:px-3"></div>
      <div className="grid md:grid-cols-5 grid-cols-1 gap-5">
        {sectorsData.products.elements.map((el, i) => (
          <div
            key={i}
            className="rounded-3xl flex flex-col bg-white card-border items-center h-full">
            <div className="text-center self-start">
              <Link to={el.anchorLink}>
              <h5 className="my-5 text-center h-14 px-3 text-primary font-bold">
                    {el.title}
                  </h5>
                <img
                  src={el.img}
                  alt={el.title}
                  className="mx-auto text-center px-3 rounded-3xl self-start "
                  
                />

            <div className="py-5 rounded-b-3xl" style={{backgroundColor:el.color}}>
                  
             <button className="bg-white px-3 py-1 rounded-xl">Know more</button>
                </div>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
        </div>
    </div>

    <HowWeDoItCards />
</section>


     

  
      <WorkWithCards />





  
    </Layout>
  )
}

export default IndexPage

export const blogQuery = graphql`
  query HomepagePosts {
    allStrapiPost(sort: { fields: publishing_date, order: DESC }, limit: 100) {
      edges {
        node {
          categories {
            name
          }
          id
          slug
          staging
          publishing_date
          published_at
          is_featured
          tags {
            name
          }
          featured_image {
            childImageSharp {
              gatsbyImageData(
                width: 300
                blurredOptions: { width: 100 }
                placeholder: BLURRED
                formats: PNG
              )
            }
          }
          title
          updated_at
          content
          user {
            id
            username
          }
        }
      }
    }
  }
`
