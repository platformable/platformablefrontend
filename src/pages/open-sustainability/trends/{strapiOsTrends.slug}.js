import React,{useEffect,useState} from "react";
import Layout from "../../../components/layout";
import { StaticImage } from "gatsby-plugin-image"
import Trends2Cols from "../../../components/Trends2Cols";
import Trends3ColsComponent from "../../../components/Trends3ColsComponent";
import Trends2colsrwider from "../../../components/Trends2ColsRwider";
import TrendsMainImageOnLeftTextOnTheRight from '../../../components/TrendsMainImageOnLeftTextOnTheRight'
import SEO from "../../../components/seo";
import Trends1Col from "../../../components/Trends1Col";
import TrendsExecutiveSummaryComponent from "../../../components/TrendsExecutiveSummaryComponent";

import OSTrendsFile from '../../../static/os/Using_Open_Banking_APIs_to_Build_Green_Fintech_Q1_2022.pdf'

const TrendsPage = ({location,href }) => {

  const [form,setForm]=useState("");
  const [formSuccess,setFormSuccess]=useState(false)

  const handleSubscription = async (e) =>{
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
  const res = await response.statusText || response.statusMessage

  if(res==='OK' || res===undefined){
  setFormSuccess(!formSuccess)
  }
  
}

  const [data,setData]=useState([])

  const OsTrendsReportId=location.pathname

  let result = OsTrendsReportId.replace("/open-sustainability/trends/", "/");


const getTypeOfComponent = (section,index)=> {

  if(section.__component==="trends-reports.2columns"){
    return <Trends2Cols section={section} index={index}/>
  }

  if(section.__component==="trends-reports.3-columns"){
    return <Trends3ColsComponent section={section} index={index}/>
  }

  if(section.__component==="trends-reports.2-columns-right-side-bigger"){
    return <Trends2colsrwider section={section} index={index}/>
  }

  if(section.__component==="trends-reports.main-image-on-left-text-on-the-right"){
    return <TrendsMainImageOnLeftTextOnTheRight section={section} index={index} location={location.href}/>
  }

  if(section.__component==="trends-reports.1-column"){
    return <Trends1Col section={section} index={index} location={location.href}/>
  }
  if(section.__component==="trends-reports.executive-summary"){
    return <TrendsExecutiveSummaryComponent section={section} index={index} location={location.href}/>
  }


  
}


  const getTrendsReport = ()=>{
    fetch(`https://websiteserver-ds7cf.ondigitalocean.app/os-trends${result}`)
  //fetch(`http://localhost:1337/os-trends${result}`)
  .then(res =>  res.json())
  .then(response =>  setData(response))
}

    useEffect(()=>{
      getTrendsReport()
    },[])


/* 
const socialImg = data?.featured_image?.formats?.medium?.url;
console.log("data.featured_image: ",data?.featured_image.formats.medium.url) */
  return (
    <Layout>
      <SEO title={data.title} img="https://res.cloudinary.com/platform1/image/upload/v1645454942/Os_trends_report_cover_7dda1373ad.png"/>
      <section
        className=" md:my-5 my-5 sm:mx-auto md:px-0 px-5 md:py-5 py-2 bg-green-50 " /* style={{backgroundColor:"#0099bb"}} */
      >
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 grid-cols-1 px-0 md:px-3 lg:px-0 xl:px-3 items-center  h-100">
            <div className="left flex items-center">
              <div>
                <h3 className="font-bold mb-5 md:text-5xl text-1xl md:text-left text-center">{data.title}</h3>
                {/* <p className="text-sm">{data.excerpt}</p> */}
                <div dangerouslySetInnerHTML={{ __html: data?.hero_content }} className="hero-content"></div>
                       <a
                    className={`md:inline-block inline-block 
                    text-sm md:text-primary 
                    font-bold my-5  bg-russian-violet-dark text-white py-2 px-10 rounded-full 
                    hover:bg-secondary cursor-pointer`}
                    href={OSTrendsFile}
                    download="Platformable Open Banking Trends Report Q1 2022 January 2022">
                    Download Report
                  </a>

                  <a
                    className={`md:inline-block inline-block 
                    text-sm md:text-primary 
                    font-bold my-5  ml-2 bg-russian-violet-dark text-white py-2 px-10 rounded-full 
                    hover:bg-secondary cursor-pointer`}
                    href="#os-form"
                  >
                    Subscribe
                  </a>
              </div>
            </div>
            <div className="right flex justify-end md:block hidden">
              <StaticImage
                src="../../../static/os/main_hero_img.png"
                alt="platformable"
                width={800}
                className=""
              />
            </div>
          </div>
        </div>
      </section>

      
      <section className="trends-content">
        <div className="">
            {data?.Sections?.map((section,index)=>{
              return getTypeOfComponent(section,index)
            })}
        </div>
      </section>


      <section id="os-form">
        <div className="container mx-auto mt-10">
              <div>
{/*                 <p className="text-center text-xl">Our workshops cover architecture decisions, performance and technical metrics and how to comply with policy and regulatory requirements when building new product opportunities</p>
 */}                {/* <p className="text-center">Bring your data to life with our training.</p> */}
              <h2 className="text-2xl font-bold text-center mt-5">Sign up now to our trends reports</h2>
          <div className="m-4 flex justify-center">
          <input type="text" className="rounded-l-lg p-4 border-t mr-0 border-b border-l text-main-color border-gray-200 bg-white subscribe-input" placeholder="Your email address" onChange={(e)=>setForm(e.target.value)}/>
          <button className="px-8 rounded-r-lg bg-sunglow  text-gray-800 font-bold p-4 uppercase border-yellow-500 border-t border-b border-r" onClick={handleSubscription}>Subscribe</button>
        </div>
      </div>
      {formSuccess && <p className="text-center ">Thanks for your subscription, please check your email for a confirmation</p>}
        </div>
      </section>
    </Layout>
  )
};



export default TrendsPage;
